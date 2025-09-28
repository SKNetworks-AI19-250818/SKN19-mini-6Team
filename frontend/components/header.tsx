import { Button } from "@/components/ui/button"
import { GraduationCap, Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">FKiller   </h1>
              <p className="text-sm text-muted-foreground">맞춤형 학습 분석 AI   </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/analysis" className="text-foreground hover:text-primary transition-colors">
              분석하기
            </Link>
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              서비스 소개
            </Link>
            <Button variant="outline" size="sm">
              문의하기
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
