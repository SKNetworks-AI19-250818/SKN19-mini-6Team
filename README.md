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
      김종현
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
      <td>주제 확정</td>
    </tr>
    <tr>
      <td>9월17일-18일</td>
      <td>공통</td>
      <td>데이터 수집 및 정제</td>
    </tr>
    <tr>
      <td>9월19일-22일</td>
      <td>공통</td>
      <td>EDA</td>
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
  

<img width="317" height="237" alt="image2" src="https://github.com/user-attachments/assets/17a3ce62-868f-4e4a-8a4c-5a98cb19bd17" />

- “학업 고민… 청소년 정신겅강에 빨간불 켠다” (원불교신문, 2023)
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

<br />

#  <div align="center"> 🛠️ 전처리 과정 </div>    
**1. school &rarr; 학교명별로 One-Hot 인코딩으로 변환**
<div align="center"><img src="images/image-0.png" width="45%"/> </div>

**2. 이진이지만 str타입으로 저장된 특성들을 int형 변환 및 적절한 특성명으로 바꿈**
<div align="center"><img src="images/image-1.png" width="45%"/> </div>
<div align="center"><img src="images/image-3.png" width="60%"/> </div>

**3. 해석하기 난해한 특성들 제거**
- FJob & MJob: 부모직업에 others가 성적에 상관관계가 있더라도 해석을 못 하면 쓸모가 없음
- reasons: 학교다니는 이유이나 각 범주별 차이점이 안 드러남
<div align="center"><img src="images/image-4.png" width="60%"/> </div>

**4. G1, G2, G3(시험점수)에 결손치가 없는 것 같지만 0으로 표기돼있음.**
- 해당과목을 drop한 사람으로 출석기록 또한 0으로 표시됨. 즉 0은 시험점수가 0점임을 의미하지 않음.
- G1, G2 점수가 비슷하니 평균값으로 G3를 대처하면 좋겠지만 출석기록은 중요한 지표이기에 중간에 drop한 학생들은 제거

**5. 점수는 수치형 데이터이고 정규분포를 따르므로 standard scaling함.**
- ML 단계에선 target인 G3는 scaling하지 말아야하고 알고리즘 종류에 따라 G1, G2도 scaling해야할지 고민해야 함.

<div align="center"><img src="images/image-5.png" width="70%"/> </div>

**6. 전처리 전/후 상관계수 매트릭스** (non numeric으로 빠졌었던 컬럼과 해석하기 난해한 컬럼을 제거했음)
- 전처리 전 (밝은 하늘색은 0 ~ 0.1점대)

<div align="center"><img src="images/image-7.png" width="100%"/> </div>

- 전처리 후 (주황색 0.2 ~ 0.4점대)
<div align="center"><img src="images/image.png" width="100%"/> </div>
<br />

#  <div align="center"> 🌟 실제 예측 결과 </div>  

<br />

#  <div align="center"> 💡 프로젝트 기대 효과 </div>    
- 학습 데이터 분석을 통해 **학습자 특성별 차이, 성과 패턴, 이탈 요인** 등을 발견할 수 있다.
- 이는 단순한 데이터 분석을 넘어 **학습 방법 개선·맞춤형 교육·정책 제안** 같은 응용 가치가 있다.
