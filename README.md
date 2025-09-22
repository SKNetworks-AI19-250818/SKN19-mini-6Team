#  <div align="center"> 🙋팀원 소개   </div> 
<div align="center">
  <table>
  <tr>
    <td align="center"> 
      <img src="https://avatars.githubusercontent.com/u/79193369?v=4" width="100px;" alt="김민정"/>   
      <br/>
      김민정
      <br/>
      <a href="https://github.com/MinJeung-Kim"><b>@MinJeung-Kim</b></a> 
    </td> 
    <td align="center"> 
      <img src="https://avatars.githubusercontent.com/u/227073315?v=4" width="100px;" alt="김종현"/>   
      <br/>
    정종현
      <br/>
      <a href="https://github.com/myem21"><b>@myem21</b></a> 
    </td>
   <td align="center"> 
      <img src="https://avatars.githubusercontent.com/u/156564995?v=4" width="100px;" alt="박소희"/>   
      <br/>
      박소희
      <br/>
      <a href="https://github.com/xxoysauce"><b>@xxoysauce</b></a> 
    </td> 
   <td align="center"> 
      <img src="https://avatars.githubusercontent.com/u/181833818?v=4" width="100px;" alt="Hawon Oh"/>  
      <br/> 
      오하원
      <br/>
      <a href="https://github.com/Hawon-Oh"><b>@Hawon Oh</b></a> 
    </td> 
  </tr>
</table>
</div>

<br />

#  <div align="center"> 📆 WBS   </div>  
<div align="center">
<table border="1">
  <thead>
    <tr>
      <th>날짜</th>
      <th>담당자</th>
      <th>산출물</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9월15일-16일</td>
      <td>공통</td>
      <td>주제 조사, 확정</td>
    </tr>
    <tr>
      <td>9월17일-18일</td>
      <td>공통</td>
      <td>데이터 수집, 정제</td>
    </tr>
    <tr>
      <td>9월19일-22일</td>
      <td>공통</td>
      <td>전처리, EDA</td>
    </tr>
    <tr>
      <td>9월22일</td>
      <td>공통</td>
      <td>결과자료 정리</td>
    </tr>
  </tbody>
</table>
</div>


<br />

#  <div align="center"> 🚩 프로젝트 주제 및 선정 배경  </div>  
## 1. 환경적 배경 (Background)

- **디지털 환경 확산 → 청소년 생활 패턴 변화**
    
    디지털 환경 확산, 사교육 의존도 증가, 부모 맞벌이 등 사회 변화가 청소년 학습 시간, 생활습관, 가정환경에 큰 영향을 미침.
    
- **청소년 정신건강·생활습관 악화 기사 근거**
<img width="610" height="504" alt="image" src="https://github.com/user-attachments/assets/5316a45f-9ebd-4820-b7bc-2d521a94cc93" />

- “청소년 스트레스 인지율 역대 최고” (경향신문, 2024)
  

<img width="634" height="474" alt="image2" src="https://github.com/user-attachments/assets/17a3ce62-868f-4e4a-8a4c-5a98cb19bd17" />

- “학업 고민… 청소년 정신건강에 빨간불 켠다” (원불교신문, 2023)
- **코로나19 이후 교육 격차 심화**
    
    원격수업, 등교일수 감소 → 학업 성취도 격차 확대, 부모 지원·사교육 접근성에 따른 성적 차이 심화.
    

---

## 2. 문제 인식 (Problem Awareness)

- **다차원적 요인이 성적에 미치는 영향에 대한 체계적 분석 부족**
    
    성적과 학습 시간, 가정환경, 생활습관, 건강 요인 간 관계에 대한 정량적 탐색 필요.
    
- **조기 위험 신호 포착 어려움**
    
    성적 급락 학생 조기 발견과 맞춤형 지원 정책 설계가 체계적 근거 부족으로 한계.
    
- **사회적 불평등과 연결 가능성**
    
    부모 학력, 가정 지원(famsup), 생활습관 차이가 성적 차이와 직결될 가능성 존재.
    

