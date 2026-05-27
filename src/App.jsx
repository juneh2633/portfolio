import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bug,
  ImageIcon,
  Layers,
  ListChecks,
  Target,
  Trophy,
  UserRound,
  Wrench,
} from "lucide-react";
import profileImage from "../assets/profile.png";
import popnAnalysisImage from "../assets/projects/popn/analysis.png";
import popnHomeImage from "../assets/projects/popn/home.png";
import popnProfileImage from "../assets/projects/popn/profile.png";

const contactLinks = [
  { label: "Email", value: "juneh2633@gmail.com", href: "mailto:juneh2633@gmail.com" },
  { label: "GitHub", value: "github.com/juneh2633", href: "https://github.com/juneh2633" },
  { label: "Phone", value: "+82 010 8549 0120", href: "tel:+8201085490120" },
];

const historyItems = [
  {
    period: "2025.07 - 현재",
    type: "Education",
    title: "삼성청년SW·AI아카데미",
    desc: "소프트웨어 개발 및 프로젝트 기반 교육 과정",
  },
  {
    period: "2019.03 - 2025.08",
    type: "Education",
    title: "인하대학교 수학과 졸업",
    desc: "논리적 사고, 알고리즘, 머신러닝 기반 학습",
  },
  {
    period: "2024.07 - 2025.07",
    type: "Education",
    title: "학부연구생, Machine Learning",
    desc: "이미지 분류 및 비전 모델 관련 연구 경험",
  },
  {
    period: "2023.08 - 2024.03",
    type: "Education",
    title: "Stageus 수료",
    desc: "웹 개발 및 서비스 구현 학습",
  },
  {
    period: "2025.05",
    type: "Experience",
    title: "KSIAM 봄 학술대회",
    desc: "머신러닝 주제 포스터 발표",
  },
  {
    period: "2024.06",
    type: "Experience",
    title: "INHA SW NET-Zero 공동 해커톤",
    desc: "장려상 수상",
  },
  {
    period: "2024.03 - 2025.01",
    type: "Experience",
    title: "CTP 운영진",
    desc: "알고리즘 학습 커리큘럼 기획 및 강의 운영",
  },
  {
    period: "2023.02 - 2024.01",
    type: "Experience",
    title: "인하인피아노사랑 회장",
    desc: "동아리 행사 기획, 일정 조율, 공연 운영",
  },
  {
    period: "2019.05",
    type: "Experience",
    title: "인하 동아리 프로젝트 공모전",
    desc: "동상 수상",
  },
];

const skills = [
  {
    category: "Java",
    level: 4,
    items: [
      "Spring Boot 기반 REST API 설계 및 구현",
      "헥사고날 아키텍처를 적용하여 도메인 로직과 외부 인프라 간 관심사 분리",
      "테스트 용이성과 확장성을 고려한 구조 설계",
    ],
  },
  {
    category: "TypeScript",
    level: 4,
    items: [
      "NestJS 기반 REST API 설계 및 구현",
      "WebRTC 시그널링 서버 및 WebSocket 기반 양방향 통신 구현",
      "Next.js를 이용한 간단한 클라이언트 개발 경험",
    ],
  },
  {
    category: "AWS",
    level: 3,
    items: [
      "EC2, S3, RDS를 활용한 백엔드 서비스 배포 및 운영",
      "IAM을 통한 권한 분리 및 보안 그룹 설정으로 안전한 클라우드 환경 관리",
    ],
  },
  {
    category: "CI/CD",
    level: 2,
    items: [
      "Docker 기반 컨테이너 환경 구성으로 일관된 배포 환경 구축",
      "GitHub Actions를 활용한 빌드·테스트 자동화 파이프라인 구성",
      "Jenkins 기반 배포 자동화 및 CI/CD 프로세스 관리",
    ],
  },
];

