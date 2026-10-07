"use client";

import { useState } from "react";
import Link from "next/link";

export interface DistrictInfo {
  name: string;
  dongs: string[];
}

export interface RegionInfo {
  name: string;
  districts: Record<string, DistrictInfo>;
}

export const regionData: Record<string, RegionInfo> = {
  seoul: {
    name: "서울특별시",
    districts: {
      jongno: { name: "종로구", dongs: ["청운동", "효자동", "사직동", "삼청동", "부암동", "평창동", "무악동", "교남동", "가회동", "종로동", "이화동", "혜화동", "창신동", "숭인동"] },
      jung: { name: "중구", dongs: ["소공동", "회현동", "명동", "필동", "장충동", "광희동", "을지로동", "신당동", "다산동", "약수동", "청구동", "황학동", "중림동"] },
      yongsan: { name: "용산구", dongs: ["후암동", "용산동", "남영동", "청파동", "원효로동", "효창동", "용문동", "이촌동", "이태원동", "한남동", "서빙고동", "보광동"] },
      seongdong: { name: "성동구", dongs: ["왕십리동", "마장동", "사근동", "행당동", "응봉동", "금호동", "옥수동", "성수동", "송정동", "용답동"] },
      gwangjin: { name: "광진구", dongs: ["중곡동", "능동", "구의동", "광장동", "자양동", "화양동", "군자동"] },
      dongdaemun: { name: "동대문구", dongs: ["신설동", "용두동", "제기동", "전농동", "답십리동", "장안동", "청량리동", "회기동", "휘경동", "이문동"] },
      jungnang: { name: "중랑구", dongs: ["면목동", "상봉동", "중화동", "묵동", "망우동", "신내동"] },
      seongbuk: { name: "성북구", dongs: ["성북동", "삼선동", "동선동", "돈암동", "안암동", "보문동", "정릉동", "길음동", "종암동", "월곡동", "장위동", "석관동"] },
      gangbuk: { name: "강북구", dongs: ["삼양동", "미아동", "송중동", "송천동", "삼각산동", "번동", "수유동", "우이동", "인수동"] },
      dobong: { name: "도봉구", dongs: ["창동", "도봉동", "쌍문동", "방학동"] },
      nowon: { name: "노원구", dongs: ["상계동", "중계동", "하계동", "공릉동", "월계동"] },
      eunpyeong: { name: "은평구", dongs: ["불광동", "갈현동", "구산동", "대조동", "응암동", "역촌동", "신사동", "증산동", "수색동", "진관동"] },
      seodaemun: { name: "서대문구", dongs: ["천연동", "북아현동", "충현동", "신촌동", "연희동", "홍제동", "홍은동", "남가좌동", "북가좌동"] },
      mapo: { name: "마포구", dongs: ["공덕동", "아현동", "도화동", "용강동", "대흥동", "염리동", "신수동", "서교동", "합정동", "망원동", "연남동", "성산동", "상암동"] },
      yangcheon: { name: "양천구", dongs: ["목동", "신월동", "신정동"] },
      gangseo: { name: "강서구", dongs: ["등촌동", "화곡동", "우장산동", "가양동", "발산동", "공항동", "방화동", "마곡동"] },
      guro: { name: "구로구", dongs: ["신도림동", "구로동", "가리봉동", "고척동", "개봉동", "오류동", "수궁동", "항동"] },
      geumcheon: { name: "금천구", dongs: ["가산동", "독산동", "시흥동"] },
      yeongdeungpo: { name: "영등포구", dongs: ["영등포동", "여의도동", "당산동", "도림동", "문래동", "양평동", "신길동", "대림동"] },
      dongjak: { name: "동작구", dongs: ["노량진동", "상도동", "흑석동", "사당동", "대방동", "신대방동"] },
      gwanak: { name: "관악구", dongs: ["보라매동", "청림동", "성현동", "행운동", "낙성대동", "청룡동", "은천동", "신림동", "봉천동", "신사동", "대학동"] },
      seocho: { name: "서초구", dongs: ["서초동", "잠원동", "반포동", "방배동", "양재동", "내곡동"] },
      gangnam: { name: "강남구", dongs: ["역삼동", "개포동", "청담동", "삼성동", "대치동", "신사동", "논현동", "압구정동", "세곡동", "자곡동", "일원동", "수서동", "도곡동"] },
      songpa: { name: "송파구", dongs: ["잠실동", "풍납동", "거여동", "마천동", "방이동", "오금동", "송파동", "석촌동", "삼전동", "가락동", "문정동", "장지동", "위례동"] },
      gangdong: { name: "강동구", dongs: ["강일동", "상일동", "명일동", "고덕동", "암사동", "천호동", "성내동", "둔촌동"] }
    }
  },
  gyeonggi: {
    name: "경기도",
    districts: {
      suwon_jangan: { name: "수원시 장안구", dongs: ["파장동", "정자동", "영화동", "송죽동", "조원동", "율천동"] },
      suwon_gwonseon: { name: "수원시 권선구", dongs: ["세류동", "권선동", "곡선동", "평동", "호매실동", "서둔동", "금곡동"] },
      suwon_paldal: { name: "수원시 팔달구", dongs: ["매교동", "매산동", "고등동", "화서동", "지동", "우만동", "인계동"] },
      suwon_yeongtong: { name: "수원시 영통구", dongs: ["매탄동", "원천동", "영통동", "망포동", "광교동"] },
      seongnam_sujeong: { name: "성남시 수정구", dongs: ["신흥동", "태평동", "수진동", "단대동", "산성동", "양지동", "복정동", "위례동", "고등동"] },
      seongnam_jungwon: { name: "성남시 중원구", dongs: ["성남동", "중앙동", "금광동", "은행동", "상대원동", "하대원동", "도촌동"] },
      seongnam_bundang: { name: "성남시 분당구", dongs: ["분당동", "수내동", "정자동", "서현동", "이매동", "야탑동", "금곡동", "구미동", "판교동", "백현동", "운중동"] },
      goyang_deogyang: { name: "고양시 덕양구", dongs: ["원신동", "흥도동", "효자동", "행신동", "화정동", "고양동", "관산동"] },
      goyang_ilsandong: { name: "고양시 일산동구", dongs: ["식사동", "중산동", "정발산동", "풍산동", "백석동", "마두동", "장항동"] },
      goyang_ilsanseo: { name: "고양시 일산서구", dongs: ["일산동", "탄현동", "주엽동", "대화동", "송포동", "덕이동"] },
      yongin_cheoin: { name: "용인시 처인구", dongs: ["포곡읍", "모현읍", "남사읍", "원삼면", "역삼동", "유림동"] },
      yongin_giheung: { name: "용인시 기흥구", dongs: ["신갈동", "마북동", "동백동", "보정동", "상갈동", "구갈동", "보라동"] },
      yongin_suji: { name: "용인시 수지구", dongs: ["풍덕천동", "신봉동", "죽전동", "동천동", "상현동", "성복동"] },
      bucheon_wonmi: { name: "부천시 원미구", dongs: ["심곡동", "원미동", "소사동", "역곡동", "중동", "상동", "약대동"] },
      bucheon_sosa: { name: "부천시 소사구", dongs: ["소사본동", "범박동", "옥길동", "괴안동", "송내동"] },
      bucheon_ojeong: { name: "부천시 오정구", dongs: ["오정동", "고강동", "원종동", "성곡동"] },
      ansan_sangnok: { name: "안산시 상록구", dongs: ["반월동", "사동", "일동", "이동", "본오동"] },
      ansan_danwon: { name: "안산시 단원구", dongs: ["와동", "고잔동", "초지동", "원곡동", "신길동", "대부동"] },
      anyang_manan: { name: "안양시 만안구", dongs: ["안양동", "석수동", "박달동"] },
      anyang_dongan: { name: "안양시 동안구", dongs: ["비산동", "부흥동", "관양동", "평촌동", "범계동", "호계동"] },
      uijeongbu: { name: "의정부시", dongs: ["의정부동", "호원동", "장암동", "신곡동", "송산동", "민락동"] },
      gwangmyeong: { name: "광명시", dongs: ["광명동", "철산동", "하안동", "소하동", "일직동"] },
      pyeongtaek: { name: "평택시", dongs: ["고덕동", "서정동", "송탄동", "비전동", "동삭동", "안중읍"] },
      namyangju: { name: "남양주시", dongs: ["다산동", "별내동", "평내동", "호평동", "와부읍", "진접읍", "화도읍"] },
      siheung: { name: "시흥시", dongs: ["대야동", "신천동", "목감동", "정왕동", "배곧동", "은계동"] },
      hanam: { name: "하남시", dongs: ["신장동", "덕풍동", "위례동", "미사동", "감일동"] },
      gimpo: { name: "김포시", dongs: ["사우동", "풍무동", "장기동", "구래동", "운양동", "마산동", "고촌읍"] },
      hwaseong: { name: "화성시", dongs: ["동탄동", "병점동", "봉담읍", "향남읍", "남양읍", "새솔동"] }
    }
  },
  incheon: {
    name: "인천광역시",
    districts: {
      yeonsu: { name: "연수구", dongs: ["송도동", "옥련동", "선학동", "연수동", "청학동", "동춘동"] },
      namdong: { name: "남동구", dongs: ["구월동", "간석동", "만수동", "서창동", "논현동", "논현고잔동"] },
      bupyeong: { name: "부평구", dongs: ["부평동", "산곡동", "청천동", "갈산동", "삼산동", "부개동", "십정동"] },
      seohae: { name: "서구", dongs: ["청라동", "검단동", "원당동", "아라동", "가정동", "석남동", "연희동", "당하동"] },
      michuhol: { name: "미추홀구", dongs: ["숭의동", "용현동", "학익동", "도화동", "주안동", "관교동", "문학동"] },
      gyeyang: { name: "계양구", dongs: ["효성동", "계산동", "작전동", "작전서운동", "계양동"] },
      yeongjong: { name: "중구(영종)", dongs: ["운서동", "중산동", "운남동", "영종동", "신포동", "연안동"] }
    }
  }
};

