export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  성적 분석
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  학습 계획
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  진로 상담
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">지원</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  이용 가이드
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 FKiller. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
