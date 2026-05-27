import { ArrowRight } from "lucide-react";

export function SlideTitle() {
  return (
    <section className="slide bg-background px-12 md:px-20 lg:px-32 py-16">
      <div className="flex flex-col justify-center h-full relative z-10">
        {/* Minimal top line */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Backend Developer Portfolio
          </span>
        </div>

        {/* Name - Editorial style */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tight leading-[0.9] mb-8">
          왕준혁
        </h1>

        {/* Main statement */}
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 leading-relaxed max-w-xl font-light mb-12">
          몇 시간이고 고민합니다,
          <br />
          <span className="font-semibold text-foreground">당신의 1초를 위해.</span>
        </p>

        {/* Minimal CTA */}
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
          <span>팀과 함께 오래가는 서비스를 만드는 백엔드 개발자</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-foreground" />
    </section>
  );
}
