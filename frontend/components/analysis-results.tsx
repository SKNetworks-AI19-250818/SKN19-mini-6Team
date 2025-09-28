"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, TrendingDown, Loader2, AlertTriangle } from "lucide-react"
import type { StudentData } from "./student-data-form"

interface AnalysisResult {
  success: boolean
  sorted_improvements: Array<
    [
      string,
      {
        current: number
        target_avg: number
        difference: number
        improvement_ratio: number
        recommendation_type: string
      },
    ]
  >
}

interface AnalysisResultsProps {
  formData: StudentData | null
}

const featureNames: Record<string, string> = {
  traveltime: "통학시간",
  freetime: "자유시간",
  goout: "외출 빈도",
  alc: "음주량",
  absences: "결석 횟수",
  studytime: "주당 공부시간",
  activities: "과외활동 참여",
  internet: "인터넷 접근",
}

export function AnalysisResults({ formData }: AnalysisResultsProps) {
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!formData) {
      return
    }

    const analyze = async () => {
      setIsAnalyzing(true)
      setError(null)
      setResult(null)

      try {
        const queryString = new URLSearchParams(formData).toString()
        const response = await fetch(`/api/recommend?${queryString}`)
        if (!response.ok) {
          throw new Error("API 요청에 실패했습니다.")
        }
        const analysisResult: AnalysisResult = await response.json()
        setResult(analysisResult)
      } catch (e) {
        setError(e instanceof Error ? e.message : "알 수 없는 오류가 발생했습니다.")
      } finally {
        setIsAnalyzing(false)
      }
    }

    analyze()
  }, [formData])

  if (!formData) {
    return null
  }

  if (isAnalyzing) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            분석 중...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-lg text-muted-foreground">AI가 학생의 데이터를 분석하고 있습니다.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            분석 오류
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-lg text-destructive">{error}</p>
            <p className="text-sm text-muted-foreground mt-2">
              입력값을 확인하거나 잠시 후 다시 시도해주세요.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!result) {
    return null
  }

  if (!result.success || result.sorted_improvements.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            분석 결과
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-lg text-muted-foreground">개선할 사항이 없습니다.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-sky-200 dark:border-sky-800">
        <CardHeader className="bg-sky-100/50 dark:bg-sky-900/20 border-b border-sky-200 dark:border-sky-800">
          <CardTitle className="flex items-center gap-2 text-sky-900 dark:text-sky-100">
            <Target className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            성적 개선 권장사항
          </CardTitle>
          <CardDescription className="text-sky-700 dark:text-sky-300">
            AI 분석을 통한 개인 맞춤형 학습 개선 방안
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 bg-sky-25/30 dark:bg-sky-950/10">
          {result.sorted_improvements.map(([key, data], index) => {
            const featureName = featureNames[key] || key
            const isSpecialFeature = ["activities", "internet"].includes(key)

            return (
              <Card
                key={key}
                className="border-l-4 border-l-sky-500 bg-white/80 dark:bg-sky-950/30 border-sky-200 dark:border-sky-700"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-sky-900 dark:text-sky-100">
                      {data.recommendation_type === "증가" ? (
                        <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                      )}
                      {featureName}
                    </h3>
                    <Badge className="bg-sky-500 hover:bg-sky-600 text-white">우선순위 {index + 1}</Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-sky-600 dark:text-sky-400">현재 값:</span>
                        <span className="ml-2 font-medium text-sky-900 dark:text-sky-100">{data.current}</span>
                      </div>
                      <div>
                        <span className="text-sky-600 dark:text-sky-400">개선 필요도:</span>
                        <span className="ml-2 font-medium text-sky-900 dark:text-sky-100">
                          {Math.abs(data.improvement_ratio).toFixed(1)}%
                        </span>
                      </div>
                    </div>

                    <div className="bg-sky-100/70 dark:bg-sky-950/30 p-4 rounded-lg border border-sky-200 dark:border-sky-700">
                      {isSpecialFeature ? (
                        <div className="text-sm">
                          {data.current === 0 ? (
                            <p className="text-emerald-700 dark:text-emerald-400">
                              <strong>권장:</strong> 참여하세요!
                            </p>
                          ) : (
                            <p className="text-emerald-700 dark:text-emerald-400">
                              <strong>권장:</strong> 계속 참여하세요!
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="text-sm space-y-2 text-sky-800 dark:text-sky-200">
                          {data.recommendation_type === "감소" ? (
                            <p>
                              <strong>목표:</strong> {data.target_avg.toFixed(1)} (현재보다{" "}
                              {Math.abs(data.difference).toFixed(1)} 감소)
                            </p>
                          ) : (
                            <p>
                              <strong>목표:</strong> {data.target_avg.toFixed(1)} (현재보다 {data.difference.toFixed(1)}{" "}
                              증가)
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
