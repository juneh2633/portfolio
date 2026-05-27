export function SlideSkills() {
  const skills = [
    {
      category: "Backend",
      items: ["Spring Boot", "NestJS", "REST API", "WebSocket"],
    },
    {
      category: "Architecture",
      items: ["Clean Architecture", "Hexagonal", "Layered"],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "JPA", "Query Optimization"],
    },
    {
      category: "Infra",
      items: ["Docker", "AWS S3", "CloudFront", "GitHub Actions"],
    },
    {
      category: "Algorithm",
      items: ["C++", "Problem Solving", "Data Structure"],
    },
  ];

  return (
    <section className="slide bg-background px-12 md:px-20 lg:px-32 py-16">
      <div className="flex flex-col justify-center h-full relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px bg-foreground" />
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Skills
          </span>
        </div>

        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-10">
          수행할 수 있는 역할
        </h2>

        {/* Skills - Clean horizontal layout */}
        <div className="grid grid-cols-5 gap-6 mb-10">
          {skills.map((skill) => (
            <div key={skill.category}>
              <h3 className="text-sm font-bold text-foreground mb-3 pb-2 border-b border-border">
                {skill.category}
              </h3>
              <div className="space-y-1.5">
                {skill.items.map((item) => (
                  <p key={item} className="text-sm text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Role description - Minimal */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border">
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              API Design
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              서비스 요구사항을 API로 설계하고, 인증, 요청 흐름, 예외 처리를 구현합니다.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              Structure Design
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              변경에 강한 구조를 만들기 위해 계층 간 책임을 분리하고 의존성을 관리합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-foreground" />
    </section>
  );
}