const projects = [
  {
    id: "popn",
    label: "Project 01",
    title: "popn.gg",
    subtitle: "플레이데이터 조회와 이미지 리소스 제공 구조를 개선한 백엔드 프로젝트",
    period: "2025.03 - 2025.06",
    team: "Team Project",
    role: "Backend Developer",
    theme: "performance",
    keywords: ["DTO Projection", "Query Optimization", "Statistics API", "Cloudflare CDN"],
    showcase: [
      { label: "홈 / 신규 악곡", src: popnHomeImage, variant: "home" },
      { label: "유저 프로필", src: popnProfileImage, variant: "profile" },
      { label: "곡 상세 분석", src: popnAnalysisImage, variant: "analysis" },
    ],
    overview:
      "대량 플레이데이터 조회 성능과 곡 자켓 이미지 제공 구조를 개선해, 화면에 필요한 데이터를 빠르게 전달하도록 재설계한 프로젝트입니다.",
    intro: [
      "많은 플레이 기록을\n빠르게 조회하고\n분석할 수 있도록 만들었습니다.",
      "곡, 채보, 유저 기록, 랭킹, 스코어 분포 데이터를 제공하는 서비스에서\n대량 데이터 조회 성능과 이미지 제공 구조를 개선했습니다.\n\nDTO Projection, DB 집계, 페이지네이션을 적용해 조회 비용을 줄이고,\nS3와 Cloudflare CDN을 활용해 반복 이미지 요청을 효율적으로 처리했습니다.",
    ],
    problem: {
      title: "대량 플레이데이터 조회와 이미지 리소스 제공 과정에서 응답 비용이 커지는 문제가 있었습니다.",
      items: [
        {
          label: "Problem",
          text: "Entity 전체 조회와 Lazy Loading 기반 접근으로 N+1 가능성과 불필요한 객체 생성 비용이 발생할 수 있었습니다.",
        },
        {
          label: "Solution",
          text: "DTO Projection, DB 집계, 페이지네이션을 적용해 화면에 필요한 데이터만 조회하도록 개선했습니다.",
        },
        {
          label: "Goal",
          text: "곡 목록, 유저 프로필, 곡 상세 분석 화면에서 대량 데이터를 빠르게 제공하고 이미지 로딩 체감을 개선합니다.",
        },
      ],
    },
    myRole: [
      "백엔드 API 설계 및 데이터 조회 최적화",
      "통계 응답 구조와 DB 집계 기반 조회 흐름 설계",
      "S3 원본 저장소와 Cloudflare CDN 기반 이미지 제공 흐름 구성",
      "레거시 Entity 중심 조회를 화면 전용 Projection 구조로 재설계",
    ],
    techStack: [
      { name: "Spring Boot", reason: "REST API와 도메인 중심 백엔드 구조를 안정적으로 구성하기 위해 사용" },
      { name: "JPA / JPQL", reason: "DTO Projection으로 필요한 필드만 조회하고 Entity 로딩 비용을 줄이기 위해 사용" },
      { name: "MySQL", reason: "랭크, 메달, 레벨별 통계를 DB 집계 중심으로 처리하기 위해 사용" },
      { name: "Redis", reason: "검색용 Read Model과 대량 갱신 Lock을 구성해 응답 크기와 중복 작업을 줄이기 위해 사용" },
      { name: "S3 / Cloudflare CDN", reason: "곡 자켓 이미지 원본 저장과 edge cache 기반 이미지 제공 구조를 만들기 위해 사용" },
    ],
    implementations: [
      {
        title: "대량 조회 성능 개선",
        desc: "Entity 전체 조회를 줄이고 DTO Projection과 페이지네이션으로 필요한 데이터만 조회했습니다.",
        tech: "DTO Projection, Pagination",
      },
      {
        title: "통계 집계 구조 개선",
        desc: "랭크, 메달, 레벨별 통계를 애플리케이션 순회가 아닌 DB 집계와 Projection 중심으로 처리했습니다.",
        tech: "DB Aggregation",
      },
      {
        title: "이미지 제공 구조 개선",
        desc: "S3 원본 저장소 앞단에 Cloudflare CDN을 구성해 반복 이미지 요청을 edge cache에서 처리했습니다.",
        tech: "S3, Cloudflare CDN",
      },
      {
        title: "라이브 검색 최적화",
        desc: "전체 데이터를 내려받아 검색하던 구조를 백엔드 검색 API와 Redis Read Model 기반으로 전환했습니다.",
        tech: "Redis, Search API",
      },
      {
        title: "대량 갱신 안정화",
        desc: "playdata 갱신을 요청 흐름에서 분리하고 Redis Lock과 Worker 기반 처리 구조로 정리했습니다.",
        tech: "Redis Lock, Worker",
      },
    ],
    troubleshooting: [
      {
        problem: "Entity 전체 조회와 Lazy Loading으로 인한 N+1 가능성",
        cause: "화면 응답에 필요한 값보다 더 큰 Entity 그래프를 조회하는 레거시 구조",
        solution: "화면 전용 DTO Projection 조회로 변경하고, 페이지네이션을 적용해 조회 범위를 제한",
        result: "불필요한 객체 생성과 반복 조회 가능성을 줄이고 대량 playdata 조회 흐름을 단순화",
      },
      {
        problem: "곡 자켓 이미지 반복 요청으로 인한 로딩 지연과 원본 요청 부하",
        cause: "곡 목록, 검색, 랭킹 화면에서 동일 이미지가 반복 조회되는 서비스 특성",
        solution: "S3에 저장된 곡 자켓 이미지를 Cloudflare CDN으로 제공해 edge cache에서 처리",
        result: "이미지 제공 책임을 분리하고 반복 조회 화면의 이미지 로딩 체감을 개선",
      },
    ],
    result: {
      outcomes: ["대량 데이터 조회 흐름 단순화", "통계 API 조회 비용 감소", "곡 자켓 이미지 제공 책임 분리"],
      learnings: ["화면 요구사항에 맞는 Projection 설계", "DB 집계와 애플리케이션 처리 책임 분리", "CDN cache를 고려한 이미지 제공 구조"],
      next: ["실제 트래픽 기반 성능 측정", "Redis 검색 Read Model 고도화", "대량 갱신 Worker 모니터링 강화"],
    },
  },
  {
    id: "cloudsharp",
    label: "Project 02",
    title: "Cloud#",
    subtitle: "Space 기반 셀프호스팅 파일 협업 서비스",
    period: "2025.07 - 2025.09",
    team: "Team Project",
    role: "Backend Developer",
    theme: "structure",
    keywords: ["Collaboration", "File Upload", "Permission", "Self-hosting"],
    overview:
      "개인 드라이브가 아니라 Space를 중심으로 파일, 멤버, 권한, 용량 정책을 묶어 협업 흐름을 설계한 프로젝트입니다.",
    intro: [
      "Cloud#은 팀 단위 협업 공간을 중심으로 파일을 관리하는 셀프호스팅 서비스입니다.",
      "파일 업로드, 권한, 저장소 정책이 커질수록 복잡해지기 쉬운 구조를 Space 단위로 정리하는 데 집중했습니다.",
    ],
    problem: {
      title: "파일 서비스는 저장보다 권한과 협업 구조가 더 빨리 복잡해집니다.",
      items: [
        {
          label: "Problem",
          text: "개인 드라이브와 공유 폴더 중심 구조는 팀 협업, 권한 변경, 용량 정책이 얽히며 관리가 어려워질 수 있습니다.",
        },
        {
          label: "Why",
          text: "사용자는 파일을 업로드하는 것뿐 아니라 누가, 어디서, 어떤 권한으로 접근하는지도 함께 관리해야 합니다.",
        },
        {
          label: "Goal",
          text: "Space를 최상위 협업 단위로 두고 파일과 멤버, 권한, 저장소 정책을 일관된 흐름으로 연결합니다.",
        },
      ],
    },
    myRole: [
      "Space 중심 도메인 모델 설계",
      "파일 업로드 흐름과 저장소 책임 분리",
      "멤버와 권한 정책의 기본 구조 설계",
      "셀프호스팅 환경을 고려한 백엔드 구성",
    ],
    techStack: [
      { name: "NestJS", reason: "모듈 단위로 기능을 분리하고 TypeScript 기반 서버 구조를 명확하게 관리하기 위해 사용" },
      { name: "tus", reason: "대용량 파일 업로드 중단과 재개를 고려한 업로드 흐름을 만들기 위해 사용" },
      { name: "PostgreSQL", reason: "Space, Member, File, Permission 관계를 안정적으로 표현하기 위해 사용" },
      { name: "Docker / Nginx", reason: "셀프호스팅 배포와 프록시 구성을 쉽게 재현하기 위해 사용" },
    ],
    implementations: [
      {
        title: "Space 중심 도메인",
        desc: "파일과 멤버, 권한을 Space 아래로 묶어 협업 단위를 명확히 했습니다.",
        tech: "NestJS, Domain Modeling",
      },
      {
        title: "재개 가능한 업로드",
        desc: "대용량 파일 업로드 중단 상황을 고려해 업로드 세션과 파일 저장 흐름을 분리했습니다.",
        tech: "tus, File Upload",
      },
      {
        title: "논리/물리 저장소 분리",
        desc: "사용자가 보는 파일 구조와 실제 저장 위치를 분리해 저장소 변경 가능성을 열어두었습니다.",
        tech: "Storage Abstraction",
      },
      {
        title: "권한 정책 기반 접근",
        desc: "Space 멤버 역할을 기준으로 파일 접근과 관리 권한을 제어하는 구조를 설계했습니다.",
        tech: "RBAC, PostgreSQL",
      },
    ],
    troubleshooting: [
      {
        problem: "파일 업로드 중 네트워크가 끊기면 처음부터 다시 올려야 하는 문제",
        cause: "단일 요청 기반 업로드는 중단 지점을 서버가 추적하기 어렵기 때문",
        solution: "업로드 세션을 분리하고 재개 가능한 업로드 프로토콜을 적용",
        result: "대용량 파일 업로드 실패 비용을 줄일 수 있는 구조 확보",
      },
      {
        problem: "파일 권한이 폴더, 멤버, Space 정책과 섞이는 문제",
        cause: "권한 기준이 여러 계층에 흩어지면 접근 판단 흐름이 복잡해짐",
        solution: "Space를 기준으로 멤버 역할과 파일 접근 흐름을 정리",
        result: "협업 단위별 권한 판단 경로가 단순해짐",
      },
    ],
    result: {
      outcomes: ["Space 중심 협업 모델 설계", "재개 가능한 파일 업로드 구조 마련", "저장소 확장 가능성 확보"],
      learnings: ["파일 서비스의 핵심은 저장소보다 권한 흐름이라는 점", "대용량 업로드에서 실패 복구 설계의 중요성", "셀프호스팅 환경에서 배포 재현성이 갖는 가치"],
      next: ["권한 상속 정책 구체화", "스토리지 어댑터 확장", "사용량 통계와 quota 정책 고도화"],
    },
  },
];

