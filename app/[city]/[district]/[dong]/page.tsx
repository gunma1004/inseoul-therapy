import type { Metadata } from "next";
import Link from "next/link";
import { regionData } from "@/lib/regions";

interface PageProps {
  params: Promise<{
    city: string;
    district: string;
    dong: string;
  }>;
}

const SITE_URL = "https://kkulma.netlify.app";
const SITE_NAME = "꿀마 (KKULMA)";

// 🌟 타이틀용 100개 순차 패턴
const title100Patterns = [
  "출장 건식 마사지 & 힐링 케어 | 안심 예약 안내",
  "출장 스웨디시 & 프리미엄 테라피 | 100% 안심 후불제",
  "출장 아로마 마사지 1:1 맞춤 | 프라이빗 힐링",
  "출장 정통 타이 마사지 정찰제 | 꿀마 힐링 네트워크",
  "출장 감성 스웨디시 테라피 | 피로해소 웰니스 케어",
  "출장 딥티슈 테라피 케어 | 신속 방문 서비스",
  "출장 힐링 바디케어 코스 예약 | 검증된 관리사 매칭",
  "출장 릴렉싱 마사지 전문 | 현장 결제 시스템",
  "출장 스포츠 마사지 피로 리셋 | 맞춤 바디 솔루션",
  "출장 프리미엄 홈타이 테라피 | VIP 케어 코스 안내",
  "출장 로미로미 테라피 전문 | 감성 힐링 프로그램",
  "출장 림프 순환 케어 서비스 | 프라이빗 홈케어",
  "출장 아로마 오일 테라피 코스 | 1:1 전신 릴렉스",
  "출장 풋&바디 마사지 예약 | 안심 정찰제 안내",
  "출장 나이트 안심 케어 테라피 | 심야 방문 전문",
  "출장 전신 스트레칭 마사지 | 피로 회복 맞춤형",
  "출장 센슈얼 스웨디시 테라피 | 프리미엄 힐링",
  "출장 딥 릴렉스 마사지 안내 | 100% 현장 후불제",
  "출장 바디 밸런스 테라피 | 체형 맞춤 전신 케어",
  "출장 시그니처 힐링 테라피 | VIP 전신 힐링 코스",
  "출장 클래식 타이 마사지 | 신속 안심 방문 서비스",
  "출장 소프트 스웨디시 케어 | 감성 테라피 예약",
  "출장 에너제틱 스포츠 테라피 | 활력 충전 바디케어",
  "출장 올인원 전신 마사지 예약 | 프라이빗 홈힐링",
  "출장 내추럴 아로마 테라피 | 순수 힐링 프로그램",
  "출장 토탈 릴렉싱 마사지 코스 | 안심 방문 보장",
  "출장 럭셔리 스웨디시 테라피 | VIP 1:1 케어",
  "출장 데일리 피로해소 마사지 | 정찰제 힐링 안내",
  "출장 젠틀 딥티슈 테라피 | 집중 힐링 바디케어",
  "출장 감성 아로마 마사지 예약 | 편안한 방문 힐링",
  "출장 힐링 마인드 테라피 코스 | 전신 피로 완화",
  "출장 정통 건식 릴렉스 케어 | 안심 후불제 예약",
  "출장 프리미엄 바디 밸런스 | 전문 힐러 1:1 매칭",
  "출장 캄 테라피 & 마사지 코스 | 조용하고 편안한 휴식",
  "출장 스페셜 홈타이 마사지 | 합리적 정찰 요금제",
  "출장 오일 바디 테라피 케어 | 감성 스웨디시 코스",
  "출장 전신 딥 릴렉싱 코스 | 전문 관리사 신속 방문",
  "출장 포커스 힐링 마사지 예약 | 근육 피로 집중 완화",
  "출장 릴렉스 스웨디시 테라피 | 맞춤형 프리미엄",
  "출장 퍼펙트 바디케어 코스 | 100% 현장 결제 안내",
  "출장 수딩 아로마 마사지 안내 | 감성 릴렉싱",
  "출장 비탈리티 스포츠 테라피 | 활력 충전 바디케어",
  "출장 심야 힐링 마사지 코스 | 늦은 밤 안심 방문",
  "출장 오가닉 오일 테라피 케어 | 정성 가득 힐링",
  "출장 마일드 스웨디시 마사지 | 프라이빗 안심 코스",
  "출장 컴포트 홈타이 테라피 | 정직한 정찰제 케어",
  "출장 힐링 바디 리셋 마사지 | 전신 피로해소",
  "출장 엑스퍼트 테라피 케어 | 검증된 관리사 매칭",
  "출장 프리미엄 딥티슈 코스 | 섬세한 바디 힐링",
  "출장 감성 릴렉싱 마사지 예약 | 1:1 후불제 방문"
];

