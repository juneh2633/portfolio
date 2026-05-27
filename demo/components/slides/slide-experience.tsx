export function SlideExperience() {
  const experience = [
    {
      period: "2025.02",
      title: "KSIAM 봄 학술대회 포스터 발표",
      desc: "학부연구생 연구 결과 발표",
    },
    {
      period: "2024.11",
      title: "INHA SW NET-Zero 해커톤 장려상",
      desc: "환경 관련 소프트웨어 개발",
    },
    {
      period: "2024.03 - 2024.12",
      title: "CTP 운영진",
      desc: "알고리즘 스터디 강의 및 운영",
    },
    {
      period: "2023.03 - 2024.08",
      title: "학부연구생",
      desc: "Machine Learning 연구",
    },
    {
      period: "2023.03 - 2024.02",
      title: "인하인피아노사랑 회장",
      desc: "동아리 운영 및 행사 기획",
    },
  ];

  return (
    <section className="slide bg-background px-12 md:px-20 lg:px-32 py-16">
      <div className="flex flex-col justify-center h-full relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Experience
          </span>
        </div>

        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-12">
          경험 및 수상
        </h2>

        {/* Timeline */}
        <div className="space-y-0">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] gap-8 py-5 border-b border-border last:border-b-0"
            >
              <div className="text-sm font-medium text-muted-foreground">
                {item.period}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-foreground" />
    </section>
  );
}