export default function MainClientUI() {
  const [selectedRegionKey, setSelectedRegionKey] = useState<string>("seoul");
  const [selectedDistrictKey, setSelectedDistrictKey] = useState<string>("gangnam");
  const [selectedDong, setSelectedDong] = useState<string>("역삼동");

  const currentRegion = regionData[selectedRegionKey] || regionData["seoul"];
  const districtsEntries = Object.entries(currentRegion.districts);
  const currentDistrictsInfo = currentRegion.districts[selectedDistrictKey] || districtsEntries[0][1];

  return (
    <main className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-6 space-y-8">
      
      {/* 🌟 상단 히어로 배너 */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-700 rounded-3xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-4 text-center sm:text-left">
          <span className="inline-block bg-white/20 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20">
            ✨ 수도권 100% 안심 후불제 프리미엄 플랫폼
          </span>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            서울·경기·인천 출장 마사지 리프레쉬,<br className="hidden sm:inline" /> 인서울테라피
          </h1>
          <p className="text-sky-100 text-xs sm:text-sm max-w-xl leading-relaxed">
            당신이 머무는 자택, 오피스텔, 호텔이 가장 완벽한 쉼터가 됩니다. 선입금 없는 100% 안심 현장 결제로 타이, 아로마, 스웨디시 케어를 25분 내 빠르게 누려보세요.
          </p>
          <div className="pt-2 flex flex-wrap gap-3 justify-center sm:justify-start">
            <Link 
              href="/prices" 
              className="bg-white text-sky-700 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-md hover:bg-sky-50 transition-all active:scale-95"
            >
              📋 코스 및 가격 안내
            </Link>
            <Link 
              href="/reviews" 
              className="bg-sky-600/60 hover:bg-sky-600/80 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl backdrop-blur-md border border-white/20 transition-all active:scale-95"
            >
              ⭐ 생생 고객 후기
            </Link>
          </div>
        </div>
      </section>

      {/* 📍 빠른 이동 셀렉터 (동 페이지로 정확히 링크 이동) */}
      <section className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-1.5">
              <span>⚡</span> 빠른 지역 찾기 및 실시간 예약
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              원하시는 시·도, 구, 동을 선택하여 상세 안내 페이지로 이동하세요.
            </p>
          </div>

          <div className="flex bg-slate-100 p-1 rounded-2xl">
            {Object.entries(regionData).map(([key, reg]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedRegionKey(key);
                  const firstDistKey = Object.keys(regionData[key].districts)[0];
                  setSelectedDistrictKey(firstDistKey);
                  setSelectedDong(regionData[key].districts[firstDistKey].dongs[0] || "");
                }}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  selectedRegionKey === key
                    ? "bg-sky-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-sky-600"
                }`}
              >
                {reg.name.replace("특별시", "").replace("광역시", "").replace("경기도", "경기")}
              </button>
            ))}
          </div>
        </div>

        {/* 구 선택 */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block">
            1단계: 세부 구/군 선택 ({currentRegion.name})
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-1 bg-slate-50 rounded-2xl border border-slate-200">
            {districtsEntries.map(([dKey, dInfo]) => (
              <button
                key={dKey}
                onClick={() => {
                  setSelectedDistrictKey(dKey);
                  setSelectedDong(dInfo.dongs[0] || "");
                }}
                className={`p-2.5 rounded-xl text-xs font-bold transition-all truncate ${
                  selectedDistrictKey === dKey
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-sky-400 hover:text-sky-600"
                }`}
              >
                {dInfo.name}
              </button>
            ))}
          </div>
        </div>

        {/* 동 선택 */}
        {currentDistrictsInfo && (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">
              2단계: 세부 동 선택 ({currentDistrictsInfo.name})
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-h-40 overflow-y-auto p-1 bg-sky-50/50 rounded-2xl border border-sky-100">
              {currentDistrictsInfo.dongs.map((dongName) => (
                <button
                  key={dongName}
                  onClick={() => setSelectedDong(dongName)}
                  className={`p-2 rounded-xl text-xs font-bold transition-all truncate ${
                    selectedDong === dongName
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-sky-400 hover:text-sky-600"
                  }`}
                >
                  {dongName}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 🌟 수정 포인트: /shop/1 대신 실제 동 페이지(app/[city]/[district]/[dong])로 정상 이동 */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="text-xs font-bold text-slate-700">
            선택 지역: <span className="text-sky-600 font-black">{currentRegion.name} {currentDistrictsInfo?.name} {selectedDong && `> ${selectedDong}`}</span>
          </div>
          
          <Link
            href={`/${selectedRegionKey}/${selectedDistrictKey}/${encodeURIComponent(selectedDong || currentDistrictsInfo.dongs[0])}`}
            className="w-full sm:w-auto text-center px-6 py-2.5 rounded-xl text-xs font-black transition-all shadow-sm bg-sky-600 hover:bg-sky-700 text-white active:scale-95"
          >
            🚀 {selectedDong || currentDistrictsInfo.name} 상세 가이드 및 예약 보기 &rarr;
          </Link>
        </div>
      </section>

      {/* 🌟🌟 SEO 핵심: 검색엔진 로봇 수집용 수도권 전 지역 정적 앵커 링크 트리 (누락 방지) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-sky-600 text-xs font-bold uppercase tracking-wider">ALL REGIONAL DIRECTORY</span>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
            📍 수도권 전 지역 출장 홈케어 상세 가이드 (전체 동 링크)
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            검색 로봇과 사용자가 모든 지역의 코스와 투명한 요금표를 탐색할 수 있도록 전체 동별 독립 페이지 링크를 제공합니다.
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(regionData).map(([sidoKey, sidoVal]) => (
            <div key={sidoKey} className="space-y-4">
              <div className="flex items-center justify-between">
                <Link 
                  href={`/${sidoKey}`} 
                  className="text-base sm:text-lg font-black text-slate-900 hover:text-sky-600 transition-colors flex items-center gap-2"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
                  {sidoVal.name} 전체보기 &rarr;
                </Link>
                <span className="text-xs text-slate-400 font-medium">
                  {Object.keys(sidoVal.districts).length}개 관할 권역
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(sidoVal.districts).map(([distKey, distVal]) => (
                  <div key={distKey} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5">
                    <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
                      <Link 
                        href={`/${sidoKey}/${distKey}`} 
                        className="font-extrabold text-sm text-sky-700 hover:underline"
                      >
                        {distVal.name}
                      </Link>
                      <span className="text-[10px] text-slate-400">{distVal.dongs.length}개 동</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {distVal.dongs.map((dongName, idx) => (
                        <Link
                          key={idx}
                          href={`/${sidoKey}/${distKey}/${encodeURIComponent(dongName)}`}
                          className="text-[11px] text-slate-600 hover:text-sky-600 bg-white hover:bg-sky-50 px-2 py-1 rounded-md border border-slate-200/80 transition-colors"
                        >
                          {dongName}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🛡️ 신뢰도 및 본문 텍스트 품질 보강 섹션 */}
      <section className="bg-slate-100/90 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
        <h3 className="text-sm sm:text-base font-extrabold text-slate-800 flex items-center gap-2">
          <span>🛡</span> 인서울테라피 100% 안심 후불제 이용 원칙
        </h3>
        <p>
          인서울테라피는 서울, 경기, 인천 수도권 전 지역 고객님들이 예약금 및 선입금 사기 걱정 없이 내 집, 호텔, 오피스에서 편안하게 출장 홈케어와 방문 테라피를 누리실 수 있도록 검증된 정식 제휴처만을 안내합니다.
        </p>
        <p>
          모든 코스는 과도한 추가 요금이나 불투명한 시간제 운영을 배제하며, 전문 관리사가 직접 방문한 후 확인하고 결제하는 정직한 정찰제 시스템을 지향합니다. 타이 스트레칭, 아로마 릴렉싱, 스웨디시 등 뭉친 근육과 일상의 피로를 24시간 언제든 안전하게 해소해 보세요.
        </p>
      </section>

    </main>
  );
}