---

## 3. 목적 (Purpose)

- **데이터 기반 학업 성취도 영향 요인 도출**
    
    성적(G3)에 영향을 주는 학업, 생활, 가정환경, 건강 요인을 통계적·시각적으로 분석.
    
- **성적 향상 전략 제시**
    
    조기 위험 학생 탐지, 맞춤형 학습·생활 지원 전략 마련 근거 제공.
    
- **사회 문제 해결 기여**
    
    교육 격차 해소, 청소년 정신건강 관리, 생활습관 개선 등 정책적·교육적 시사점 도출.

<br />


#  <div align="center"> 📑 데이터셋 </div>  
- 데이터 출처 : [UCI Adult](https://archive.ics.uci.edu/datasets?skip=0&take=10&sort=desc&orderBy=NumHits&search=Student+Performance)
- 파일 명 : `after_scaling.csv`, `before_scaling.csv` 

## 🔍 전처리한 데이터셋 컬럼별 설명

| 순번 | 영문 컬럼명 | 한국어 번역 | 데이터 타입 | 상세 설명 |
| --- | --- | --- | --- | --- |
| 1 | school | 학교 | 범주형 | 학생이 다니는 학교 (GP: Gabriel Pereira, MS: Mousinho da Silveira) |
| 2 | sex | 성별 | 이진 | 학생의 성별 (F: 여성, M: 남성) |
| 3 | age | 나이 | 수치형 | 학생의 나이 (15-22세) |
| 4 | address | 거주지역 | 이진 | 집 주소 유형 (U: 도시, R: 시골) |
| 5 | famsize | 가족규모 | 이진 | 가족 크기 (LE3: 3명 이하, GT3: 3명 초과) |
| 6 | Pstatus | 부모동거상태 | 이진 | 부모의 동거 상태 (T: 함께 거주, A: 별거) |
| 7 | Medu | 어머니교육수준 | 수치형 | 어머니 교육 (0: 무교육, 1: 초등교육, 2: 5-9학년, 3: 중등교육, 4: 고등교육) |
| 8 | Fedu | 아버지교육수준 | 수치형 | 아버지 교육 (0: 무교육, 1: 초등교육, 2: 5-9학년, 3: 중등교육, 4: 고등교육) |
| 9 | Mjob | 어머니직업 | 범주형 | 어머니 직업 (teacher: 교사, health: 보건, services: 공무원, at_home: 전업주부, other: 기타) |
| 10 | Fjob | 아버지직업 | 범주형 | 아버지 직업 (teacher: 교사, health: 보건, services: 공무원, at_home: 전업주부, other: 기타) |
| 11 | reason | 학교선택이유 | 범주형 | 학교 선택 이유 (home: 집과 가까움, reputation: 명성, course: 과정, other: 기타) |
| 12 | guardian | 보호자 | 범주형 | 학생의 보호자 (mother: 어머니, father: 아버지, other: 기타) |
| 13 | traveltime | 통학시간 | 수치형 | 집에서 학교까지 시간 (1: 15분 미만, 2: 15-30분, 3: 30분-1시간, 4: 1시간 초과) |
| 14 | studytime | 주간공부시간 | 수치형 | 주당 공부 시간 (1: 2시간 미만, 2: 2-5시간, 3: 5-10시간, 4: 10시간 초과) |
| 15 | failures | 과거낙제횟수 | 수치형 | 이전 과락 횟수 (1-3회, 4: 3회 이상) |
| 16 | schoolsup | 학교추가지원 | 이진 | 추가 교육 지원 (yes: 있음, no: 없음) |
| 17 | famsup | 가족학습지원 | 이진 | 가족의 교육 지원 (yes: 있음, no: 없음) |
| 18 | paid | 유료수업 | 이진 | 해당 과목 유료 수업 (yes: 수강, no: 미수강) |
| 19 | activities | 과외활동 | 이진 | 교과외 활동 참여 (yes: 참여, no: 미참여) |
| 20 | nursery | 유치원경험 | 이진 | 유치원 다닌 경험 (yes: 있음, no: 없음) |
| 21 | higher | 고등교육희망 | 이진 | 고등교육 진학 희망 (yes: 희망, no: 미희망) |
| 22 | internet | 인터넷접근 | 이진 | 집에서 인터넷 접근 (yes: 가능, no: 불가능) |
| 23 | romantic | 연인관계 | 이진 | 연애 관계 여부 (yes: 있음, no: 없음) |
| 24 | famrel | 가족관계품질 | 수치형 | 가족 관계의 질 (1: 매우 나쁨 ~ 5: 매우 좋음) |
| 25 | freetime | 여가시간 | 수치형 | 방과 후 자유 시간 (1: 매우 적음 ~ 5: 매우 많음) |
| 26 | goout | 외출빈도 | 수치형 | 친구와 외출 빈도 (1: 매우 적음 ~ 5: 매우 자주) |
| 27 | Dalc | 평일음주 | 수치형 | 평일 알코올 소비 (1: 매우 적음 ~ 5: 매우 많음) |
| 28 | Walc | 주말음주 | 수치형 | 주말 알코올 소비 (1: 매우 적음 ~ 5: 매우 많음) |
| 29 | health | 건강상태 | 수치형 | 현재 건강 상태 (1: 매우 나쁨 ~ 5: 매우 좋음) |
| 30 | absences | 결석횟수 | 수치형 | 학교 결석 횟수 (0-93회) |
| 31 | G1 | 1차성적 | 수치형 | 1학기 성적 (0-20점) |
| 32 | G2 | 2차성적 | 수치형 | 2학기 성적 (0-20점) |
| 33 | G3 | 최종성적 | 수치형 | **최종 성적 (0-20점) - 예측 대상** |

<br />

#  <div align="center"> 🛠️ 전처리 과정 </div>    
**1. school &rarr; 학교명별로 One-Hot 인코딩으로 변환**
<div align="center"><img src="images/image-0.png" width="30%"/> </div>

**2. 이진이지만 str타입으로 저장된 특성들을 int형 변환 및 적절한 특성명으로 바꿈**
<div align="center"><img src="images/image-1.png" width="30%"/> </div>
<div align="center"><img src="images/image-3.png" width="45%"/> </div>

**3. 해석하기 난해한 특성들 제거**
- FJob & MJob: 부모직업에 others와 같은 불분명한 직업 존재 -> 성적과의 상관관계 도출 어려움
- reasons: 학교다니는 이유이나 각 범주별 차이점이 안 드러남
<div align="center"><img src="images/image-4.png" width="50%"/> </div>

**4. G1, G2, G3(시험점수)에 결손치가 없는 것 같지만 0으로 표기돼있음.**
- 해당과목을 drop한 사람으로 출석기록 또한 0으로 표시됨. 즉 0은 시험점수가 0점임을 의미하지 않음.
- G1, G2 점수가 유사해 평균값으로 G3를 대체 가능하지만, 출석기록은 중요한 지표이기에 중간에 drop한 학생들은 제거

**5. 점수는 수치형 데이터이고 시험별 난이도가 상이함. &rarr; 정규분포를 따르므로 standard scaling**
- ML 단계에선 target인 G3는 scaling하지 말아야하고 알고리즘 종류에 따라 G1, G2도 scaling해야할지 고민해야 함.

<div align="center"><img src="images/image-5.png" width="50%"/> </div>

**6. 전처리 전/후 상관계수 매트릭스** (non numeric으로 빠졌었던 컬럼과 해석하기 난해한 컬럼을 제거했음)
- 전처리 전 (밝은 하늘색은 0 ~ 0.1점대)

<div align="center"><img src="images/image-7.png" width="100%"/> </div>

- 전처리 후 (주황색 0.2 ~ 0.4점대)
<div align="center"><img src="images/image-8.png" width="100%"/> </div>

->남은 변수들이 성적(G3)과 더 의미 있는 관계를 가질 가능성 시사
<br />

#  <div align="center"> 🌟 EDA 결과 </div>  
**학생성적에는 다양한 특성들이 기여함. 여러 특성들간의 기여도 및 관계성 파악 후 이를 머신러닝하면 해당 학생의 성적을 예측이 가능함.**

**1. 대체로 선형적이나 개수가 적은 수치에서 그래프가 튐. 추후 머신러닝의 확률이 낮다면 해당 특성에서 문제가 발생했을 수도 있음을 시사함.**
<div align="center"><img src="images/image-9.png" width="100%"/> </div>
<br />

**2. 부모 한쪽의 교육수준만 고려 시 학생성적에 큰 영향이 없으나 부모를 합쳐서 계산할 시 차이가 두드러짐.**
<div align="center"><img src="images/image-10.png" width="100%"/> </div>
📊 가족 배경 요인과 성적 상관관계:

  - Medu: 0.190 (중간)
  - Fedu: 0.159 (중간)
  - famrel: 0.038 (약함)

💡 가족 배경 핵심 인사이트:

  - 고학력 부모(부모 교육수준 6+ 합계) 자녀 평균: 12.08점
  - 저학력 부모(부모 교육수준 2- 합계) 자녀 평균: 10.34점
  - 교육격차: 1.73점
  - 가족 지원 있는 경우: 11.35점
  - 가족 지원 없는 경우: 11.80점
  - 가족 지원 효과: -0.45점

**3. EDA를 통해 평균적으로 최적의 공부 환경 및 방법에 대해 유추가능**
<div align="center"><img src="images/image-11.png" width="100%"/> </div>
📊 학습 관련 요인과 성적 상관관계:

  - G2: 0.966 (매우 강함 정적 상관)
  - G1: 0.892 (매우 강함 정적 상관)
  - studytime: 0.127 (약함 정적 상관)
  - traveltime: -0.100 (약함 부적 상관)
  - absences: -0.213 (중간 부적 상관)
  - failures: -0.294 (중간 부적 상관)

💡 학습 습관 핵심 인사이트:
  - 최적 공부시간: >10시간 (평균 12.67점)
  - 무결석 평균: 12.61점 vs 다결석(10회+) 평균: 10.15점
  - 결석의 부정적 영향: -2.46점


**4. 다양한 특성들이 성적에 기여하나 학생의 의지(failure, absences)와 학교의 서포트만으로도 성적향상은 충분함. (단, 하위에서 중위권 해당)**

🏆 성과 향상 요인 중요도 순위 (TOP 14):
   1. failures       : 0.294 (높음)
   2. schoolsup      : 0.238 (중간)
   3. absences       : 0.213 (중간)
   4. parent_edu_combined: 0.195 (중간)
   5. Medu           : 0.190 (중간)
   6. Walc           : 0.190 (중간)
   7. goout          : 0.177 (중간)
   8. Fedu           : 0.159 (중간)
   9. Dalc           : 0.141 (낮음)
  10. age            : 0.140 (낮음)
  11. fromCity       : 0.130 (낮음)
  12. studytime      : 0.127 (낮음)
  13. higher         : 0.113 (낮음)
  14. internet       : 0.112 (낮음)

⭐ 우수 학생들의 공통 특징 (16점 이상, 40명):
  - famsup: 1 (60.0%)
  - schoolsup: 0 (97.5%)
  - paid: 0 (67.5%)
  - internet: 1 (92.5%)
  - activities: 1 (52.5%)
  - higher: 1 (100.0%)

#  <div align="center"> 💡 프로젝트 기대 효과 </div>    
- 학습 데이터 분석을 통해 **학습자 특성별 차이, 성과 패턴, 이탈 요인** 등을 발견할 수 있다.
- 이는 단순한 데이터 분석을 넘어 **학습 방법 개선·맞춤형 교육·정책 제안** 같은 응용 가치가 있다.
