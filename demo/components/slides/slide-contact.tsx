import { ArrowUpRight } from "lucide-react";

export function SlideContact() {
  return (
    <section className="slide bg-background px-12 md:px-20 lg:px-32 py-16">
      <div className="flex flex-col justify-center h-full relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Contact
          </span>
        </div>

        {/* Main message - Large editorial */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground leading-tight mb-8">
          함께 일하고
          <br />
          싶습니다.
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
          협업, 구조, 성능, 유지보수성을 함께 고민하며
          오래가는 서비스를 만들어가겠습니다.
        </p>

        {/* Contact links - Minimal style */}
        <div className="flex flex-col gap-4 max-w-md">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
          >
            <span className="text-lg font-medium text-foreground">GitHub</span>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
          >
            <span className="text-lg font-medium text-foreground">Email</span>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        </div>

        {/* Signature */}
        <div className="mt-12 pt-8 border-t border-border max-w-md">
          <p className="text-sm text-muted-foreground">
            <span className="text-xl font-black text-foreground">왕준혁</span>
            <span className="mx-3">—</span>
            Backend Developer
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-foreground" />
    </section>
  );
}