const caseStudySections = [
  { key: "intro", nav: "Intro", label: "Project Intro", icon: Layers },
  { key: "problem", nav: "Problem", label: "Problem & Goal", icon: Target },
  { key: "role", nav: "Role", label: "My Role", icon: UserRound },
  { key: "tech", nav: "Tech", label: "Tech Stack", icon: Wrench },
  { key: "implementation", nav: "Build", label: "Implementation", icon: ListChecks },
  { key: "troubleshooting", nav: "Fix", label: "Troubleshooting", icon: Bug },
  { key: "result", nav: "Result", label: "Result & Learning", icon: Trophy },
];

function padSlide(number) {
  return String(number + 1).padStart(2, "0");
}

function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <span className="label-line" />
      <span>{children}</span>
    </div>
  );
}

function TitleSlide() {
  return (
    <section className="slide editorial-slide title-slide" aria-label="Title">
      <div className="slide-inner title-inner">
        <SectionLabel>Backend Developer Portfolio</SectionLabel>
        <h1 className="title-name">왕준혁</h1>
        <p className="title-statement">
          몇 시간이고 고민합니다,
          <br />
          <strong>당신의 1초를 위해.</strong>
        </p>
        <div className="title-caption">
          <span>팀과 함께 오래가는 서비스를 만드는 백엔드 개발자</span>
          <ArrowRight />
        </div>
      </div>
      <div className="bottom-accent" />
    </section>
  );
}