// 🌟 디스크립션용 순차 패턴
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
  { id: 1, name: "한국골든테라피", badge: "VIP 골든 힐링 케어", desc: "골든 품격의 감성 릴렉싱! 전문 관리사들의 정성스러운 맞춤 테라피", phone: "0507-1280-3361", image: "/shop1.jpg" },
  { id: 2, name: "한국미인테라피", badge: "재방문율 최우수", desc: "최고급 천연 오일을 활용한 감성 아로마 전신 바디케어 프로그램", phone: "0507-1280-3303", image: "/shop2.jpg" },
  { id: 3, name: "주주테라피", badge: "만족도 1위 추천", desc: "재방문율 1위 만족도! 정통 힐링 테라피부터 올인원 VIP 코스까지", phone: "0507-1280-3193", image: "/shop3.jpg" },
  { id: 4, name: "퀸즈홈테라피", badge: "여왕처럼 누리는 VIP", desc: "여왕처럼 누리는 고품격 테라피! 전문 관리사들의 1:1 맞춤 방문 힐링", phone: "0507-1280-3334", image: "/shop4.jpg" },
  { id: 5, name: "오늘밤테라피", badge: "야간 힐링 만족 1위", desc: "선입금 없는 100% 후불제! 깊은 밤 지친 하루의 피로를 완벽하게", phone: "0507-1280-3223", image: "/shop5.jpg" }
];

// 🌟 네이버 봇 유사문서 회피용: 동별 고유 본문 및 FAQ 생성기
function getDongUniqueContent(cityName: string, districtName: string, dongName: string) {
  const seed = `${cityName}-${districtName}-${dongName}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const absHash = Math.abs(hash);

  const bodies = [
    `${cityName} ${districtName} ${dongName} 인근에서 빠르고 안전하게 이용할 수 있는 프리미엄 테라피 안내입니다. 바쁜 일상과 업무 스트레스로 뭉친 근육을 ${dongName} 전문 테라피스트의 섬세한 손길로 풀어보세요. 선입금 요구가 없는 100% 현장 결제 시스템으로 내상 없이 쾌적한 힐링을 보장합니다.`,
    `조용하고 프라이빗한 휴식이 필요한 분들을 위해 ${districtName} ${dongName} 전 지역 30분 내 방문 시스템을 갖췄습니다. 철저한 위생 관리와 검증된 관리사들의 체계적인 코스를 통해 ${dongName} 거주 고객님들의 지친 심신을 완벽하게 리프레시 해드립니다.`,
    `${cityName} 대표 상권이자 주거 밀집 지역인 ${dongName} 맞춤형 힐링 바디케어 서비스입니다. 멀리 샵까지 직접 이동할 필요 없이, 머무시는 자택이나 오피스텔, 숙박업소 등 어디서든 전화를 통해 간편하게 예약하고 품격 있는 스웨디시와 타이 마사지를 경험하실 수 있습니다.`
  ];

  const faqsList = [
    [
      { q: `${dongName} 지역은 몇 분 안에 도착하나요?`, a: `교통 상황에 따라 다를 수 있으나, ${dongName} 내 주요 지역은 배차 완료 후 평균 30분 이내에 신속하게 방문하는 것을 원칙으로 하고 있습니다.` },
      { q: `결제는 언제 어떻게 하나요?`, a: `최근 빈번한 예약금 사기를 방지하기 위해 관리사가 도착한 후 직접 결제(현금, 계좌이체 등)하는 100% 후불제로만 운영됩니다.` }
    ],
    [
      { q: `${dongName} 주변 모텔이나 호텔에서도 이용 가능한가요?`, a: `네, ${dongName} 인근의 자택은 물론 오피스텔, 호텔, 모텔 등 고객님이 머무시는 모든 프라이빗한 공간에서 자유롭게 이용하실 수 있습니다.` },
      { q: `원하는 관리사 스타일을 요청할 수 있나요?`, a: `예약 상담 시 선호하시는 압의 세기(강한 타이, 부드러운 스웨디시 등)를 말씀해 주시면 가장 적합한 테라피스트를 매칭해 드립니다.` }
    ]
  ];

  return {
    body: bodies[absHash % bodies.length],
    faqs: faqsList[absHash % faqsList.length]
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { city, district, dong } = resolvedParams;

  const region = regionData[city.toLowerCase()];
  const districtInfo = region?.districts[district.toLowerCase()];

  const cityName = city.toLowerCase() === "seoul" ? "서울" : city.toLowerCase() === "incheon" ? "인천" : "경기";
  const districtName = districtInfo ? districtInfo.name : district;
  const dongName = decodeURIComponent(dong);

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  const locationKeyword = `${cityName}-${districtName}-${dongName}-kkulma`;
  const charSum = locationKeyword.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const titleIdx = (dayOfYear + charSum) % title100Patterns.length;
  const descIdx = (dayOfYear + charSum * 3) % desc100Patterns.length;
  const priceIdx = (dayOfYear + charSum * 7) % priceHooks.length;

  let finalTitle = `${dongName} ${title100Patterns[titleIdx]} | ${SITE_NAME}`;
  finalTitle = finalTitle.replace(/(마사지\s*)+마사지/g, "마사지");

  const finalDescription = `${cityName} ${districtName} ${dongName} ${desc100Patterns[descIdx]} ${priceHooks[priceIdx]}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: finalTitle },
    description: finalDescription,
    alternates: { canonical: `${SITE_URL}/${city}/${district}/${dong}` },
    keywords: [
      `${dongName} 출장 마사지`,
      `${dongName} 마사지`,
      `${dongName} 스웨디시`,
      `${dongName} 홈타이`,
      `${districtName} 출장마사지`,
      "꿀마"
    ],
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: `${SITE_URL}/${city}/${district}/${dong}`,
      locale: "ko_KR",
      type: "website"
    }
  };
}

