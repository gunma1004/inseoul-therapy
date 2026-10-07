import type { Metadata } from "next";
import Link from "next/link";
import { regionData } from "@/lib/regions";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

const SITE_URL = "https://inseoul-therapy.netlify.app";
const SITE_NAME = "인서울테라피";

const title100Patterns = [
  "출장 건식 마사지 & 힐링 케어 | 전지역 안심 예약",
  "출장 스웨디시 마사지 & 프리미엄 테라피 | 100% 안심 후불제",
  "출장 아로마 마사지 1:1 맞춤 | 프라이빗 힐링 케어",
  "출장 정통 타이 마사지 정찰제 | 인서울테라피 네트워크",
  "출장 감성 스웨디시 마사지 | 피로해소 웰니스 안내",
  "출장 딥티슈 마사지 케어 | 신속 방문 서비스",
  "출장 힐링 바디케어 마사지 예약 | 검증된 관리사 매칭",
  "출장 릴렉싱 마사지 전문 | 현장 결제 시스템",
  "출장 스포츠 마사지 피로 리셋 | 맞춤 바디 솔루션",
  "출장 프리미엄 마사지 테라피 | VIP 케어 코스 안내",
  "출장 로미로미 마사지 전문 | 감성 힐링 프로그램",
  "출장 림프 순환 마사지 서비스 | 프라이빗 홈힐링",
  "출장 아로마 오일 마사지 코스 | 1:1 전신 릴렉스",
  "출장 풋앤바디 마사지 예약 | 안심 정찰제 안내",
  "출장 나이트 안심 케어 마사지 | 심야 방문 전문",
  "출장 전신 스트레칭 마사지 | 피로 회복 맞춤형",
  "출장 센슈얼 스웨디시 마사지 | 프리미엄 힐링",
  "출장 딥 릴렉스 마사지 안내 | 100% 현장 후불제",
  "출장 바디 밸런스 마사지 | 체형 맞춤 전신 케어",
  "출장 시그니처 힐링 마사지 | VIP 전신 힐링 코스",
  "출장 클래식 타이 마사지 | 신속 안심 방문 서비스",
  "출장 소프트 스웨디시 마사지 | 감성 테라피 예약",
  "출장 에너제틱 스포츠 마사지 | 활력 충전 바디케어",
  "출장 올인원 전신 마사지 예약 | 프라이빗 홈힐링",
  "출장 내추럴 아로마 마사지 | 순수 힐링 프로그램",
  "출장 토탈 릴렉싱 마사지 코스 | 안심 방문 보장",
  "출장 럭셔리 스웨디시 마사지 | VIP 1:1 케어",
  "출장 데일리 피로해소 마사지 | 정찰제 힐링 안내",
  "출장 젠틀 딥티슈 마사지 | 집중 힐링 바디케어",
  "출장 감성 아로마 마사지 예약 | 편안한 방문 힐링",
  "출장 힐링 마인드 테라피 마사지 | 전신 피로 완화",
  "출장 정통 건식 릴렉스 마사지 | 안심 후불제 예약",
  "출장 프리미엄 바디 밸런스 마사지 | 전문 힐러 1:1 매칭",
  "출장 테라피 & 마사지 코스 | 조용하고 편안한 휴식",
  "출장 스페셜 홈타이 마사지 | 합리적 정찰 요금제",
  "출장 오일 바디 테라피 마사지 | 감성 스웨디시 코스",
  "출장 전신 딥 릴렉싱 마사지 코스 | 전문 관리사 신속 방문",
  "출장 포커스 힐링 마사지 예약 | 근육 피로 집중 완화",
  "출장 릴렉스 스웨디시 마사지 | 맞춤형 프리미엄",
  "출장 퍼펙트 바디케어 마사지 코스 | 100% 현장 결제 안내",
  "출장 수딩 아로마 마사지 안내 | 감성 릴렉싱",
  "출장 비탈리티 스포츠 마사지 테라피 | 활력 충전 바디케어",
  "출장 심야 힐링 마사지 코스 | 늦은 밤 안심 방문",
  "출장 오가닉 오일 테라피 마사지 | 정성 가득 힐링",
  "출장 마일드 스웨디시 마사지 | 프라이빗 안심 코스",
  "출장 컴포트 홈타이 마사지 | 정직한 정찰제 케어",
  "출장 힐링 바디 리셋 마사지 | 전신 피로해소",
  "출장 엑스퍼트 테라피 마사지 케어 | 검증된 관리사 매칭",
  "출장 프리미엄 딥티슈 마사지 코스 | 섬세한 바디 힐링",
  "출장 감성 릴렉싱 마사지 예약 | 1:1 후불제 방문",
  "출장 밸런스드 아로마 마사지 | 심신 안정 프로그램",
  "출장 디럭스 스웨디시 마사지 | 최고급 VIP 코스",
  "출장 리프레시 타이 마사지 | 경직된 근육 완화",
  "출장 프로페셔널 바디 마사지 | 고객 만족 맞춤 케어",
  "출장 시그니처 아로마 마사지 | 천연 오일 전신 코스",
  "출장 프라이빗 힐링 마사지 예약 | 신속 방문 시스템",
  "출장 소프트 릴렉스 마사지 코스 | 부드럽고 전신 힐링",
  "출장 하이엔드 테라피 마사지 서비스 | 감성 스웨디시 안내",
  "출장 바디 리바이탈 마사지 | 활력 넘치는 테라피",
  "출장 슬로우 힐링 아로마 마사지 | 편안한 휴식 보장",
  "출장 올데이 안심 마사지 예약 | 언제나 신속 방문",
  "출장 럭스 스웨디시 마사지 | 품격 있는 바디 힐링",
  "출장 모빌리티 스트레칭 마사지 코스 | 전신 유연성 케어",
  "출장 에센셜 오일 마사지 예약 | 감성 아로마 테라피",
  "출장 이지 케어 홈타이 마사지 | 부담 없는 정찰제",
  "출장 풀바디 릴렉싱 마사지 | 피로 싹 풀리는 코스",
  "출장 딥 릴리프 마사지 코스 | 깊은 휴식을 주는 케어",
  "출장 힐링 아우라 스웨디시 마사지 | 감성 만족 프리미엄",
  "출장 밸런싱 바디 테라피 마사지 예약 | 균형 잡힌 전신 케어",
  "출장 마인드풀 테라피 마사지 서비스 | 편안한 안심 후불제",
  "출장 퓨어 아로마 마사지 코스 | 산뜻한 힐링 바디케어",
  "출장 스트롱 스포츠 마사지 안내 | 운동 후 피로 완화",
  "출장 나이트 릴렉스 마사지 테라피 | 숙면을 돕는 안심 코스",
  "출장 VIP 시그니처 마사지 | 품격 높은 1:1 방문",
  "출장 에스테틱 바디 테라피 마사지 | 감성 스웨디시 예약",
  "출장 프레시 타이 마사지 안내 | 가벼워지는 몸과 마음",
  "출장 릴렉싱 오일 테라피 마사지 코스 | 정성스러운 손길",
  "출장 젠틀 케어 마사지 서비스 | 부담 없는 현장 결제",
  "출장 컴팩트 힐링 마사지 예약 | 알찬 실속 코스",
  "출장 로열 스웨디시 마사지 코스 | 감성 테라피의 정수",
  "출장 딥 바디 스트레칭 마사지 케어 | 시원한 힐링 테라피",
  "출장 센서티브 아로마 마사지 | 은은한 감성 케어",
  "출장 홈 웰니스 테라피 마사지 안내 | 내 집에서 누리는 휴식",
  "출장 릴렉세이션 마사지 코스 | 완벽한 하루의 마무리",
  "출장 프리미엄 에센스 마사지 테라피 | 품격 있는 홈 힐링",
  "출장 클래식 바디케어 마사지 | 정통 테라피 안내",
  "출장 스무스 스웨디시 마사지 | 부드럽고 섬세한 터치",
  "출장 힐링 포레스트 마사지 | 맑고 개운한 전신 코스",
  "출장 인텐시브 딥티슈 마사지 | 확실한 피로 관리",
  "출장 캄 앤 릴렉스 마사지 안내 | 스트레스 해소 코스",
  "출장 오리엔탈 홈타이 마사지 | 안심 정찰제 방문",
  "출장 럭셔리 바디 마사지 코스 | 최상의 힐링 만족도",
  "출장 내추럴 릴렉스 테라피 마사지 | 순수 아로마 코스",
  "출장 퀵 안심 방문 마사지 | 기다림 없는 신속 배차",
  "출장 프리미엄 코스 마사지 안내 | 프라이빗 안심 예약",
  "출장 리얼 힐링 마사지 프로그램 | 감동을 주는 손길",
  "출장 스페셜 바디 밸런스 마사지 코스 | 조화로운 전신 힐링",
  "출장 어반 릴렉싱 스웨디시 마사지 | 도시인을 위한 바디케어",
  "출장 힐링 모먼트 테라피 마사지 코스 | 온전한 나만의 휴식",
  "출장 퍼펙트 전신 마사지 안내 | 100% 만족 보장 케어"
];

