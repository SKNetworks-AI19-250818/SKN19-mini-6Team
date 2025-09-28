"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, BarChart3 } from "lucide-react"

export interface StudentData {
  fromCity: string
  sex: string
  age: string
  Pedu: string
  traveltime: string
  studytime: string
  activities: string
  internet: string
  freetime: string
  goout: string
  alc: string
  absences: string
  grade: string
}

interface StudentDataFormProps {
  onFormSubmit: (data: StudentData) => void
}

export function StudentDataForm({ onFormSubmit }: StudentDataFormProps) {
  const [formData, setFormData] = useState<StudentData>({
    fromCity: "",
    sex: "",
    age: "",
    Pedu: "",
    traveltime: "",
    studytime: "",
    activities: "",
    internet: "",
    freetime: "",
    goout: "",
    alc: "",
    absences: "",
    grade: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    onFormSubmit(formData)
  }

  const handleInputChange = (field: keyof StudentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return Object.values(formData).every((value) => value !== "")
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          학생 정보 입력
        </CardTitle>
        <CardDescription>정확한 분석을 위해 학생의 학습 관련 정보를 입력해주세요</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fromCity">출신지역</Label>
              <Select value={formData.fromCity} onValueChange={(value) => handleInputChange("fromCity", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="출신지역 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">시골</SelectItem>
                  <SelectItem value="1">도시</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sex">성별</Label>
              <Select value={formData.sex} onValueChange={(value) => handleInputChange("sex", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="성별 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">여성</SelectItem>
                  <SelectItem value="1">남성</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="age">나이</Label>
              <Input
                id="age"
                type="number"
                placeholder="18"
                min="15"
                max="22"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="Pedu">부모 교육수준</Label>
              <Select value={formData.Pedu} onValueChange={(value) => handleInputChange("Pedu", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="교육수준 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">무교육</SelectItem>
                  <SelectItem value="1">초등교육</SelectItem>
                  <SelectItem value="2">5-9학년</SelectItem>
                  <SelectItem value="3">중등교육</SelectItem>
                  <SelectItem value="4">고등교육</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="traveltime">통학시간</Label>
              <Select value={formData.traveltime} onValueChange={(value) => handleInputChange("traveltime", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="통학시간 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">15분 미만</SelectItem>
                  <SelectItem value="2">15-30분</SelectItem>
                  <SelectItem value="3">30분-1시간</SelectItem>
                  <SelectItem value="4">1시간 초과</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="studytime">주당 공부시간</Label>
              <Select value={formData.studytime} onValueChange={(value) => handleInputChange("studytime", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="공부시간 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">2시간 미만</SelectItem>
                  <SelectItem value="2">2-5시간</SelectItem>
                  <SelectItem value="3">5-10시간</SelectItem>
                  <SelectItem value="4">10시간 초과</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="activities">과외활동 참여</Label>
              <Select value={formData.activities} onValueChange={(value) => handleInputChange("activities", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="참여 여부 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">안함</SelectItem>
                  <SelectItem value="1">함</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="internet">인터넷 접근</Label>
              <Select value={formData.internet} onValueChange={(value) => handleInputChange("internet", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="접근 여부 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">없음</SelectItem>
                  <SelectItem value="1">있음</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="freetime">자유시간</Label>
              <Select value={formData.freetime} onValueChange={(value) => handleInputChange("freetime", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="1-5" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">매우 적음</SelectItem>
                  <SelectItem value="2">적음</SelectItem>
                  <SelectItem value="3">보통</SelectItem>
                  <SelectItem value="4">많음</SelectItem>
                  <SelectItem value="5">매우 많음</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="goout">외출 빈도</Label>
              <Select value={formData.goout} onValueChange={(value) => handleInputChange("goout", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="1-5" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">매우 적음</SelectItem>
                  <SelectItem value="2">적음</SelectItem>
                  <SelectItem value="3">보통</SelectItem>
                  <SelectItem value="4">자주</SelectItem>
                  <SelectItem value="5">매우 자주</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="alc">음주량</Label>
              <Select value={formData.alc} onValueChange={(value) => handleInputChange("alc", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="1-5" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">매우 적음</SelectItem>
                  <SelectItem value="2">적음</SelectItem>
                  <SelectItem value="3">보통</SelectItem>
                  <SelectItem value="4">많음</SelectItem>
                  <SelectItem value="5">매우 많음</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="absences">결석 횟수</Label>
              <Input
                id="absences"
                type="number"
                placeholder="0"
                min="0"
                value={formData.absences}
                onChange={(e) => handleInputChange("absences", e.target.value)}
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">시험점수 (0-20)</Label>
              <Input
                id="grade"
                type="number"
                placeholder="15"
                min="0"
                max="20"
                value={formData.grade}
                onChange={(e) => handleInputChange("grade", e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={!isFormValid()}>
            {"성적 분석 시작하기"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
