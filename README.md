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
      <a href="https://github.com/Hawon-Oh"><b>Hawon Oh</b></a> 
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
- 프로젝트 개요: 학업 성취도(G3)에 영향을 미치는 다양한 요인을 분석하고, 성적 향상 전략을 도출하기 위한 EDA(탐색적 데이터 분석) 프로젝트

- 프로젝트 주제 :
  성적 예측 및 영향 요인 분석
 - 중간 성적(G1, G2)과 공부 시간, 결석률, 생활습관, 가정환경, 건강 요인 등을 종합적으로 분석하여 최종 성적(G3) 향상에 기여하는 주요 요인 도출

1. 주제 및 데이터셋 선정 이유
   주제 선정 배경
   - 학생들의 학업 성취도를 다양한 방면에서 종합적으로 분석해 영향을 끼치는 요인을 확인
   - 성취도 향상 전략과 위험 요인 조기 파악
  
2. 데이터셋 선정 이유
  1. 다차원적 요인 포함
    - 학업 요인(G1, G2, studytime, absences)
    - 생활습관 요인(freetime, goout, Dalc, Walc)
    - 가정환경 요인(Medu, Fedu, famsup)
    - 건강 요인(health)
     => 다양한 관점에서 성적에 영향을 주는 요소를 시각화와 통계적 탐색을 통해 분석 가능

2. 시계열적 성격
  - G1(1차 성적), G2(2차 성적), G3(최종 성적) 데이터가 제공되어
  시간 흐름에 따른 성취도 변화를 관찰하고 인사이트를 도출할 수 있음

3. 균형 잡힌 데이터 품질
  - 결측치가 거의 없고, 구조화된 설문 기반 데이터
  - 전처리 부담이 적어 EDA 본연의 목적에 집중 가능

4. 교육적·사회적 의미
  - 학생들의 학업 성취와 행동 특성 간의 관계를 파악하여
  - 성취도 향상 전략이나 위험 요인 조기 발견에 기여할 수 있는 잠재력 보유

<br />


#  <div align="center"> 📑 데이터셋 </div>  
- 데이터 출처 : [UCI Adult](https://archive.ics.uci.edu/datasets?skip=0&take=10&sort=desc&orderBy=NumHits&search=Student+Performance)
- 파일 명 : `after_scaling.csv`, `before_scaling.csv` 

<br />

#  <div align="center"> 🛠️ 전처리 과정 </div>    

<br />

#  <div align="center"> 🌟 실제 예측 결과 </div>  

<br />

#  <div align="center"> 💡 프로젝트 기대 효과 </div>    
- 학습 데이터 분석을 통해 **학습자 특성별 차이, 성과 패턴, 이탈 요인** 등을 발견할 수 있다.
- 이는 단순한 데이터 분석을 넘어 **학습 방법 개선·맞춤형 교육·정책 제안** 같은 응용 가치가 있다.
