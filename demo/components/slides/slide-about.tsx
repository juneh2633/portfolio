export function SlideAbout() {
  return (
    <section className="slide bg-background px-12 md:px-20 lg:px-32 py-16">
      <div className="flex flex-col justify-center h-full relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            About Me
          </span>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Main statement */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              함께 일하는 사람이
              <br />
              <span className="text-muted-foreground">이해하기 쉬운 흐름</span>을
              <br />
              만듭니다.
            </h2>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              좋은 백엔드는 서비스의 흐름을 안정적으로 지탱하고,
              다음 개발자가 쉽게 이어갈 수 있는 구조를 갖춰야 합니다.
            </p>

            {/* Keywords as minimal list */}
            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { en: "Collaboration", ko: "팀과 함께 성장" },
                  { en: "Structure", ko: "명확한 구조 설계" },
                  { en: "Maintainability", ko: "유지보수성" },
                  { en: "User Focus", ko: "사용자 경험 고려" },
                ].map((item) => (
                  <div key={item.en} className="flex items-baseline gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0 mt-2" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.en}</p>
                      <p className="text-xs text-muted-foreground">{item.ko}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-foreground" />
    </section>
  );
}
