import Link from 'next/link';
import type { Metadata } from "next";

const SITE_URL = "https://inseoul-therapy.netlify.app";
const SITE_NAME = "인서울테라피";

export const metadata: Metadata = {
  title: "경기 출장 바디 케어 마사지 | 지역별 이용 가이드 - 인서울테라피",
  description:
    "인서울테라피 - 선입금 0원 100% 안심 후불제 경기출장마사지 정보. 경기도 전역 일정과 공간에 맞춰 5가지 코스, 14개 시간·가격 선택지와 방문 준비사항을 확인하세요.",
  keywords: [
    "경기 출장 바디 케어 마사지",
    "경기출장마사지",
    "경기 출장 마사지",
    "경기 스웨디시",
    "경기 홈타이",
    "경기 방문 테라피",
    "인서울테라피"
  ],
  alternates: {
    canonical: `${SITE_URL}/gyeonggi`,
  },
  openGraph: {
    title: "경기 출장 바디 케어 마사지 | 지역별 이용 가이드 - 인서울테라피",
    description:
      "인서울테라피 - 선입금 0원 100% 안심 후불제 경기출장마사지 정보. 경기도 전역 일정과 공간에 맞춰 5가지 코스, 14개 시간·가격 선택지와 방문 준비사항을 확인하세요.",
    url: `${SITE_URL}/gyeonggi`,
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
  title: "경기도 전역 프리미엄 출장 홈케어 안내",
  body: "인서울테라피는 경기도 전역을 아우르는 광역 네트워크를 통해 언제 어디서든 편안하게 이용할 수 있는 출장 힐링 테라피를 제공합니다. 수원, 성남, 고양, 용인 등 주요 도심은 물론 외곽 지역까지 체계화된 시스템으로 빠르게 방문합니다. 내 집에서 누리는 최고급 스웨디시와 타이 마사지를 선입금 없는 100% 안심 후불제로 경험해 보세요. 엄격한 기준으로 선별된 전문 관리사들이 고객님의 지친 일상에 완벽한 휴식을 선사합니다.",
  faqs: [
    { q: "경기도 외곽 지역도 빠른 방문이 가능한가요?", a: "네, 경기도 내 31개 시·군 주요 권역에 전담 제휴 샵과 매니저가 배치되어 있어 최대한 신속한 방문이 가능하도록 시스템을 구축하고 있습니다." },
    { q: "예약 후 도착까지 시간은 얼마나 걸리나요?", a: "계신 곳의 지역 및 교통 상황에 따라 차이가 있으나, 평균적으로 배차 완료 후 25~30분 전후로 도착할 수 있도록 가장 가까운 제휴 샵을 우선 매칭해 드립니다." },
    { q: "예약금이나 선입금이 정말 없나요?", a: "선입금 사기를 원천 차단하기 위해 인서울테라피의 모든 제휴 샵은 관리사 도착 후 직접 확인하고 결제하는 '100% 현장 안심 후불제'로만 안전하게 운영됩니다." }
  ]
};

const gyeonggiDistricts = {
  suwon_jangan: { name: "수원시 장안구", dongs: ["파장동", "정자동", "영화동", "송죽동", "조원동", "율천동"] },
  suwon_gwonseon: { name: "수원시 권선구", dongs: ["세류동", "평동", "권선동", "곡선동", "입북동", "서둔동"] },
  suwon_paldal: { name: "수원시 팔달구", dongs: ["매교동", "매산동", "고등동", "화서동", "지동", "우만동", "인계동"] },
  suwon_yeongtong: { name: "수원시 영통구", dongs: ["매탄동", "원천동", "영통동", "망포동", "광교동"] },
  seongnam_sujeong: { name: "성남시 수정구", dongs: ["신흥동", "태평동", "수진동", "단대동", "산성동", "복정동"] },
  seongnam_jungwon: { name: "성남시 중원구", dongs: ["성남동", "중앙동", "금광동", "은행동", "하대원동", "도촌동"] },
  seongnam_bundang: { name: "성남시 분당구", dongs: ["분당동", "수내동", "정자동", "서현동", "이매동", "야탑동", "금곡동", "구미동", "판교동", "백현동"] },
  uijeongbu: { name: "의정부시", dongs: ["의정부동", "호원동", "장암동", "신곡동", "송산동", "가능동"] },
  anyang_manan: { name: "안양시 만안구", dongs: ["안양동", "석수동", "박달동"] },
  anyang_dongan: { name: "안양시 동안구", dongs: ["비산동", "관양동", "평촌동", "호계동"] },
  bucheon_wonmi: { name: "부천시 원미구", dongs: ["심곡동", "원미동", "소사동", "중동", "상동", "약대동"] },
  bucheon_sosa: { name: "부천시 소사구", dongs: ["소사본동", "범박동", "역곡동", "괴안동", "송내동"] },
  bucheon_ojeong: { name: "부천시 오정구", dongs: ["오정동", "원종동", "고강동", "성곡동"] },
  gwangmyeong: { name: "광명시", dongs: ["광명동", "철산동", "하안동", "소하동", "일직동"] },
  pyeongtaek: { name: "평택시", dongs: ["팽성읍", "포승읍", "고덕면", "서정동", "비전동", "동삭동"] },
  dongducheon: { name: "동두천시", dongs: ["생연동", "보산동", "중앙동", "상패동"] },
  ansan_sangnok: { name: "안산시 상록구", dongs: ["일동", "사동", "본오동", "반월동", "부곡동", "성포동"] },
  ansan_danwon: { name: "안산시 단원구", dongs: ["고잔동", "초지동", "선부동", "원곡동", "대부동"] },
  goyang_deogyang: { name: "고양시 덕양구", dongs: ["원신동", "흥도동", "효자동", "고양동", "행신동", "화정동"] },
  goyang_ilsandong: { name: "고양시 일산동구", dongs: ["식사동", "중산동", "정발산동", "백석동", "마두동", "장항동"] },
  goyang_ilsanseo: { name: "고양시 일산서구", dongs: ["일산동", "탄현동", "주엽동", "대화동", "송포동"] },
  gwacheon: { name: "과천시", dongs: ["별양동", "중앙동", "문원동", "과천동"] },
  guri: { name: "구리시", dongs: ["인창동", "교문동", "수택동", "갈매동"] },
  namyangju: { name: "남양주시", dongs: ["와부읍", "진접읍", "화도읍", "오남읍", "다산동", "평내동"] },
  osan: { name: "오산시", dongs: ["중앙동", "대원동", "남촌동", "초평동", "세마동"] },
  siheung: { name: "시흥시", dongs: ["대야동", "신천동", "은행동", "목감동", "정왕동", "배곧동"] },
  gunpo: { name: "군포시", dongs: ["군포동", "산본동", "금정동", "대야동"] },
  uiwang: { name: "의왕시", dongs: ["고천동", "부곡동", "내손동", "청계동"] },
  hanam: { name: "하남시", dongs: ["신장동", "창우동", "천현동", "미사동", "위례동"] },
  yongin_cheoin: { name: "용인시 처인구", dongs: ["포곡읍", "모현읍", "역삼동", "유림동", "동부동"] },
  yongin_giheung: { name: "용인시 기흥구", dongs: ["신갈동", "영덕동", "구갈동", "상갈동", "보정동", "동백동"] },
  yongin_suji: { name: "용인시 수지구", dongs: ["풍덕천동", "신봉동", "죽전동", "동천동", "상현동", "성복동"] },
  paju: { name: "파주시", dongs: ["문산읍", "조리읍", "금촌동", "교하동", "운정동"] },
  icheon: { name: "이천시", dongs: ["창전동", "중리동", "증포동", "부발읍"] },
  anseong: { name: "안성시", dongs: ["공도읍", "안성동", "대덕면"] },
  gimpo: { name: "김포시", dongs: ["고촌읍", "통진읍", "사우동", "장기동", "구래동", "마산동"] },
  hwaseong: { name: "화성시", dongs: ["봉담읍", "매송면", "비봉면", "동탄동", "병점동", "남양읍"] },
  gwangju: { name: "광주시", dongs: ["오포읍", "초월읍", "곤지암읍", "경안동", "광남동"] },
  yangju: { name: "양주시", dongs: ["회천동", "정릉동", "양주동", "백석읍"] },
  pochon: { name: "포천시", dongs: ["소흘읍", "군내면", "포천동", "선단동"] },
  yeoju: { name: "여주시", dongs: ["여흥동", "중앙동", "오학동"] },
  yeoncheon: { name: "연천군", dongs: ["연천읍", "전곡읍"] },
  gapyeong: { name: "가평군", dongs: ["가평읍", "설악면", "청평면"] },
  yangpyeong: { name: "양평군", dongs: ["양평읍", "강상면", "옥천면"] }
};

export default function GyeonggiRegionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "경기도 전 지역 출장 홈케어 마사지 서비스",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: "0507-1280-3199",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "경기도",
    },
    description:
      "경기도 전 지역 100% 안심 후불제 출장 홈타이 및 바디케어 서비스 안내",
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
          <span className="text-slate-800 font-bold">경기 지역 안내</span>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* SEO 본문 영역 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-4">
          <span className="bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1.5 rounded-full inline-block">
            경기도 안심 제휴 샵 안내
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            {regionSeoContent.title}
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed break-keep">
            {regionSeoContent.body}
          </p>
        </div>

        {/* 경기 전지역 대표 제휴 샵 카드 (총 5곳) */}
        <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2">
              <span>✨</span> 경기 전 지역 대표 추천 제휴 샵 (총 5곳)
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
                    href={`/gyeonggi/seongnam_bundang/shop/${s.id}`}
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
            <span className="text-sky-500">💡</span> 경기도 지역 이용 FAQ
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

        {/* 시·군·구 전체 권역 렌더링 (구/시 제목 링크화) */}
        <div className="space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 px-2">
            📍 경기 시·군·구 전체 권역 선택
          </h2>
          {Object.entries(gyeonggiDistricts).map(([districtKey, districtVal]) => (
            <div
              key={districtKey}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <Link
                  href={`/gyeonggi/${districtKey}`}
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
                    href={`/gyeonggi/${districtKey}/${encodeURIComponent(dong)}`}
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
        <p className="mt-1">공식 도메인: {SITE_URL}/gyeonggi</p>
      </footer>
    </main>
  );
}