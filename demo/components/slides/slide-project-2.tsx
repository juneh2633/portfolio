import { ImageIcon } from "lucide-react";

export function SlideProject2() {
  return (
    <section className="slide bg-background px-12 md:px-20 lg:px-32 py-16">
      <div className="flex flex-col justify-center h-full relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Project 02
          </span>
        </div>

        {/* Content - Two column with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Project info */}
          <div>
            {/* Project title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-2">
              Cloud#
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              Space 기반 셀프호스팅 파일 협업 서비스
            </p>

            {/* Problem & Solution */}
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
                  Problem
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  개인 드라이브와 공유 폴더 중심 구조는 팀 협업과 권한 관리가 복잡해질 수 있음
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
                  Solution
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Space를 최상위 협업 단위로 두고, 파일, 멤버, 권한, 용량 정책을 Space 중심으로 분리
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
                  My Role
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Space 중심 도메인 설계, 파일 업로드 흐름, 권한 구조, 저장소 확장 가능성을 고려한 백엔드 설계
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image placeholder + Technical points */}
          <div className="space-y-6">
            {/* Image placeholder */}
            <div className="aspect-video bg-secondary/50 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center">
              <ImageIcon className="w-12 h-12 text-muted-foreground/50 mb-2" />
              <p className="text-sm text-muted-foreground">프로젝트 이미지</p>
            </div>

            {/* Technical highlights */}
            <div>
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                Technical Points
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "tus 재개 가능 업로드",
                  "논리/물리 저장소 분리",
                  "Space 단위 권한 설계",
                  "Self-hosting 지원",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-foreground shrink-0" />
                    {point}
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
