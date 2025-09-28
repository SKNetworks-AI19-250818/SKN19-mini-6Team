"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { StudentDataForm, type StudentData } from "@/components/student-data-form"
import { AnalysisResults } from "@/components/analysis-results"
import { Footer } from "@/components/footer"

export default function AnalysisPage() {
  const [formData, setFormData] = useState<StudentData | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">학생 성적 분석</h1>
              <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                AI가 성적 개선을 위한 맞춤형 권장사항을 제공합니다. 학생 정보를 입력하세요.   
              </p>
            </div>
            <div className="space-y-12">
              <StudentDataForm onFormSubmit={setFormData} />
              <AnalysisResults formData={formData} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
