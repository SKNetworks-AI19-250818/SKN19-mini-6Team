import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Target, BookOpen } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            AI가 분석하는
            <span className="text-primary block">맞춤형 성적 개선</span>
            솔루션
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
            학생의 데이터를 분석하여 성적 향상을 위한 구체적이고 실행 가능한 개선 방안을 제시합니다.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/analysis">지금 분석 시작하기</Link>
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">성적 예측</h3>
            <p className="text-sm text-muted-foreground">현재 데이터 기반 성적 예측 및 개선 가능성 분석</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-4">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">군집 분석</h3>
            <p className="text-sm text-muted-foreground">유사한 학생군과의 비교를 통한 개선점 도출</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="p-3 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
              <Target className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">맞춤 권장사항</h3>
            <p className="text-sm text-muted-foreground">개인별 특성에 맞는 구체적인 학습 개선 방안</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="p-3 bg-chart-3/10 rounded-full w-fit mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-chart-3" />
            </div>
            <h3 className="font-semibold mb-2">실행 계획</h3>
            <p className="text-sm text-muted-foreground">7일, 30일 단위의 실천 가능한 학습 계획 제공</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
