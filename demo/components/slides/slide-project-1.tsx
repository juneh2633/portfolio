import { ImageIcon } from "lucide-react";

export function SlideProject1() {
  return (
    <section className="slide bg-background px-12 md:px-20 lg:px-32 py-16">
      <div className="flex flex-col justify-center h-full relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Project 01
          </span>
        </div>

        {/* Content - Two column with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Project info */}
          <div>
            {/* Project title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-2">
              popn.gg
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              리듬게임 플레이 데이터와 이미지 리소스를 다루는 백엔드 서비스
            </p>

            {/* Problem & Solution */}
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
                  Problem
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  대량의 플레이 데이터 조회와 이미지 제공 과정에서 불필요한 Entity 조회와 리소스 응답 비용이 발생
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
                  Solution
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  JPQL DTO Projection으로 필요한 필드만 조회하고, S3와 CloudFront를 활용해 이미지 제공 구조 개선
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1">
                  My Role
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  백엔드 API 설계, 데이터 조회 최적화, 이미지 업로드 구조, CDN 기반 리소스 제공 흐름 설계
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
                  "N+1 문제 개선",
                  "DTO Projection 최적화",
                  "S3 이미지 저장",
                  "CloudFront CDN",
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