export default async function DongPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { city, district, dong } = resolvedParams;

  const cityName = city.toLowerCase() === "seoul" ? "서울" : city.toLowerCase() === "incheon" ? "인천" : "경기";
  const region = regionData[city.toLowerCase()];
  const districtInfo = region?.districts[district.toLowerCase()];
  const districtName = districtInfo ? districtInfo.name : district;
  const dongName = decodeURIComponent(dong);
  
  // 🌟 고유 텍스트 및 FAQ 데이터 생성
  const uniqueContent = getDongUniqueContent(cityName, districtName, dongName);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 py-3 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-sky-600">꿀마 (KKULMA)</Link>
          <Link href={`/${city}/${district}`} className="text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-100 hover:bg-sky-600 hover:text-white transition-all">
            &larr; {districtName} 지역으로
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-8">
        
        {/* 히어로 및 고유 본문 텍스트 (SEO 핵심 영역) */}
        <section className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-gradient-to-b from-slate-900 to-slate-800 p-8 text-white space-y-4">
          <span className="text-sky-400 text-xs font-black tracking-widest uppercase">LOCAL HEALING GUIDE</span>
          <h1 className="text-2xl md:text-4xl font-black word-keep-all">{dongName} 출장 마사지 & 프리미엄 테라피</h1>
          <div className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed text-justify break-keep pt-2">
            <p>{uniqueContent.body}</p>
          </div>
        </section>

        {/* 동별 고유 FAQ 섹션 (유사문서 회피용 치트키) */}
        <section className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl space-y-5 shadow-sm">
          <h3 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-sky-500">💡</span> {dongName} 지역 자주 묻는 질문
          </h3>
          <div className="space-y-4">
            {uniqueContent.faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-100">
                <p className="font-bold text-sm md:text-base text-sky-700 mb-1.5">Q. {faq.q}</p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 추천 제휴샵 5곳 리스트 */}
        <section className="bg-white border border-slate-200 p-6 rounded-3xl space-y-4 shadow-sm">
          <div className="text-center">
            <span className="text-sky-600 text-xs font-bold tracking-widest uppercase">TOP PARTNER SHOPS</span>
            <h3 className="text-base md:text-xl font-black text-slate-900 mt-1">
              ✨ {dongName} BEST 추천 제휴 샵 (총 5곳)
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3 mt-4">
            {shops.map((s) => (
              <div key={s.id} className="p-4 rounded-2xl border bg-slate-50 border-slate-200 hover:border-sky-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
                <div className="flex items-center gap-3.5 min-w-0">
                  <img src={s.image} alt={s.name} className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900 truncate">{s.name}</span>
                      <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">{s.badge}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{s.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-2 sm:mt-0">
                  <Link
                    href={`/${city}/${district}/${dong}/shop/${s.id}`}
                    className="w-full sm:w-auto px-4 py-2 text-center rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all"
                  >
                    상세 보기 &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}