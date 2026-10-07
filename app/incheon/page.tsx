import Link from 'next/link';
import type { Metadata } from "next";

const SITE_URL = "https://inseoul-therapy.netlify.app";
const SITE_NAME = "인서울테라피";

export const metadata: Metadata = {
  title: "인천 출장 바디 케어 마사지 | 지역별 이용 가이드 - 인서울테라피",
  description:
    "인서울테라피 - 선입금 0원 100% 안심 후불제 인천출장마사지 정보. 인천광역시 전역 일정과 공간에 맞춰 5가지 코스, 14개 시간·가격 선택지와 방문 준비사항을 확인하세요.",
  keywords: [
    "인천 출장 바디 케어 마사지",
    "인천출장마사지",
    "인천 출장 마사지",
    "인천 스웨디시",
    "인천 홈타이",
    "인천 방문 테라피",
    "인서울테라피"
  ],
  alternates: {
    canonical: `${SITE_URL}/incheon`,
  },
  openGraph: {
    title: "인천 출장 바디 케어 마사지 | 지역별 이용 가이드 - 인서울테라피",
    description:
      "인서울테라피 - 선입금 0원 100% 안심 후불제 인천출장마사지 정보. 인천광역시 전역 일정과 공간에 맞춰 5가지 코스, 14개 시간·가격 선택지와 방문 준비사항을 확인하세요.",
    url: `${SITE_URL}/incheon`,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
  },
};

const shops = [
  { id: 1, name: "한국골든테라피", badge: "VIP 골든 힐링 케어", desc: "골든 품격의 감성 릴렉싱! 전문 관리사들의 정성스러운 맞춤 테라피", phone: "0507-1280-3361", price: "60분 110,000원~" },
  { id: 2, name: "한국미인테라피", badge: "재방문율 최우수", desc: "최고급 천연 오일을 활용한 감성 아로마 전신 바디케어 프로그램", phone: "0507-1280-3303", price: "90분 100,000원~" },
  { id: 3, name: "주주테라피", badge: "만족도 1위 추천", desc: "재방문율 1위 만족도! 정통 힐링 테라피부터 올인원 VIP 코스까지", phone: "0507-1280-3193", price: "60분 60,000원~" },
  { id: 4, name: "퀸즈홈테라피", badge: "여왕처럼 누리는 VIP", desc: "여왕처럼 누리는 고품격 테라피! 전문 관리사들의 1:1 맞춤 방문 힐링", phone: "0507-1280-3334", price: "60분 60,000원~" },
  { id: 5, name: "오늘밤테라피", badge: "야간 힐링 만족 1위", desc: "선입금 없는 100% 후불제! 깊은 밤 지친 하루의 피로를 완벽하게", phone: "0507-1280-3223", price: "60분 60,000원~" }
];

const regionSeoContent = {
  title: "인천광역시 전 지역 프리미엄 출장 홈케어 안내",
  body: "인서울테라피는 최신 행정구역 개편안(제물포구, 영종구, 검단구 등)을 모두 반영한 인천광역시 전용 출장 힐링 테라피 네트워크를 운영합니다. 바쁜 업무와 일상에 지친 고객님들을 위해 번거로운 이동 없이, 현재 계신 자택이나 오피스텔 등 어디서든 신속하게 방문하여 고품격 스웨디시와 타이 마사지를 제공합니다. 선입금 요구가 전혀 없는 투명한 100% 안심 후불제로, 체계적인 교육을 이수한 20대 전문 테라피스트들이 차원이 다른 만족감을 선사합니다.",
  faqs: [
    { q: "인천 외곽이나 영종도, 강화군 지역도 방문이 가능한가요?", a: "네, 인천광역시 전 지역 방문을 원칙으로 하며, 영종도나 강화군 등 외곽 권역에도 전담 제휴 샵이 배치되어 있어 계신 곳에서 가장 빠르게 방문할 수 있는 매니저를 매칭해 드립니다." },
    { q: "도착까지 소요 시간은 얼마나 걸리나요?", a: "인천 도심 주요 권역의 경우 배차 확인 후 통상 25~30분 전후로 도착하며, 교통 상황이나 외곽 지역 여부에 따라 다소 차이가 있을 수 있습니다. 예약 시 도착 예정 시간을 정확히 안내해 드립니다." },
    { q: "결제 방식과 팁 등 추가 요금이 있나요?", a: "모든 코스 요금은 사이트에 명시된 정찰제로만 운영되며 숨겨진 추가 요금이나 팁 요구는 절대 없습니다. 결제는 관리사가 도착한 후 현금이나 계좌이체 등으로 직접 결제하시면 됩니다." }
  ]
};