function AboutSlide() {
  return (
    <section className="slide editorial-slide" aria-label="About">
      <div className="slide-inner">
        <SectionLabel>About Me</SectionLabel>
        <div className="about-editorial text-only">
          <div className="about-copy">
            <h2>
              함께 이해하고,
              <br />
              오래 이어갈 수 있는 구조를 고민합니다.
            </h2>
            <p>
              저는 기능을 완성하는 것만큼, 그 기능이 <strong>어떤 흐름 안에서 동작하는지</strong>
              <strong> 명확하게 남기는 것</strong>을 중요하게 생각합니다.
            </p>
            <p>
              좋은 백엔드는 <strong>서비스의 흐름</strong>을 안정적으로 지탱하고, 다음 개발자가
              <strong> 맥락을 잃지 않고 이어갈 수 있는 구조</strong>를 갖춰야 한다고 생각합니다.
            </p>
            <p>
              <strong>사용자의 경험</strong>과 <strong>팀의 협업 방식</strong>을 함께 고려하며,
              <strong> 오래 유지될 수 있는 서비스</strong>를 만들어가는 백엔드 개발자를 지향합니다.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-accent" />
    </section>
  );
}

function HistorySlide() {
  return (
    <section className="slide editorial-slide" aria-label="History">
      <div className="slide-inner history-inner">
        <SectionLabel>History</SectionLabel>
        <div className="resume-history-layout">
          <aside className="resume-profile">
            <div className="resume-photo">
              <img src={profileImage} alt="왕준혁 프로필 사진" />
            </div>
            <dl>
              <div>
                <dt>Phone</dt>
                <dd>010 8549 0120</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>juneh2633@gmail.com</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>github.com/juneh2633</dd>
              </div>
            </dl>
          </aside>

          <div className="resume-history-main">
            <div className="resume-history-columns">
              <HistoryGroup title="Education" items={historyItems.filter((item) => item.type === "Education")} />
              <HistoryGroup title="Experience" items={historyItems.filter((item) => item.type === "Experience")} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-accent" />
    </section>
  );
}

