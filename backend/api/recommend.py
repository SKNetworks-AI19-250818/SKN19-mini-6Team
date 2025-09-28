import pandas as pd
import numpy as np
from joblib import load


class StudentImprovementAdvisor:
    def __init__(self, df, knn_model, scaler, feature_columns, grade_column='grade'):
        """
        KNN 기반 학생 특성 개선 분석 (사전 학습된 모델 사용)
        
        Parameters:
        df: 학생 데이터프레임 (전처리 완료된 상태)
        knn_model: 사전 학습된 KNN 모델
        scaler: 사전 학습된 StandardScaler
        feature_columns: 모델 학습에 사용된 특성 컬럼 리스트
        grade_column: 성적 컬럼명
        """
        self.df = df.copy()
        self.grade_column = grade_column
        self.knn = knn_model
        self.scaler = scaler
        self.feature_col = feature_columns
        
        # 컬럼 분류
        self.unchangeable_col = ['fromCity', 'sex', 'age', 'Pedu']  # 바꿀 수 없는 특성
        self.decrease_only_col = ['traveltime', 'freetime', 'goout', 'alc', 'absences']  # 줄이는 것만 권장
        self.increase_only_col = ['studytime']  # 늘리는 것만 권장
        self.binary_increase_col = ['activities', 'internet']  # 이진 데이터, 1로만 권장
    
    def _convert_to_python_types(self, obj):
        """numpy 자료형을 기본 파이썬 자료형으로 변환"""
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        elif isinstance(obj, dict):
            return {key: self._convert_to_python_types(value) for key, value in obj.items()}
        elif isinstance(obj, list):
            return [self._convert_to_python_types(item) for item in obj]
        elif isinstance(obj, tuple):
            return tuple(self._convert_to_python_types(item) for item in obj)
        else:
            return obj
        
    def analyzeNewStudent(self, student_data):
        """
        새로운 학생 데이터의 개선점 분석
        
        Parameters:
        student_data: 새로운 학생의 특성 딕셔너리
        """
        # 필수 특성들이 모두 있는지 확인
        required_features = self.feature_col + [self.grade_column]
        missing_features = [feature for feature in required_features if feature not in student_data]
        
        # 누락된 필수 특성 존재
        if missing_features:
            return {
                'success': False,
                'error': f'Missing features: {missing_features}'
            }
        
        # 새로운 학생 정보 추출
        target_grade = student_data[self.grade_column]
        target_features = pd.Series({col: student_data[col] for col in self.feature_col})
        
        
        # 새로운 학생의 특성을 스케일링
        target_features_array = np.array([target_features[col] for col in self.feature_col]).reshape(1, -1)
        target_scaled = self.scaler.transform(target_features_array)
        
        # 유사한 학생들 찾기
        distances, indices = self.knn.kneighbors(target_scaled)
        
        # 모든 유사한 학생들 (자기 자신이 아니므로 전체 사용)
        similar_indices = indices[0]
        similar_distances = distances[0]
        
        # 유사한 학생들 중 성적이 더 좋은 학생들만 필터링
        better_students = []
        for idx, dist in zip(similar_indices, similar_distances):
            actual_idx = self.df.index[idx]  # DataFrame의 실제 인덱스
            similar_student = self.df.iloc[idx]
            if similar_student[self.grade_column] > target_grade:
                better_students.append({
                    'index': int(actual_idx),  # numpy.int64 -> int
                    'data': self._convert_to_python_types(similar_student.to_dict()),  # Series -> dict, numpy types -> python types
                    'distance': float(dist)  # numpy.float64 -> float
                })
        
        # 이미 최고점일 경우 추천할게 없음
        if not better_students:
            return {
                "success": True,
                'sorted_improvements': []
            }
            
        # 성적이 더 좋은 유사 학생들의 평균 특성 계산
        better_df = pd.DataFrame([student['data'] for student in better_students])
        avg_better_features = better_df[self.feature_col].mean()
        avg_better_grade = better_df[self.grade_column].mean()
        
        # 개선점 분석 (컬럼별 제약사항 적용)
        improvements = {}
        valid_improvements = {}  # 실제 권장할 수 있는 개선사항만
        
        for feature in self.feature_col:
            current_value = target_features[feature]
            better_avg = avg_better_features[feature]
            difference = better_avg - current_value
            improvement_ratio = (difference / current_value * 100) if current_value != 0 else 0
            
            improvements[feature] = {
                'current': float(current_value),  # numpy -> float
                'target_avg': float(better_avg),  # numpy -> float
                'difference': float(difference),  # numpy -> float
                'improvement_ratio': float(improvement_ratio)  # numpy -> float
            }
            
            # 컬럼별 제약사항 확인
            should_recommend = False
            recommendation_type = ""
            
            if feature in self.decrease_only_col:
                if difference < 0:  # 줄여야 하는 경우만 권장
                    should_recommend = True
                    recommendation_type = "감소"
            elif feature in self.increase_only_col:
                if difference > 0:  # 늘려야 하는 경우만 권장
                    should_recommend = True
                    recommendation_type = "증가"
            elif feature in self.binary_increase_col:
                if current_value == 0 and better_avg > 0.5:  # 현재 0이고 상위학생들이 주로 1인 경우
                    should_recommend = True
                    recommendation_type = "참여"
            else:  # 일반 특성 (Pedu 등)
                if abs(difference) > 0.1:  # 의미있는 차이가 있는 경우
                    should_recommend = True
                    recommendation_type = "증가" if difference > 0 else "감소"
            
            if should_recommend:
                improvements[feature]['recommendation_type'] = recommendation_type
                valid_improvements[feature] = improvements[feature]
        
        # 개선 우선순위 (유효한 개선사항만, 개선 비율 기준)
        sorted_improvements = sorted(valid_improvements.items(), 
                                   key=lambda x: abs(x[1]['improvement_ratio']), 
                                   reverse=True)
        
        # 더 우수한 학생은 있으나 추천할 개선사항은 없음
        if not sorted_improvements:
            return {
                "success": True,
                'sorted_improvements': []
            }
        else:
            return {
                'success': True,
                'sorted_improvements': sorted_improvements
            }