const incheonDistricts = {
  jemulpo: { 
    name: "제물포구", 
    dongs: ["신포동", "연안동", "신흥동", "도원동", "율목동", "동인천동", "만석동", "화수동", "송현동", "송림동", "금창동", "개항동"] 
  },
  yeongjong: { 
    name: "영종구", 
    dongs: ["영종동", "용유동", "운서동", "중산동", "운남동", "운북동"] 
  },
  michuhol: { 
    name: "미추홀구", 
    dongs: ["숭의동", "용현동", "학익동", "도화동", "주안동", "관교동", "문학동"] 
  },
  yeonsu: { 
    name: "연수구", 
    dongs: ["옥련동", "선학동", "연수동", "청학동", "동춘동", "송도동"] 
  },
  namdong: { 
    name: "남동구", 
    dongs: ["구월동", "간석동", "만수동", "서창동", "남촌도림동", "논현동", "논현고잔동", "장수서창동"] 
  },
  bupyeong: { 
    name: "부평구", 
    dongs: ["부평동", "산곡동", "청천동", "갈산동", "삼산동", "부개동", "일신동", "십정동"] 
  },
  gyeyang: { 
    name: "계양구", 
    dongs: ["효성동", "계산동", "작전동", "작전서운동", "계양동", "임학동", "병방동", "방축동", "동양동", "귤현동", "상야동", "하야동", "평동", "노오지동", "선주지동", "이화동", "오류동", "둑실동", "목상동", "다남동", "장기동"] 
  },
  seohae: { 
    name: "서해구", 
    dongs: ["연희동", "가정동", "석남동", "가좌동", "신현원창동", "청라동"] 
  },
  geomdan: { 
    name: "검단구", 
    dongs: ["검단동", "불로대곡동", "원당동", "아라동", "당하동", "오류왕길동", "마전동", "검암경서동"] 
  },
  ganghwa: { 
    name: "강화군", 
    dongs: ["강화읍", "선원면", "불은면", "길상면", "화도면", "양도면", "내가면", "하점면", "양사면", "송해면", "교동면", "삼산면", "서도면"] 
  },
  ongjin: { 
    name: "옹진군", 
    dongs: ["북도면", "연평면", "백령면", "대청면", "덕적면", "자월면", "영흥면"] 
  }
};

export default function IncheonRegionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "인천광역시 전 지역 출장 홈케어 마사지 서비스",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: "0507-1280-3199",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "인천광역시",
    },
    description:
      "인천광역시 전 지역 100% 안심 후불제 출장 홈타이 및 바디케어 서비스 안내",
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-sky-600">
            인서울테라피
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="tel:050712803199"
              className="text-xs font-bold text-white bg-sky-600 px-3.5 py-1.5 rounded-xl hover:bg-sky-700 transition shadow-xs"
            >
              📞 24시 전화예약
            </a>
            <Link
              href="/"
              className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-xl hover:bg-slate-200 transition"
            >
              ← 홈으로
            </Link>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-slate-200 py-3 px-4 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex items-center gap-2">
          <Link href="/" className="text-sky-600 font-semibold hover:underline">
            홈
          </Link>
          <span>&gt;</span>
          <span className="text-slate-800 font-bold">인천 지역 안내</span>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* SEO 고유 본문 영역 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-4">
          <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1.5 rounded-full inline-block">
            인천광역시 안심 제휴 샵 안내
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            {regionSeoContent.title}
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed break-keep">
            {regionSeoContent.body}
          </p>
        </div>

        {/* 인천 전지역 대표 제휴 샵 카드 (총 5곳) */}
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <span>✨</span> 인천 전 지역 대표 추천 제휴 샵 (총 5곳)
            </h2>
            <span className="text-xs text-sky-600 font-extrabold bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              100% 안심 후불제
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5 pt-2">
            {shops.map((s) => (
              <div
                key={s.id}
                className="p-4 sm:p-5 rounded-2xl border bg-slate-50/80 border-slate-200/80 hover:border-sky-400 hover:bg-white hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
              >
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
                  <Link
                    href={`/incheon/yeonsu/shop/${s.id}`}
                    className="w-full sm:w-auto px-4 py-2.5 text-center rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all"
                  >
                    코스 상세보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO FAQ 영역 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-5">
          <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
            <span className="text-sky-500">💡</span> 인천 지역 이용 FAQ
          </h2>
          <div className="space-y-4">
            {regionSeoContent.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 md:p-5 rounded-2xl border border-slate-100"
              >
                <p className="font-bold text-sm md:text-base text-sky-700 mb-1.5">
                  Q. {faq.q}
                </p>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  A. {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 인천 전체 구·군 렌더링 (구 제목 링크화) */}
        <div className="space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 px-2">
            📍 인천 구·군 전체 권역 선택
          </h2>
          {Object.entries(incheonDistricts).map(([districtKey, districtVal]) => (
            <div
              key={districtKey}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <Link
                  href={`/incheon/${districtKey}`}
                  className="text-lg font-bold text-slate-900 hover:text-sky-600 flex items-center gap-2 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-sky-600"></span>
                  {districtVal.name} 전체보기 &rarr;
                </Link>
                <span className="text-xs text-slate-400">
                  {districtVal.dongs.length}개 지역 등록
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {districtVal.dongs.map((dong, idx) => (
                  <Link
                    key={idx}
                    href={`/incheon/${districtKey}/${encodeURIComponent(dong)}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 transition shadow-2xs"
                  >
                    {dong} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-400 mt-10">
        <p>© 2026 {SITE_NAME} (InSeoul Therapy). All rights reserved.</p>
        <p className="mt-1">공식 도메인: {SITE_URL}/incheon</p>
      </footer>
    </main>
  );
}