function HistoryGroup({ title, items }) {
  return (
    <section className="resume-history-group" aria-label={title}>
      <h2>{title}</h2>
      <div>
        {items.map((item) => (
          <article className="resume-history-row" key={`${item.period}-${item.title}`}>
            <time>{item.period}</time>
            <div>
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LevelMeter({ value }) {
  return (
    <span className="skill-meter" aria-label={`skill level ${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span className={index < value ? "filled" : ""} key={index} />
      ))}
    </span>
  );
}

function SkillsSlide() {
  return (
    <section className="slide editorial-slide" aria-label="Skills">
      <div className="slide-inner">
        <SectionLabel>Skills</SectionLabel>
        <div className="skills-detail-grid">
          {skills.map((skill) => (
            <article className="skill-detail-card" key={skill.category}>
              <header>
                <h3>{skill.category}</h3>
                <LevelMeter value={skill.level} />
              </header>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <div className="bottom-accent" />
    </section>
  );
}

function ProjectImagePlaceholder({ label }) {
  return (
    <div className="project-image-slot" aria-label={`${label} image placeholder`}>
      <ImageIcon />
      <p>{label}</p>
    </div>
  );
}

function ProjectShowcase({ project }) {
  if (!project.showcase?.length) {
    return <ProjectImagePlaceholder label={`${project.title} 화면 이미지`} />;
  }

  return (
    <div className={`service-showcase ${project.theme}`} aria-label={`${project.title} service screenshots`}>
      {project.showcase.map((image) => (
        <figure className={`browser-shot ${image.variant}`} key={image.label}>
          <div className="browser-bar">
            <span />
            <span />
            <span />
          </div>
          <img src={image.src} alt={`${project.title} ${image.label} 화면`} />
          <figcaption>{image.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function CaseStepNav({ project, activeKey }) {
  return (
    <div className="case-step-nav" aria-label={`${project.title} case study steps`}>
      {caseStudySections.map((section) => (
        <span className={section.key === activeKey ? "is-active" : ""} key={section.key}>
          {section.nav}
        </span>
      ))}
    </div>
  );
}

function ProjectsOverviewSlide({ goTo }) {
  return (
    <section className="slide editorial-slide" aria-label="Projects Overview">
      <div className="slide-inner project-slide-inner">
        <SectionLabel>Projects</SectionLabel>
        <div className="projects-overview">
          <div className="projects-overview-head">
            <h2>두 개의 프로젝트를 Case Study로 정리합니다.</h2>
            <p>
              각 프로젝트는 문제, 역할, 기술 선택, 구현, 트러블슈팅, 회고 흐름으로 나누어 발표자료처럼
              한 화면에 하나의 메시지가 보이도록 구성했습니다.
            </p>
          </div>
          <div className="project-overview-grid">
            {projects.map((project) => (
              <article className={`project-overview-card ${project.theme}`} key={project.id}>
                <div>
                  <span className="project-card-label">{project.label}</span>
                  <h3>{project.title}</h3>
                  <p>{project.overview}</p>
                </div>
                <ProjectImagePlaceholder label={`${project.title} 대표 이미지`} />
                <div className="project-keywords">
                  {project.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
                <button type="button" onClick={() => goTo(projectIntroIndexes[project.id])}>
                  상세 보기
                  <ArrowRight />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom-accent" />
    </section>
  );
}

function CaseStudySlide({ project, section }) {
  const Icon = section.icon;
  const eyebrowLabel = section.key === "intro" ? project.label : section.label;

  return (
    <section className={`slide editorial-slide case-slide ${project.theme}`} aria-label={`${project.title} ${section.label}`}>
      <div className="slide-inner project-slide-inner">
        <div className="case-frame">
          <header className="case-header">
            <div>
              <span className="case-eyebrow">
                <Icon />
                {eyebrowLabel}
              </span>
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
            </div>
            <CaseStepNav project={project} activeKey={section.key} />
          </header>

          {section.key === "intro" && (
            <div className="case-intro-layout">
              <div className="case-message">
                <h3>{project.intro[0]}</h3>
                <p>{project.intro[1]}</p>
                <div className="case-meta-grid">
                  <div>
                    <span>Period</span>
                    <strong>{project.period}</strong>
                  </div>
                  <div>
                    <span>Type</span>
                    <strong>{project.team}</strong>
                  </div>
                  <div>
                    <span>Role</span>
                    <strong>{project.role}</strong>
                  </div>
                </div>
                <div className="project-keywords">
                  {project.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              </div>
              <ProjectShowcase project={project} />
            </div>
          )}

          {section.key === "problem" && (
            <div className="case-split-layout">
              <div className="case-message">
                <h3>{project.problem.title}</h3>
                <p>문제와 목표를 먼저 분리해, 구현의 방향이 기술 선택보다 앞에 오도록 정리했습니다.</p>
              </div>
              <div className="case-card-stack">
                {project.problem.items.map((item) => (
                  <article className="case-info-card" key={item.label}>
                    <span>{item.label}</span>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
              <ProjectImagePlaceholder label="문제 흐름 다이어그램" />
            </div>
          )}

          {section.key === "role" && (
            <div className="case-split-layout role">
              <div className="case-message">
                <h3>제가 맡은 일은 기능 구현보다 흐름을 명확히 만드는 것이었습니다.</h3>
                <p>도메인 책임과 API 응답, 저장소 흐름이 서로 섞이지 않도록 경계를 잡는 데 집중했습니다.</p>
              </div>
              <div className="case-role-list">
                {project.myRole.map((role) => (
                  <article key={role}>
                    <span />
                    <p>{role}</p>
                  </article>
                ))}
              </div>
              <ProjectImagePlaceholder label="담당 영역 이미지" />
            </div>
          )}

          {section.key === "tech" && (
            <div className="case-tech-layout">
              <div className="case-message">
                <h3>기술은 목록이 아니라 선택 이유와 함께 보여줍니다.</h3>
                <p>각 기술이 프로젝트의 문제를 어떻게 해결했는지 중심으로 정리했습니다.</p>
              </div>
              <div className="case-tech-grid">
                {project.techStack.map((tech) => (
                  <article className="case-info-card" key={tech.name}>
                    <span>{tech.name}</span>
                    <p>{tech.reason}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {section.key === "implementation" && (
            <div className="case-implementation-layout">
              <div className="case-message compact">
                <h3>핵심 구현을 기능 단위로 나누어 설명합니다.</h3>
              </div>
              <div className="case-implementation-grid">
                {project.implementations.map((item) => (
                  <article className="case-build-card" key={item.title}>
                    <span>{item.tech}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
              <ProjectImagePlaceholder label="구현 구조 이미지" />
            </div>
          )}

          {section.key === "troubleshooting" && (
            <div className="case-trouble-layout">
              {project.troubleshooting.map((item) => (
                <article className="trouble-card" key={item.problem}>
                  <h3>{item.problem}</h3>
                  <dl>
                    <div>
                      <dt>Cause</dt>
                      <dd>{item.cause}</dd>
                    </div>
                    <div>
                      <dt>Solution</dt>
                      <dd>{item.solution}</dd>
                    </div>
                    <div>
                      <dt>Result</dt>
                      <dd>{item.result}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          )}

          {section.key === "result" && (
            <div className="case-result-layout">
              <ResultColumn title="Result" items={project.result.outcomes} />
              <ResultColumn title="Learning" items={project.result.learnings} />
              <ResultColumn title="Next" items={project.result.next} />
            </div>
          )}
        </div>
      </div>
      <div className="bottom-accent" />
    </section>
  );
}

function ResultColumn({ title, items }) {
  return (
    <article className="case-result-column">
      <span>{title}</span>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ProjectImagePlaceholder label={`${title} 이미지`} />
    </article>
  );
}

function ContactSlide() {
  return (
    <section className="slide editorial-slide contact-slide" aria-label="Contact">
      <div className="slide-inner contact-inner">
        <SectionLabel>Contact</SectionLabel>
        <h2>
          함께 일하고
          <br />
          싶습니다.
        </h2>
        <p>협업, 구조, 성능, 유지보수성을 함께 고민하며 오래가는 서비스를 만들어가겠습니다.</p>
        <div className="contact-list">
          {contactLinks.map(({ label, value, href }) => (
            <a href={href} key={label}>
              <span>
                {label}
                <small>{value}</small>
              </span>
              <ArrowUpRight />
            </a>
          ))}
        </div>
        <div className="signature">
          <strong>왕준혁</strong>
          <span>Backend Developer</span>
        </div>
      </div>
      <div className="bottom-accent" />
    </section>
  );
}

const slideDefinitions = [
  { key: "title", label: "Title", component: TitleSlide },
  { key: "about", label: "About", component: AboutSlide },
  { key: "history", label: "History", component: HistorySlide },
  { key: "skills", label: "Skills", component: SkillsSlide },
  { key: "projects-overview", label: "Projects Overview", component: ProjectsOverviewSlide },
  ...projects.flatMap((project) =>
    caseStudySections.map((section) => ({
      key: `${project.id}-${section.key}`,
      label: `${project.title} ${section.nav}`,
      component: (props) => <CaseStudySlide {...props} project={project} section={section} />,
    })),
  ),
  { key: "contact", label: "Contact", component: ContactSlide },
];

const SLIDES = slideDefinitions.map((slide) => slide.label);

const projectIntroIndexes = Object.fromEntries(
  projects.map((project) => [project.id, slideDefinitions.findIndex((slide) => slide.key === `${project.id}-intro`)]),
);

export default function App() {
  const initialSlide = useMemo(() => {
    const slideParam = Number(new URLSearchParams(window.location.search).get("slide"));
    return Number.isInteger(slideParam) && slideParam >= 0 && slideParam < SLIDES.length ? slideParam : 0;
  }, []);
  const [active, setActive] = useState(initialSlide);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        setActive((current) => (current + 1) % SLIDES.length);
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        setActive((current) => (current - 1 + SLIDES.length) % SLIDES.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goTo = (index) => setActive((index + SLIDES.length) % SLIDES.length);

  return (
    <div className="deck-shell">
      <aside className="rail" aria-label="Portfolio slides">
        <div className="rail-mark">BE</div>
        <nav className="rail-nav">
          {SLIDES.map((slide, index) => (
            <button
              className={`rail-dot${index === active ? " is-active" : ""}`}
              type="button"
              aria-label={slide}
              key={slide}
              onClick={() => goTo(index)}
            />
          ))}
        </nav>
        <div className="rail-index">
          <span>{padSlide(active)}</span>
          <span>{padSlide(SLIDES.length - 1)}</span>
        </div>
      </aside>

      <main className="slides" id="slides">
        {slideDefinitions.map(({ component: Slide, key }, index) => (
          <div className={index === active ? "is-current-wrapper" : "is-hidden-wrapper"} key={key}>
            <Slide goTo={goTo} active={active} />
          </div>
        ))}
      </main>

      <div className="controls" aria-label="Slide controls">
        <button className="icon-btn" type="button" aria-label="Previous slide" title="Previous" onClick={() => goTo(active - 1)}>
          <ArrowLeft />
        </button>
        <button className="icon-btn primary" type="button" aria-label="Next slide" title="Next" onClick={() => goTo(active + 1)}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