const desc100Patterns = [
  "출장 마사지 및 프리미엄 홈타이 전문. 검증된 관리사의 100% 후불제 안심 케어.",
  "출장 마사지 전문 플랫폼. 선입금 전혀 없는 현장 결제로 편안하게 즐기는 테라피.",
  "출장 마사지 추천 코스. 지친 하루의 피로를 풀어주는 1:1 맞춤형 방문 힐링.",
  "출장 마사지 스웨디시 & 아로마 전문. 정찰제 요금으로 부담 없이 이용하세요.",
  "출장 마사지 신속 방문 케어. 전문 자격을 갖춘 한국인 관리사의 명품 바디테라피.",
  "출장 마사지 100% 후불 보장제. 내 집에서 편안하게 누리는 감성 스웨디시 힐링.",
  "출장 마사지 예약 안내. 건식, 아로마, 타이 등 다채로운 코스를 합리적으로.",
  "출장 마사지 프라이빗 케어. 고객 만족도 높은 검증된 제휴 샵 맞춤 매칭.",
  "출장 마사지 안심 방문 서비스. 늦은 심야 시간에도 할증 걱정 없는 정찰제 힐링.",
  "출장 마사지 힐링 테라피 안내. 뭉친 근육을 부드럽게 이완하는 프리미엄 프로그램."
];

