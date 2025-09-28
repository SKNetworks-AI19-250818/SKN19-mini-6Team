from fastapi import FastAPI


import pandas as pd
# from ML.recommend import StudentImprovementAdvisor
from joblib import load
from recommend import StudentImprovementAdvisor

# FastAPI 앱 생성
app = FastAPI()

# recommend에 필요한 객체 로드
df = pd.DataFrame(pd.read_csv('data/fkillerML_data.csv'))
knn = load("models/knn_model_v1.0.0.pkl")
scaler = load("scalers/scaler.pkl")
advisor = StudentImprovementAdvisor(df, knn, scaler, 
                                    ['traveltime','studytime', 'activities', 'internet', 'freetime', 'goout', 'alc', 'absences'],
                                    grade_column='grade'
                                    )


@app.get("/recommend")
def recommend(fromCity: str, sex: int, age: int, Pedu: int, traveltime: int,
              studytime: int, activities: int, internet: int, freetime: int,
              goout: int, alc: int, absences: int, grade: int):
    
    user_input = { "fromCity": fromCity, "sex": sex, "age": age, "Pedu": Pedu,
                  "traveltime": traveltime, "studytime": studytime, "activities": activities, "internet": internet,
                  "freetime": freetime, "goout": goout, "alc": alc, "absences": absences, "grade": grade
                  }
    
    result = advisor.analyzeNewStudent(user_input)
    
    return result



@app.get("/ping")
def ping():
    return {"ping": "pong"}

# 서버 실행
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=True)



