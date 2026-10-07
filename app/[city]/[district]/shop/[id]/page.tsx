import type { Metadata } from "next";
import Link from "next/link";
import { regionData } from "@/lib/regions";

interface PageProps {
  params: Promise<{
    city: string;
    district: string;
    id: string;
  }>;
}

const SITE_URL = "https://inseoul-therapy.netlify.app";
const SITE_NAME = "인서울테라피";

// 🌟 타이틀용 순환 키워드 풀
const shopActionModifiers = [
  "릴렉스 마사지 & 힐링 케어",
  "스웨디시 마사지 & 프리미엄 테라피",
  "아로마 마사지 1:1 맞춤 케어",
  "정통 타이 마사지 정찰제 안내",
  "감성 스웨디시 마사지 힐링",
  "딥티슈 마사지 이완 케어",
  "바디케어 마사지 & 웰니스",
  "전신 릴렉싱 마사지 코스",
  "VIP 맞춤형 테라피 마사지",
  "림프 순환 케어 마사지",
  "포근한 힐링 아로마 마사지",
  "체형 맞춤 전신 스트레칭 마사지"
];

// 🌟 디스크립션 가격 및 소구점 조합 풀
const priceHooks = [
  "건식 6만원부터 심야할증 없이 방문합니다.",
  "스웨디시 8만원부터 추가비용 없이 방문합니다.",
  "아로마 7만원부터 합리적인 정찰제로 방문합니다.",
  "타이, 아로마, 스웨디시 100% 안심 후불제로 진행됩니다.",
  "추가 요금 없이 투명한 현장 결제로 신속하게 찾아갑니다."
];