const priceHooks = [
  "건식 6만원부터 심야할증 없이 방문합니다.",
  "건식 7만원부터 심야할증 없이 방문합니다.",
  "스웨디시 8만원부터 추가비용 없이 방문합니다.",
  "아로마 7만원부터 합리적인 정찰제로 방문합니다.",
  "타이 6만원부터 현장 결제 후불제로 방문합니다."
];

const shops = [
  { id: 1, name: "한국골든테라피", badge: "VIP 골든 힐링 케어", desc: "골든 품격의 감성 릴렉싱! 전문 관리사들의 정성스러운 맞춤 테라피", phone: "0507-1280-3361", price: "60분 110,000원~" },
  { id: 2, name: "한국미인테라피", badge: "재방문율 최우수", desc: "최고급 천연 오일을 활용한 감성 아로마 전신 바디케어 프로그램", phone: "0507-1280-3303", price: "90분 100,000원~" },
  { id: 3, name: "주주테라피", badge: "만족도 1위 추천", desc: "재방문율 1위 만족도! 정통 힐링 테라피부터 올인원 VIP 코스까지", phone: "0507-1280-3193", price: "60분 60,000원~" },
  { id: 4, name: "퀸즈홈테라피", badge: "여왕처럼 누리는 VIP", desc: "여왕처럼 누리는 고품격 테라피! 전문 관리사들의 1:1 맞춤 방문 힐링", phone: "0507-1280-3334", price: "60분 60,000원~" },
  { id: 5, name: "오늘밤테라피", badge: "야간 힐링 만족 1위", desc: "선입금 없는 100% 후불제! 깊은 밤 지친 하루의 피로를 완벽하게", phone: "0507-1280-3223", price: "60분 60,000원~" }
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { city } = resolvedParams;

  const region = regionData[city.toLowerCase()];
  const cityName = region ? region.name : (city.toLowerCase() === "seoul" ? "서울특별시" : city.toLowerCase() === "incheon" ? "인천광역시" : "경기도");
  const shortCityName = cityName.replace("특별시", "").replace("광역시", "").replace("경기도", "경기");

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  const locationKeyword = `${shortCityName}-inseoultherapy`;
  const charSum = locationKeyword.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const titleIdx = (dayOfYear + charSum) % title100Patterns.length;
  const descIdx = (dayOfYear + charSum * 3) % desc100Patterns.length;
  const priceIdx = (dayOfYear + charSum * 7) % priceHooks.length;

  let finalTitle = `${shortCityName} 출장 마사지 ${title100Patterns[titleIdx]} | ${SITE_NAME}`;
  finalTitle = finalTitle.replace(/출장마사지/g, "출장 마사지");

  const finalDescription = `${cityName} 전 지역 출장 마사지 추천. ${desc100Patterns[descIdx]} ${priceHooks[priceIdx]}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: finalTitle },
    description: finalDescription,
    alternates: { canonical: `${SITE_URL}/${city}` },
    keywords: [
      `${shortCityName} 출장마사지`,
      `${shortCityName} 홈타이`,
      `${shortCityName} 스웨디시`,
      `${cityName} 마사지`,
      SITE_NAME
    ],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `${SITE_URL}/${city}`,
      locale: "ko_KR",
      type: "website"
    }
  };
}

export default async function CityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { city } = resolvedParams;

  const region = regionData[city.toLowerCase()];
  const cityName = region ? region.name : (city.toLowerCase() === "seoul" ? "서울특별시" : city.toLowerCase() === "incheon" ? "인천광역시" : "경기도");
  const districts = region ? region.districts : {};
  const districtEntries = Object.entries(districts);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${cityName} 출장 홈케어 마사지 서비스`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: "0507-1280-3199",
      url: SITE_URL
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: cityName
    },
    description: `${cityName} 전 지역 100% 안심 후불제 출장 홈타이 및 바디케어 서비스 안내`
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 상단 네비게이션 */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 py-3 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-black text-sky-600">인서울테라피</Link>
          <div className="flex items-center gap-2">
            <a
              href="tel:050712803199"
              className="text-xs font-bold text-white bg-sky-600 px-3.5 py-1.5 rounded-xl hover:bg-sky-700 transition-all flex items-center gap-1 shadow-xs"
            >
              📞 24시 전화예약
            </a>
            <Link href="/" className="text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-100 hover:bg-sky-600 hover:text-white transition-all">
              ← 홈으로
            </Link>
          </div>
        </div>
      </header>

      {/* 브레드크럼 */}
      <nav className="bg-white/80 border-b border-slate-100 py-2.5 px-4 text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Link href="/" className="text-sky-600 hover:underline">홈</Link>
          <span>&gt;</span>
          <span className="text-slate-800 font-bold">{cityName} 전 지역 안내</span>
        </div>
      </nav>

      {/* 메인 콘텐츠 영역 */}
      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-8">
        
        {/* 상단 히어로 배너 */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-3">
          <span className="text-sky-400 text-xs font-black tracking-widest uppercase">📍 수도권 광역 프리미엄 홈케어</span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{cityName} 전 지역 출장 마사지 &amp; 테라피</h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed text-justify break-keep">
            {cityName} 전 지역 자택, 오피스텔, 호텔 어디든 신속하고 안전하게 이용할 수 있는 프리미엄 출장 홈케어 안내입니다. 철저한 검증을 거친 전문 테라피스트들이 100% 안심 후불제로 고객님의 프라이빗한 힐링을 25분 내 책임집니다.
          </p>
        </section>

        {/* 🌟 SEO 핵심 보강: 각 구별 관할 동 전체 링크 트리 (크롤러 색인 누락 방지) */}
        <section className="bg-white border border-slate-200 p-5 sm:p-7 rounded-3xl space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <span>📍</span> {cityName} 관할 구·군 및 세부 동 전체 안내
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                원하시는 시·구·군을 누르면 관할 동별 상세 안내 페이지로 이동합니다.
              </p>
            </div>
            <span className="text-xs text-sky-600 font-bold bg-sky-50 px-3 py-1 rounded-full border border-sky-100 shrink-0">
              총 {districtEntries.length}개 권역
            </span>
          </div>

          <div className="space-y-4">
            {districtEntries.map(([dKey, dInfo]) => (
              <div key={dKey} className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-2.5">
                <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                  <Link
                    href={`/${city}/${dKey}`}
                    className="font-extrabold text-sm text-sky-700 hover:underline flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    {dInfo.name} 권역 전체보기 &rarr;
                  </Link>
                  <span className="text-[11px] text-slate-400">{dInfo.dongs.length}개 동</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {dInfo.dongs.map((dongName, idx) => (
                    <Link
                      key={idx}
                      href={`/${city}/${dKey}/${encodeURIComponent(dongName)}`}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-600 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50 transition-all"
                    >
                      {dongName}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 제휴 샵 5곳 안내 */}
        <section className="bg-white border border-slate-200 p-5 sm:p-7 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <span>✨</span> {cityName} 추천 제휴 파트너
            </h2>
            <span className="text-xs text-sky-600 font-extrabold bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              100% 안심 후불제
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5 pt-1">
            {shops.map((s) => (
              <div key={s.id} className="p-4 sm:p-5 rounded-2xl border bg-slate-50/80 border-slate-200/80 hover:border-sky-400 hover:bg-white hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 font-black text-lg shrink-0 border border-sky-200">
                    {s.id}
                  </div>
                  <div className="min-w-0 space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-black text-base text-slate-900">{s.name}</span>
                      <span className="text-[10px] bg-sky-50 text-sky-600 px-2.5 py-0.5 rounded-full font-extrabold border border-sky-100">
                        {s.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-snug line-clamp-1">{s.desc}</p>
                    <p className="text-xs font-bold text-sky-600">{s.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`tel:${s.phone}`}
                    className="w-full sm:w-auto px-4 py-2.5 text-center rounded-xl text-xs font-black bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-all active:scale-95"
                  >
                    📞 전화 예약
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🌟 SEO 누락 방지 1: 시 단위 서비스 품질 안내 (충분한 텍스트 볼륨) */}
        <section className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-4 shadow-sm">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <span>🛡️</span> {cityName} 인서울테라피 안심 서비스 보증 3대 원칙
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 pt-2">
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1.5">
              <span className="font-bold text-sky-600 block text-sm">100% 현장 후불제</span>
              <p className="text-slate-500 leading-relaxed">
                어떠한 경우에도 예약금이나 선입금을 요구하지 않으며, 관리사가 현장에 도착한 후 직접 확인하고 결제합니다.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1.5">
              <span className="font-bold text-sky-600 block text-sm">25분 신속 방문 시스템</span>
              <p className="text-slate-500 leading-relaxed">
                {cityName} 주요 권역별 상주 관리사 배정으로 자택, 오피스텔, 호텔 어디든 평균 25분 내 빠른 방문을 약속합니다.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1.5">
              <span className="font-bold text-sky-600 block text-sm">정찰제 요금 준수</span>
              <p className="text-slate-500 leading-relaxed">
                주간 및 심야 시간대 불필요한 추가 할증 없이 사전에 안내된 투명한 정찰 가격으로 편안하게 이용할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 🌟 SEO 누락 방지 2: 시 단위 FAQ (검색엔진 질문-답변 매칭) */}
        <section className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl space-y-4 shadow-sm">
          <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
            <span>❓</span> {cityName} 출장마사지 자주 묻는 질문
          </h2>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
              <h3 className="font-bold text-slate-800">Q. {cityName} 전 지역 어디든 방문 가능한가요?</h3>
              <p className="text-slate-600 leading-relaxed">
                네, {cityName} 관내 모든 아파트, 주택, 오피스텔뿐만 아니라 출장 중 머무시는 비즈니스호텔 및 숙박시설까지 신속하게 방문합니다.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
              <h3 className="font-bold text-slate-800">Q. 관리에 필요한 준비물이 따로 있나요?</h3>
              <p className="text-slate-600 leading-relaxed">
                전용 매트, 최고급 천연 오일, 타월 등 모든 케어 용품을 테라피스트가 직접 지참하여 방문하므로 고객님께서는 편안하게 휴식할 공간만 준비해 주시면 됩니다.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500 mt-16">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-bold text-slate-700">{SITE_NAME} · {cityName} 100% 안심 후불제 출장 홈케어 안내</p>
          <p className="text-[11px] text-slate-400">© 2026 {SITE_NAME}. All rights reserved. (공식 도메인: {SITE_URL}/{city})</p>
        </div>
      </footer>
    </div>
  );
}