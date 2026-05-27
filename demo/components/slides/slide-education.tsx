export function SlideEducation() {
  const education = [
    {
      period: "2025.01 - 현재",
      title: "삼성청년SW아카데미 (SSAFY)",
      desc: "12기 Java 전공",
    },
    {
      period: "2019.03 - 2025.02",
      title: "인하대학교",
      desc: "수학과 졸업",
    },
    {
      period: "2023.07 - 2023.12",
      title: "Stageus",
      desc: "웹 개발 과정 수료",
    },
  ];

  return (
    <section className="slide bg-background px-12 md:px-20 lg:px-32 py-16">
      <div className="flex flex-col justify-center h-full relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Education
          </span>
        </div>

        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-12">
          학력 및 교육
        </h2>

        {/* Timeline */}
        <div className="space-y-0">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[180px_1fr] md:grid-cols-[220px_1fr] gap-8 py-6 border-b border-border last:border-b-0"
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