const shopDatabase: Record<string, {
  name: string;
  phone: string;
  badge: string;
  image: string;
  desc: string;
  courses: {
    category: string;
    badge?: string;
    desc: string;
    items: { time: string; price: string; recommend?: boolean }[];
  }[];
}> = {
  "1": {
    name: "한국골든테라피",
    phone: "0507-1280-3361",
    badge: "VIP 골든 힐링 케어",
    image: "/shop1.jpg",
    desc: "골든 품격의 감성 릴렉싱! 전문 관리사들의 정성스러운 맞춤 테라피로 일상의 피로를 완벽하게 해소해 드립니다.",
    courses: [
      { category: "스웨디시 코스", badge: "인기 추천", desc: "부드럽고 섬세한 터치로 전신의 피로를 깊이 있게 이완해 주는 프리미엄 스웨디시 케어.", items: [{ time: "60분", price: "140,000원" }, { time: "90분", price: "190,000원", recommend: true }] },
      { category: "프리미엄 코스", badge: "시그니처", desc: "만족도 높은 힐링 테크닉으로 전신의 활력을 되찾아주는 맞춤형 바디케어.", items: [{ time: "60분", price: "110,000원" }, { time: "90분", price: "130,000원", recommend: true }, { time: "120분", price: "150,000원" }] }
    ]
  },
  "2": {
    name: "한국미인테라피",
    phone: "0507-1280-3303",
    badge: "재방문율 최우수",
    image: "/shop2.jpg",
    desc: "최고급 천연 오일을 활용한 감성 아로마 전신 바디케어 프로그램 및 스웨디시 제휴 샵.",
    courses: [
      { category: "아로디시 코스", desc: "부드러운 아로마 감성과 힐링 케어를 동시에 즐길 수 있는 실속 프로그램.", items: [{ time: "90분", price: "100,000원" }, { time: "120분", price: "130,000원", recommend: true }] },
      { category: "VIP 스웨디시 코스", badge: "인기 추천", desc: "고급 오일과 깊은 이완 테크닉으로 최고의 휴식을 선사하는 프리미엄 케어.", items: [{ time: "60분", price: "110,000원" }, { time: "90분", price: "130,000원", recommend: true }, { time: "120분", price: "150,000원" }] },
      { category: "한국인 스웨디시 코스", badge: "BEST", desc: "한국인 전문 관리사의 섬세하고 수준 높은 프리미엄 맞춤 테라피.", items: [{ time: "60분", price: "140,000원" }, { time: "90분", price: "180,000원", recommend: true }] }
    ]
  },
  "3": {
    name: "주주테라피",
    phone: "0507-1280-3193",
    badge: "만족도 1위 추천",
    image: "/shop3.jpg",
    desc: "재방문율 1위 만족도! 정통 타이 마사지부터 올인원 VIP 코스까지 체계적인 프로그램.",
    courses: [
      { category: "타이코스", desc: "뭉치고 굳은 전신 근육을 시원하게 풀어주는 정통 스트레칭 마사지.", items: [{ time: "60분", price: "60,000원" }, { time: "90분", price: "80,000원", recommend: true }, { time: "120분", price: "100,000원" }] },
      { category: "전신아로마", desc: "고급 천연 오일로 피로와 긴장을 부드럽게 완화시켜주는 전신 릴렉스 케어.", items: [{ time: "60분", price: "70,000원" }, { time: "90분", price: "90,000원", recommend: true }, { time: "120분", price: "110,000원" }] },
      { category: "VIP 감성힐링코스", badge: "★추천", desc: "감각적이고 섬세한 터치로 깊은 이완과 힐링을 선사하는 인기 코스.", items: [{ time: "60분", price: "90,000원" }, { time: "90분", price: "110,000원", recommend: true }, { time: "120분", price: "130,000원" }] },
      { category: "VIP 스페셜코스", badge: "★추천", desc: "더욱 품격 있고 여유로운 휴식을 완성하는 프리미엄 스페셜 관리.", items: [{ time: "60분", price: "100,000원" }, { time: "90분", price: "120,000원", recommend: true }, { time: "120분", price: "140,000원" }] },
      { category: "VIP 프리미엄 코스", desc: "타이 & 아로마 & 풋코스를 종합적으로 즐기는 150분 올인원 코스.", items: [{ time: "150분", price: "160,000원", recommend: true }] },
      { category: "한국인스웨디시", badge: "BEST", desc: "한국인 전문 관리사의 디테일하고 품격 있는 스웨디시 테라피.", items: [{ time: "60분", price: "140,000원" }, { time: "90분", price: "180,000원", recommend: true }] }
    ]
  },
  "4": {
    name: "퀸즈홈테라피",
    phone: "0507-1280-3334",
    badge: "여왕처럼 누리는 VIP",
    image: "/shop4.jpg",
    desc: "여왕처럼 누리는 고품격 테라피! 전문 관리사들의 품격 있는 1:1 맞춤 방문 힐링 서비스.",
    courses: [
      { category: "건식 힐링 코스", desc: "오일 없이 건식 지압과 스트레칭으로 굳은 전신 근육을 시원하게 풀어주는 코스.", items: [{ time: "60분", price: "60,000원" }, { time: "90분", price: "80,000원", recommend: true }, { time: "120분", price: "100,000원" }] },
      { category: "아로마 힐링 코스", desc: "고급 아로마 오일을 사용하여 뭉친 피로를 부드럽게 이완시키는 방문 케어.", items: [{ time: "60분", price: "70,000원" }, { time: "90분", price: "80,000원", recommend: true }, { time: "120분", price: "100,000원" }] },
      { category: "힐링스웨디시 코스", badge: "인기", desc: "부드럽고 감성적인 오일 테라피로 심신의 안정을 찾아주는 스웨디시.", items: [{ time: "60분", price: "80,000원" }, { time: "90분", price: "100,000원", recommend: true }, { time: "120분", price: "120,000원" }] },
      { category: "VIP스페셜코스", badge: "★추천", desc: "최고의 만족감을 선사하는 고품격 프리미엄 맞춤 스페셜 케어.", items: [{ time: "60분", price: "100,000원" }, { time: "90분", price: "120,000원", recommend: true }, { time: "120분", price: "150,000원" }] },
      { category: "한국 관리사 코스", badge: "BEST", desc: "한국인 관리사의 전문적인 손길로 진행되는 맞춤형 프리미엄 코스.", items: [{ time: "60분", price: "150,000원" }, { time: "90분", price: "180,000원", recommend: true }] }
    ]
  },
  "5": {
    name: "오늘밤테라피",
    phone: "0507-1280-3223",
    badge: "야간 힐링 만족 1위",
    image: "/shop5.jpg",
    desc: "선입금 없는 100% 후불제! 깊은 밤 지친 하루의 피로를 타이부터 스웨디시까지 완벽하게 날려버리세요.",
    courses: [
      { category: "타이코스", desc: "오일 없이 정통 건식 지압과 스트레칭으로 피로를 시원하게 해소.", items: [{ time: "60분", price: "60,000원" }, { time: "90분", price: "80,000원", recommend: true }, { time: "120분", price: "100,000원" }] },
      { category: "전신아로마", desc: "천연 오일의 부드러움으로 전신을 편안하게 이완시켜주는 아로마 케어.", items: [{ time: "60분", price: "70,000원" }, { time: "90분", price: "90,000원", recommend: true }, { time: "120분", price: "110,000원" }] },
      { category: "VIP 감성힐링코스", badge: "★추천", desc: "섬세하고 감각적인 터치로 깊은 힐링을 선사하는 인기 코스.", items: [{ time: "60분", price: "90,000원" }, { time: "90분", price: "110,000원", recommend: true }, { time: "120분", price: "130,000원" }] },
      { category: "VIP 스페셜코스", badge: "★추천", desc: "완벽한 휴식을 위한 고품격 프리미엄 스페셜 관리 프로그램.", items: [{ time: "60분", price: "100,000원" }, { time: "90분", price: "120,000원", recommend: true }, { time: "120분", price: "140,000원" }] },
      { category: "VIP 프리미엄 코스", desc: "타이 & 아로마 & 풋코스를 종합적으로 즐기는 150분 올인원 코스.", items: [{ time: "150분", price: "160,000원", recommend: true }] },
      { category: "한국인스웨디시", badge: "BEST", desc: "한국인 전문 관리사의 디테일하고 품격 있는 스웨디시 테라피.", items: [{ time: "60분", price: "140,000원" }, { time: "90분", price: "180,000원", recommend: true }] }
    ]
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { city, district, id } = resolvedParams;

  const region = regionData[city.toLowerCase()];
  const districtInfo = region?.districts[district.toLowerCase()];

  const cityName = city.toLowerCase() === "seoul" ? "서울" : city.toLowerCase() === "incheon" ? "인천" : "경기";
  const districtName = districtInfo ? districtInfo.name : district;
  const shop = shopDatabase[id] || shopDatabase["1"];

  const seedString = `${cityName}-${districtName}-${id}-gu-shop-seo`;
  const charSum = seedString.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const modIdx = charSum % shopActionModifiers.length;
  const priceIdx = (charSum * 7) % priceHooks.length;

  // 🌟 [통일된 규칙]
  // 1) 타이틀: "[구] 마사지 [순환 키워드] | [시] 방문 테라피 | [사이트명]"
  let formattedTitle = `${districtName} 마사지 ${shopActionModifiers[modIdx]} | ${cityName} 방문 테라피 | ${SITE_NAME}`;
  formattedTitle = formattedTitle.replace(/출장마사지/g, "출장 마사지");

  // 2) 메타디스크립션: "[시] [구] 출장마사지 및 [샵이름] 프리미엄 방문 테라피 안내..."
  const formattedDesc = `${cityName} ${districtName} 출장마사지 및 ${shop.name} 프리미엄 방문 테라피 안내. 100% 안심 후불제. ${priceHooks[priceIdx]}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: formattedTitle },
    description: formattedDesc,
    alternates: {
      canonical: `${SITE_URL}/${city}/${district}/shop/${id}`
    },
    keywords: [
      `${districtName} 마사지`,
      `${districtName} 출장마사지`,
      `${districtName} 방문 테라피`,
      `${cityName} 방문 테라피`,
      `${shop.name}`,
      `${cityName} ${districtName} 출장`,
      SITE_NAME
    ],
    openGraph: {
      title: formattedTitle,
      description: formattedDesc,
      url: `${SITE_URL}/${city}/${district}/shop/${id}`,
      locale: "ko_KR",
      type: "website",
      images: [{ url: shop.image, width: 800, height: 600, alt: `${districtName} 출장 마사지 제휴샵` }]
    }
  };
}

function getUniqueShopContent(districtName: string, shopName: string, shopDesc: string, shopId: string) {
  const seed = `${districtName}-${shopName}-${shopId}-inseoul`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const absHash = Math.abs(hash);

  const extros = [
    `${districtName} 전 지역을 중심으로 빠르고 정확한 방문 시스템을 자랑하는 ${shopName}입니다. ${shopDesc} 바쁜 일상 속에 쌓인 스트레스와 피로를 풀고 싶으실 때, 언제 어디서든 전화 한 통이면 내 집이 최고급 힐링 공간으로 변신합니다.`,
    `${shopName}은(는) ${districtName} 관내 최고 수준의 테라피스트들로 구성된 프리미엄 홈케어 제휴 샵입니다. ${shopDesc} 쾌적하고 위생적인 관리 시스템과 체계화된 코스 매뉴얼을 통해 고객님의 컨디션에 딱 맞는 최적의 릴렉싱 타임을 선사합니다.`,
    `프라이빗한 공간에서 누리는 완벽한 휴식, ${districtName} 대표 힐링 명소 ${shopName}에 오신 것을 환영합니다. ${shopDesc} 100% 현장 결제 시스템으로 운영되어 예약금 사기 걱정 없이 안심하고 부르실 수 있으며, 내상 없는 정직한 관리로 단골 만족도가 매우 높습니다.`
  ];

  const faqs = [
    [
      { q: `${shopName}의 방문 소요 시간은 어떻게 되나요?`, a: `현재 고객님이 계신 ${districtName} 관내 지역이라면 배차 확인 후 통상 25~30분 전후로 신속하게 방문드리고 있습니다.` },
      { q: `결제는 현장에서 카드로도 가능한가요?`, a: `네, 현금 결제는 물론 계좌 이체와 카드 결제 모두 가능합니다. 100% 후불제이므로 관리사 도착 후 편하신 방법으로 결제하시면 됩니다.` }
    ],
    [
      { q: `${shopName} 관리사님들의 실력은 어떤가요?`, a: `저희 샵의 모든 테라피스트는 체계적인 교육 과정을 이수한 전문 관리사들로, 압 조절부터 감성 릴렉스 케어까지 수준 높은 스킬을 보유하고 있습니다.` },
      { q: `늦은 새벽 시간에도 ${districtName} 지역으로 예약이 되나요?`, a: `네, 365일 24시간 연중무휴로 운영되고 있어 심야나 새벽 늦은 시간에도 할증 없이 정찰제로 편안하게 이용하실 수 있습니다.` }
    ]
  ];

  return {
    intro: extros[absHash % extros.length],
    faq: faqs[absHash % faqs.length]
  };
}

export default async function DistrictShopDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { city, district, id } = resolvedParams;

  const region = regionData[city.toLowerCase()];
  const districtInfo = region?.districts[district.toLowerCase()];

  const cityName = city.toLowerCase() === "seoul" ? "서울" : city.toLowerCase() === "incheon" ? "인천" : "경기";
  const districtName = districtInfo ? districtInfo.name : district;
  const shop = shopDatabase[id] || shopDatabase["1"];

  const fullLocation = `${cityName} ${districtName}`;
  const displayShopTitle = `${fullLocation} 출장 방문 테라피 제휴샵 - ${shop.name}`;

  const uniqueContent = getUniqueShopContent(districtName, shop.name, shop.desc, id);

  const allShopsList = Object.entries(shopDatabase).map(([sId, sVal]) => ({
    id: sId,
    name: sVal.name,
    badge: sVal.badge,
    desc: sVal.desc,
    phone: sVal.phone,
    image: sVal.image,
    active: sId === id
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: displayShopTitle,
    description: shop.desc,
    telephone: shop.phone,
    url: `${SITE_URL}/${city}/${district}/shop/${id}`,
    image: `${SITE_URL}${shop.image}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: fullLocation,
      addressCountry: "KR"
    },
    priceRange: "$$"
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans pb-28 selection:bg-sky-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 px-4 py-3 shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-sky-600">인서울테라피</Link>
          <Link
            href={`/${city}/${district}`}
            className="text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-100 hover:bg-sky-600 hover:text-white transition-all"
          >
            &larr; {districtName} 지역 홈으로
          </Link>
        </div>
      </header>

      {/* 브레드크럼 네비게이션 */}
      <nav className="bg-white/80 border-b border-slate-100 py-2.5 px-4 text-xs text-slate-500">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Link href="/" className="text-sky-600 hover:underline">홈</Link>
          <span>&gt;</span>
          <Link href={`/${city}`} className="hover:text-slate-800">{cityName}</Link>
          <span>&gt;</span>
          <Link href={`/${city}/${district}`} className="hover:text-slate-800">{districtName}</Link>
          <span>&gt;</span>
          <span className="text-slate-800 font-bold">{shop.name}</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1 space-y-8">
        
        {/* 상단 샵 정보 카드 */}
        <section className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="relative h-64 md:h-80 w-full overflow-hidden">
            <img src={shop.image} alt={displayShopTitle} className="w-full h-full object-cover filter brightness-[0.85]" />
            <span className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
              ✨ {shop.badge}
            </span>
          </div>
          <div className="p-6 md:p-8 space-y-4 -mt-8 relative z-10 bg-white rounded-t-3xl border-t border-slate-100">
            <span className="text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-lg border border-sky-100">
              📍 {fullLocation} 안심 제휴처
            </span>
            <h1 className="text-xl md:text-3xl font-black text-slate-900 leading-tight">{displayShopTitle}</h1>
            
            <div className="text-xs md:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-100 break-keep text-justify">
              <p>{uniqueContent.intro}</p>
            </div>
          </div>
        </section>

        {/* 샵 전용 FAQ */}
        <section className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl space-y-5 shadow-sm">
          <h3 className="text-base md:text-lg font-black text-slate-900 flex items-center gap-2">
            <span className="text-sky-500">💡</span> {shop.name} 매장 이용 FAQ
          </h3>
          <div className="space-y-4">
            {uniqueContent.faq.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="font-bold text-sm text-sky-700 mb-1.5">Q. {item.q}</p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">A. {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 코스 및 가격 안내 */}
        <section className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl space-y-6 shadow-sm">
          <div className="text-center">
            <span className="text-sky-600 text-xs font-bold tracking-widest uppercase">PROGRAM &amp; PRICE</span>
            <h2 className="text-lg md:text-2xl font-black text-slate-900 mt-1">💎 {shop.name} 정규 코스 및 요금</h2>
          </div>
          <div className="space-y-6">
            {shop.courses.map((courseGroup, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-extrabold text-slate-900 text-base">{courseGroup.category}</h3>
                  {courseGroup.badge && (
                    <span className="text-[10px] bg-sky-100 text-sky-700 font-bold px-2.5 py-0.5 rounded-full">
                      {courseGroup.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500">{courseGroup.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {courseGroup.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="p-3.5 bg-white rounded-xl border border-slate-200 flex justify-between items-center shadow-2xs">
                      <span className="text-xs font-bold text-slate-700">⏱️ {item.time}</span>
                      <span className="text-sm font-black text-sky-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 전체 제휴 샵 목록 */}
        <section className="bg-white border border-slate-200 p-6 rounded-3xl space-y-4 shadow-sm">
          <div className="text-center">
            <span className="text-sky-600 text-xs font-bold tracking-widest uppercase">PARTNER SHOPS IN {districtName}</span>
            <h3 className="text-base md:text-xl font-black text-slate-900 mt-1">
              ✨ {fullLocation} 추천 제휴 샵 (총 5곳)
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {allShopsList.map((s) => (
              <div 
                key={s.id} 
                className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${
                  s.active 
                    ? "bg-sky-50/60 border-sky-400 shadow-xs" 
                    : "bg-slate-50 border-slate-200 hover:border-sky-300"
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <img src={s.image} alt={s.name} className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-200" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900 truncate">{s.name}</span>
                      {s.active && <span className="text-[10px] bg-sky-600 text-white font-bold px-2 py-0.5 rounded-full">선택됨</span>}
                    </div>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{s.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-2 sm:mt-0">
                  <Link
                    href={`/${city}/${district}/shop/${s.id}`}
                    className={`w-full sm:w-auto px-4 py-2 text-center rounded-xl text-xs font-bold transition-all ${
                      s.active
                        ? "bg-sky-600 text-white shadow-xs"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-sky-600 hover:text-white hover:border-sky-600"
                    }`}
                  >
                    {s.active ? "안내 보기" : "샵 선택"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 하단 고정 예약 바 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 p-3 md:p-4 shadow-lg">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-3">
          <a
            href={`tel:${shop.phone}`}
            className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-black py-3.5 rounded-2xl text-xs md:text-sm shadow-sm"
          >
            📞 전화예약 ({shop.phone})
          </a>
          <a
            href={`sms:${shop.phone}`}
            className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 font-black py-3.5 rounded-2xl text-xs md:text-sm"
          >
            💬 문자상담
          </a>
        </div>
      </div>
    </div>
  );
}