import { useEffect, useMemo, useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bug,
  Download,
  ImageIcon,
  Layers,
  Target,
  UserRound,
  Wrench,
} from "lucide-react";
import profileImage from "../assets/profile.png";
import popnAnalysisImage from "../assets/projects/popn/analysis.png";
import popnHomeImage from "../assets/projects/popn/home.png";
import popnProblemImage from "../assets/projects/popn/popnproblem.png";
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
    subtitle: "팝픈뮤직 플레이 기록 · 랭킹 · 성장 추적 서비스",
    period: "2025.03 - 2025.06",
    team: "Team Project",
    role: "Backend Developer · Data API",
    theme: "performance",
    meta: [
      { label: "Period", value: "2023.12 - Present" },
      { label: "Status", value: "Live Service" },
      { label: "Users", value: "MAU 500+" },
      { label: "Role", value: "Backend Developer" },
    ],
    keywords: ["Live Service", "MAU 500+", "2년 운영", "2023.12 Launch", "User Data Platform", "Ranking System", "Growth Tracking"],
    showcase: [
      { label: "홈 / 신규 악곡", src: popnHomeImage, variant: "home" },
      { label: "유저 프로필", src: popnProfileImage, variant: "profile" },
      { label: "곡 상세 분석", src: popnAnalysisImage, variant: "analysis" },
    ],
    overview:
      "2023년 12월 배포를 시작해 현재까지 운영 중인 pop'n music 플레이 기록 서비스입니다.",
    intro: [
      "2년째 운영 중인\n팝픈뮤직 기록 서비스",
      "2023년 12월 배포를 시작한 popn.gg는\n월간 활성 사용자 약 500명이 사용하는 pop'n music 플레이 기록 서비스입니다.\n\n유저는 자신의 플레이 기록을 갱신하고,\n곡별 성과, 랭킹, 팝클래스 변화를 통해\n플레이 성장을 한눈에 확인할 수 있습니다.",
    ],
    problem: {
      title: "대량 플레이데이터 조회와 이미지 리소스 제공 과정에서 응답 비용이 커지는 문제가 있었습니다.",
      image: popnProblemImage,
      imageCaption: "공식 사이트 데이터 예시",
      imageDescription: "곡과 난이도 중심으로 제공되는 정적 정보",
      officialData: ["곡명", "장르", "난이도", "레벨"],
      userData: ["내 점수", "메달", "랭킹", "스코어 분포", "팝클래스 변화"],
      items: [
        {
          label: "Problem",
          headline: "공식 곡 데이터만으로는 유저의 성장을 설명할 수 없었습니다",
          text: "공식 데이터는 곡명, 장르, 난이도, 레벨처럼 정적인 정보에 가깝습니다. 하지만 유저가 실제로 알고 싶은 것은 특정 곡에서 내가 어떤 점수를 냈는지, 어떤 메달을 얻었는지, 다른 유저와 비교했을 때 어느 위치에 있는지였습니다.",
        },
        {
          label: "Solution",
          headline: "화면마다 필요한 기록을 따로 제공",
          text: "유저 프로필, 곡 상세, 랭킹, 통계 화면이 각각 필요한 정보만 받을 수 있도록 API를 나누고, 반복 통계는 DB 집계와 전용 응답 모델로 정리했습니다.",
        },
        {
          label: "Goal",
          headline: "성장 흐름을 한눈에 보는 경험",
          text: "기록이 늘어나도 목록, 프로필, 분석 화면이 빠르게 열리고 플레이 성과를 한눈에 이해할 수 있는 서비스 경험을 목표로 했습니다.",
        },
      ],
    },
    myRole: [
      "화면별 데이터 요구사항을 정리하고 API 응답 구조를 설계했습니다.",
      "반복 통계 조회를 DB 집계와 DTO Projection 기반으로 최적화했습니다.",
      "S3와 Cloudflare CDN으로 이미지 제공 흐름을 분리했습니다.",
      "백엔드 검색 API와 Redis Read Model로 목록 탐색 흐름을 개선했습니다.",
      "Redis Lock과 Worker 기반 구조로 대량 갱신 처리 방향을 설계했습니다.",
    ],
    roleHighlights: [
      {
        title: "API Design",
        text: "프로필, 곡 상세, 랭킹, 통계 화면이 각각 필요한 데이터만 받을 수 있도록 응답 구조를 설계했습니다.",
      },
      {
        title: "Query & Statistics",
        text: "랭크, 메달, 레벨별 통계처럼 반복 계산이 필요한 데이터는 DB 집계와 DTO Projection 중심으로 정리했습니다.",
      },
      {
        title: "Delivery & Update Flow",
        text: "이미지는 S3와 Cloudflare CDN으로 분리하고, 대량 playdata 갱신은 Worker 기반 처리 흐름으로 분리하는 방향을 잡았습니다.",
      },
    ],
    roleSummary:
      "저는 기록·랭킹·통계 데이터를 화면에서 바로 사용할 수 있도록 백엔드 API와 조회 흐름을 설계했습니다.",
    techStack: [
      { name: "Spring Boot", reason: "유저 기록, 곡 정보, 랭킹, 통계 API를 도메인 경계에 맞춰 나누고 안정적으로 운영하기 위해 선택했습니다." },
      { name: "JPA / QueryDSL", reason: "화면에 필요한 필드만 조회하고, 조건이 많은 검색·통계 쿼리를 명확하게 구성하기 위해 사용했습니다." },
      { name: "Redis", reason: "검색용 Read Model, 대량 갱신 Lock, 비동기 처리 흐름을 구성하기 위한 보조 저장소로 사용했습니다." },
      { name: "MySQL", reason: "플레이 기록, 곡 정보, 랭킹, 메달 통계를 저장하고 집계하는 기준 데이터베이스로 사용했습니다." },
      { name: "S3 / Cloudflare CDN", reason: "곡 자켓 이미지 원본 저장과 반복 요청 처리를 분리해 이미지 트래픽을 API 서버 밖에서 처리하도록 구성했습니다." },
    ],
    fixes: [
      {
        title: "Entity 중심 조회",
        result: "DTO Projection",
        desc: "화면 응답에 필요한 필드만 조회하도록 바꿔 불필요한 Entity 로딩과 응답 비용을 줄였습니다.",
      },
      {
        title: "반복 통계 계산",
        result: "DB 집계",
        desc: "랭크, 메달, 레벨별 통계를 애플리케이션 순회 대신 집계 쿼리와 전용 응답 모델로 정리했습니다.",
      },
      {
        title: "이미지 반복 요청",
        result: "CDN Cache",
        desc: "곡 자켓 이미지는 S3에 저장하고 Cloudflare CDN을 거치게 해 반복 접근 비용을 낮췄습니다.",
      },
      {
        title: "대량 갱신 요청",
        result: "Worker 구조",
        desc: "playdata 갱신이 사용자 응답 흐름을 막지 않도록 Lock과 Worker 기반 처리 방향으로 분리했습니다.",
      },
    ],
    implementations: [
      {
        title: "대량 조회 성능 개선",
        desc: "프로필과 곡 상세 화면에서 필요한 응답 필드를 먼저 정리한 뒤 DTO Projection으로 조회했습니다. 페이지네이션을 적용해 한 번에 가져오는 기록 범위를 제한하고, Entity 그래프 전체를 로딩하지 않도록 개선했습니다.",
        tech: "DTO Projection, Pagination",
      },
      {
        title: "통계 집계 구조 개선",
        desc: "랭크, 메달, 레벨별 분포처럼 화면에서 바로 사용하는 통계 값을 DB 집계 쿼리로 가져오도록 정리했습니다. 애플리케이션에서 전체 기록을 순회하는 흐름을 줄이고 통계 응답 모델을 분리했습니다.",
        tech: "DB Aggregation",
      },
      {
        title: "이미지 제공 구조 개선",
        desc: "곡 자켓 이미지는 동일 리소스가 여러 화면에서 반복 조회되는 특성이 있었습니다. S3 앞단에 Cloudflare CDN을 두어 원본 저장소 요청을 줄이고 이미지 로딩 체감을 개선했습니다.",
        tech: "S3, Cloudflare CDN",
      },
      {
        title: "라이브 검색 최적화",
        desc: "클라이언트가 전체 데이터를 받은 뒤 필터링하던 방식을 백엔드 검색 API로 전환했습니다. Redis Read Model을 사용해 검색에 필요한 데이터만 빠르게 조회하고, 응답 크기를 줄이는 방향으로 설계했습니다.",
        tech: "Redis, Search API",
      },
      {
        title: "대량 갱신 안정화",
        desc: "playdata 갱신은 처리량이 커질 수 있어 사용자 요청과 같은 흐름에서 오래 점유하면 응답 지연으로 이어질 수 있었습니다. Redis Lock과 Worker 기반 처리로 중복 실행을 막고 비동기 갱신 흐름을 분리했습니다.",
        tech: "Redis Lock, Worker",
      },
    ],
    troubleshooting: [
      {
        problem: "Entity 전체 조회와 Lazy Loading으로 인한 N+1 가능성",
        cause: "화면 응답에는 일부 필드만 필요했지만 기존 조회 흐름은 Entity 중심으로 구성되어 있었습니다. 연관 데이터가 함께 접근되면서 불필요한 객체 생성과 반복 조회 가능성이 생겼고, 기록 수가 늘어날수록 비용이 커질 수 있었습니다.",
        solution: "화면별 응답 DTO를 먼저 정의하고 JPQL DTO Projection으로 필요한 값만 조회하도록 변경했습니다. 목록성 데이터에는 페이지네이션을 적용해 조회 범위를 제한하고, 통계성 데이터는 별도 집계 쿼리로 분리했습니다.",
        result: "대량 playdata 조회 흐름이 단순해졌고, API가 화면 요구사항에 맞는 데이터만 반환하도록 정리되었습니다. 이후 기능을 추가할 때도 Entity 구조보다 응답 모델 기준으로 변경 지점을 찾기 쉬워졌습니다.",
      },
      {
        problem: "곡 자켓 이미지 반복 요청으로 인한 로딩 지연과 원본 요청 부하",
        cause: "곡 목록, 검색, 랭킹 화면에서는 같은 곡 자켓 이미지가 여러 번 반복 조회됩니다. 이미지 요청이 원본 저장소로 직접 몰리면 화면 전환마다 로딩 체감이 떨어지고 저장소 요청 비용도 커질 수 있었습니다.",
        solution: "S3를 원본 저장소로 두고 Cloudflare CDN을 앞단에 구성했습니다. 동일 이미지 요청은 edge cache에서 처리되도록 하여 원본 요청을 줄이고, 이미지 제공 책임을 API 서버와 분리했습니다.",
        result: "반복 이미지가 많은 화면에서 로딩 체감을 개선할 수 있는 구조를 만들었습니다. API 서버는 데이터 제공에 집중하고, 정적 이미지 트래픽은 CDN이 담당하도록 역할이 분리되었습니다.",
      },
    ],
    result: {
      outcomes: [
        "화면별 응답 모델을 기준으로 조회 흐름을 정리해 대량 playdata 조회 구조를 단순화했습니다.",
        "랭크, 메달, 레벨별 통계를 DB 집계 중심으로 제공해 통계 API의 계산 책임을 명확히 분리했습니다.",
        "곡 자켓 이미지 제공을 S3와 Cloudflare CDN으로 분리해 반복 이미지 요청을 API 서버가 직접 감당하지 않도록 했습니다.",
      ],
      learnings: [
        "백엔드 최적화는 쿼리만 줄이는 일이 아니라 화면이 실제로 필요로 하는 데이터 경계를 먼저 정의하는 일이라는 점을 배웠습니다.",
        "통계 데이터는 애플리케이션에서 모두 계산하기보다 DB 집계와 응답 모델을 함께 설계해야 유지보수와 성능을 같이 챙길 수 있었습니다.",
        "이미지처럼 반복 조회되는 리소스는 API 서버가 직접 해결하려 하기보다 저장소, CDN, cache 책임을 분리하는 것이 중요했습니다.",
      ],
      next: [
        "실제 트래픽과 사용자 행동 로그를 기반으로 API별 병목 지점을 측정하고, 자주 조회되는 화면부터 캐싱 전략을 구체화하고 싶습니다.",
        "Redis Read Model 갱신 주기와 검색 정확도를 함께 개선해 검색 응답 속도와 데이터 최신성 사이의 균형을 더 정교하게 잡고 싶습니다.",
        "대량 갱신 Worker의 처리 상태, 실패 재시도, Lock 만료 정책을 모니터링할 수 있게 만들어 운영 안정성을 높이고 싶습니다.",
      ],
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
  { key: "intro", nav: "Intro", label: "서비스 소개 + 운영 성과", icon: Layers },
  { key: "problem", nav: "Problem", label: "Problem", icon: Target },
  { key: "role", nav: "Role", label: "내가 맡은 백엔드 책임", icon: UserRound },
  { key: "tech", nav: "Tech", label: "사용 기술과 선택 이유", icon: Wrench },
  { key: "fix", nav: "Fix", label: "가장 의미 있었던 개선 사례", icon: Bug },
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
  const overviewGridClass = projects.length > 2 ? "project-overview-grid is-compact" : "project-overview-grid";

  return (
    <section className="slide editorial-slide" aria-label="Projects Overview">
      <div className="slide-inner project-slide-inner">
        <SectionLabel>Projects</SectionLabel>
        <div className="projects-overview">
          <div className={overviewGridClass}>
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
  const roleItems = project.roleHighlights ?? project.myRole.map((role) => ({ title: "Role", text: role }));
  const fixItems =
    project.fixes ??
    project.implementations?.map((item) => ({
      title: item.title,
      result: item.tech,
      desc: item.desc,
    })) ??
    [];
  const metaItems = project.meta ?? [
    { label: "Period", value: project.period },
    { label: "Type", value: project.team },
    { label: "Role", value: project.role },
  ];

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
                  {metaItems.map((item) => (
                    <div key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
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
            <div className={`case-problem-layout${project.problem.image ? " has-image" : ""}`}>
              {project.problem.image && (
                <figure className="case-reference-image">
                  <img src={project.problem.image} alt={project.problem.imageCaption} />
                  <figcaption>
                    <strong>{project.problem.imageCaption}</strong>
                    <span>{project.problem.imageDescription}</span>
                  </figcaption>
                  <div className="problem-data-compare" aria-label="공식 데이터와 사용자 니즈 비교">
                    <div>
                      <strong>공식 데이터</strong>
                      <p>{project.problem.officialData.join(" · ")}</p>
                    </div>
                    <div>
                      <strong>사용자가 알고 싶은 것</strong>
                      <p>{project.problem.userData.join(" · ")}</p>
                    </div>
                  </div>
                </figure>
              )}
              <div className="case-card-grid problem-cards">
                {project.problem.items.map((item) => (
                  <article className="case-info-card" key={item.label}>
                    <span>{item.label}</span>
                    {item.headline && <h4>{item.headline}</h4>}
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {section.key === "role" && (
            <div className="case-role-layout">
              <div className="role-summary-card">
                <span>My Role</span>
                <p>{project.roleSummary ?? "프로젝트의 핵심 백엔드 흐름과 API 응답 구조를 담당했습니다."}</p>
              </div>
              <div className="role-hub-diagram" aria-label="Screens to backend API responsibilities diagram">
                <section className="role-hub-column">
                  <span>Screens</span>
                  <p>User Profile</p>
                  <p>Song Detail</p>
                  <p>Ranking</p>
                  <p>Score Analysis</p>
                </section>
                <div className="flow-arrow" aria-hidden="true">
                  <ArrowRight />
                </div>
                <section className="role-api-hub">
                  <strong>Backend API Layer</strong>
                  <p>Screen-based Response</p>
                  <p>DTO Projection</p>
                  <p>DB Aggregation</p>
                  <p>Async Update</p>
                  <p>Image Delivery</p>
                </section>
                <div className="flow-arrow" aria-hidden="true">
                  <ArrowRight />
                </div>
                <section className="role-hub-column">
                  <span>Responsibilities</span>
                  <p>기록 데이터 제공</p>
                  <p>랭킹 조회</p>
                  <p>통계 집계</p>
                  <p>이미지 전달</p>
                  <p>대량 갱신 처리</p>
                </section>
              </div>
              <div className="case-role-list">
                {roleItems.map((role) => (
                  <article key={`${role.title}-${role.text}`}>
                    <span />
                    <div>
                      <h4>{role.title}</h4>
                      <p>{role.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {section.key === "tech" && (
            <div className="case-tech-layout no-message">
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

          {section.key === "fix" && (
            <div className="case-fix-layout">
              {fixItems.map((item, index) => (
                <article className="case-fix-card" key={`${item.title}-${item.result}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="fix-change-line">
                    <strong>{item.title}</strong>
                    <ArrowRight />
                    <strong>{item.result}</strong>
                  </div>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="bottom-accent" />
    </section>
  );
}

function ContactSlide({ onExportPdf, isExporting }) {
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
        <button className="pdf-download-btn" type="button" onClick={onExportPdf} disabled={isExporting}>
          <Download />
          {isExporting ? "생성 중" : "PDF 저장"}
        </button>
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

async function waitForImages(container) {
  const images = Array.from(container.querySelectorAll("img"));
  await Promise.all(
    images.map((image) => {
      if (image.complete && image.naturalWidth > 0) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        image.onload = resolve;
        image.onerror = resolve;
      });
    }),
  );
}

export default function App() {
  const initialSlide = useMemo(() => {
    const slideParam = Number(new URLSearchParams(window.location.search).get("slide"));
    return Number.isInteger(slideParam) && slideParam >= 0 && slideParam < SLIDES.length ? slideParam : 0;
  }, []);
  const [active, setActive] = useState(initialSlide);
  const [isExporting, setIsExporting] = useState(false);

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

  const exportPdf = async () => {
    if (isExporting) {
      return;
    }

    setIsExporting(true);
    try {
      const exportSource = document.querySelector(".pdf-export-source");
      const pages = Array.from(exportSource?.querySelectorAll(".pdf-export-page") ?? []);

      if (pages.length === 0) {
        throw new Error("PDF export pages were not found.");
      }

      await waitForImages(exportSource);

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1280, 720],
        compress: true,
      });

      for (const [index, page] of pages.entries()) {
        const canvas = await html2canvas(page, {
          backgroundColor: "#f2f4f6",
          logging: false,
          scale: 1.5,
          useCORS: true,
          windowWidth: 1280,
          windowHeight: 720,
        });
        const imageData = canvas.toDataURL("image/jpeg", 0.92);

        if (index > 0) {
          pdf.addPage([1280, 720], "landscape");
        }

        pdf.addImage(imageData, "JPEG", 0, 0, 1280, 720);
      }

      pdf.save("왕준혁_Backend_Portfolio.pdf");
    } catch (error) {
      console.error(error);
      alert("PDF 생성 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsExporting(false);
    }
  };

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
            <Slide goTo={goTo} active={active} onExportPdf={exportPdf} isExporting={isExporting} />
          </div>
        ))}
      </main>

      <div className="pdf-export-source" aria-hidden="true">
        {slideDefinitions.map(({ component: Slide, key }) => (
          <div className="pdf-export-page" key={`pdf-${key}`}>
            <Slide goTo={goTo} active={active} onExportPdf={exportPdf} isExporting={isExporting} />
          </div>
        ))}
      </div>

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
