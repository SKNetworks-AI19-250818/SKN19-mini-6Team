import requests
import socket
import subprocess
import sys

def check_local_server():
    """로컬 서버 상태 확인"""
    urls_to_check = [
        "http://localhost:8000",
        "http://127.0.0.1:8000"
    ]
    
    for url in urls_to_check:
        try:
            response = requests.get(url, timeout=5)
            print(f"[SUCCESS] {url} - 상태: {response.status_code}")
            return True
        except:
            print(f"[ERROR] {url} - 연결 실패")
    return False

def get_local_ip():
    """로컬 IP 주소 확인"""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        local_ip = s.getsockname()[0]
        s.close()
        return local_ip
    except:
        return None

def check_local_network():
    """같은 네트워크에서 접근 확인"""
    local_ip = get_local_ip()
    if local_ip:
        url = f"http://{local_ip}:8000"
        try:
            response = requests.get(url, timeout=5)
            print(f"[SUCCESS] 로컬 네트워크 접근 성공: {url} - {response.status_code}")
            return True
        except Exception as e:
            print(f"[ERROR] 로컬 네트워크 접근 실패: {url} - {e}")
    return False

def get_public_ip():
    """공인 IP 확인"""
    try:
        response = requests.get("http://ipinfo.io/ip", timeout=10)
        return response.text.strip()
    except:
        return None

def check_port_listening():
    """포트 8000이 열려있는지 확인"""
    try:
        if sys.platform.startswith('win'):
            result = subprocess.run(['netstat', '-an'], capture_output=True, text=True)
            if ':8000' in result.stdout:
                print("[SUCCESS] 포트 8000이 열려있음")
                return True
        print("[ERROR] 포트 8000이 열려있지 않음")
        return False
    except:
        print("[ERROR] 포트 상태를 확인할 수 없음")
        return False

def test_recommend_endpoint():
    """recommend 엔드포인트 테스트"""
    test_params = {
        'fromCity': 1,
        'sex': 1,
        'age': 16,
        'Pedu': 3,
        'traveltime': 2,
        'studytime': 3,
        'activities': 1,
        'internet': 1,
        'freetime': 3,
        'goout': 4,
        'alc': 2,
        'absences': 6,
        'grade': 10
    }
    
    # 로컬에서 테스트
    try:
        response = requests.get("http://localhost:8000/recommend", params=test_params, timeout=5)
        print(f"[SUCCESS] 로컬 recommend 엔드포인트: {response.status_code}")
        if response.status_code == 200:
            print(f"   응답: {response.json()}")
        return True
    except Exception as e:
        print(f"[ERROR] recommend 엔드포인트 실패: {e}")
        return False

def main():
    print("서버 디버깅 중...")
    print("="*50)
    
    # 1. 로컬 서버 확인
    print("\n1️⃣ 로컬 서버 상태 확인")
    local_ok = check_local_server()
    
    if not local_ok:
        print("\n[ERROR] 로컬 서버가 실행되지 않고 있습니다!")
        print("[FIX] 해결방법:")
        print("   uvicorn main:app --host 0.0.0.0 --port 8000")
        return
    
    # 2. 포트 확인
    print("\n2️⃣ 포트 상태 확인")
    check_port_listening()
    
    # 3. 네트워크 접근 확인
    print("\n3️⃣ 네트워크 접근 확인")
    local_ip = get_local_ip()
    print(f"   로컬 IP: {local_ip}")
    check_local_network()
    
    # 4. 공인 IP 확인
    print("\n4️⃣ 공인 IP 확인")
    public_ip = get_public_ip()
    print(f"   공인 IP: {public_ip}")
    
    # 5. 엔드포인트 테스트
    print("\n5️⃣ recommend 엔드포인트 테스트")
    test_recommend_endpoint()
    
    # # 6. Postman 테스트 URL 제공
    # print("\n Postman 테스트 URL:")
    # if local_ip:
    #     print(f"   로컬 네트워크: http://{local_ip}:8000/recommend")
    # if public_ip:
    #     print(f"   외부 접근: http://{public_ip}:8000/recommend")
    
    print("\n체크리스트:")
    print("   □ 서버가 0.0.0.0:8000으로 실행 중")
    print("   □ Windows 방화벽 8000 포트 허용")
    print("   □ 공유기 포트포워딩 설정")
    print("   □ ISP 포트 차단 없음")

if __name__ == "__main__":
    main()