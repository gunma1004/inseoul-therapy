"use client";

import { useState } from "react";
import Link from "next/link";
import { regionData } from "@/lib/regionData";

export default function MainClientUI() {
  // 현재 선택된 시/도 탭 ('seoul' | 'gyeonggi' | 'incheon')
  const [selectedRegionKey, setSelectedRegionKey] = useState<string>("seoul");
  // 선택된 구 key
  const [selectedDistrictKey, setSelectedDistrictKey] = useState<string>("");
  // 선택된 동 name
  const [selectedDong, setSelectedDong] = useState<string>("");

  const currentRegion = regionData[selectedRegionKey];
  const districtsEntries = Object.entries(currentRegion.districts);

  // 현재 선택된 구의 동 목록
  const currentDistrictsInfo = selectedDistrictKey ? currentRegion.districts[selectedDistrictKey] : null;

  return (
    <main className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-6 space-y-6">
      
      {/* 🌟 상단 히어로 배너 섹션 */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-700 rounded-3xl p-6 sm:p-10 text-white shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 space-y-4 text-center sm:text-left">
          <span className="inline-block bg-white/20 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20">
            ✨ 수도권 100% 안심 후불제 프리미엄 플랫폼
          </span>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            지친 일상 속 완벽한 힐링,<br className="hidden sm:inline" /> 인서울테라피
          </h1>
          <p className="text-sky-100 text-xs sm:text-sm max-w-xl leading-relaxed">
            서울, 경기, 인천 전 지역 방문 출장 홈케어. 프라이빗케어, 웜아로마, 소프트케어 등 다양한 구성과 코스를 한눈에 확인하고 편안하게 예약하세요.
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

      {/* 📍 lib/regionData 연동형 실시간 지역 선택기 섹션 */}
      <section className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-1.5">
              <span>📍</span> 수도권 맞춤 지역별 테라피 검색
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              원하시는 시·도, 구, 동을 선택하여 상세 제휴 및 예약 정보를 확인하세요.
            </p>
          </div>

          {/* 1단계: 시/도 탭 버튼 */}
          <div className="flex bg-slate-100 p-1 rounded-2xl">
            {Object.entries(regionData).map(([key, reg]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedRegionKey(key);
                  setSelectedDistrictKey("");
                  setSelectedDong("");
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

        {/* 2단계: 구(District) 선택 그리드 */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block">
            1단계: 세부 구/군 선택 ({currentRegion.name})
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-1 bg-slate-50 rounded-2xl border border-slate-200/60">
            {districtsEntries.map(([dKey, dInfo]) => (
              <button
                key={dKey}
                onClick={() => {
                  setSelectedDistrictKey(dKey);
                  setSelectedDong("");
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

        {/* 3단계: 동(Dong) 선택 그리드 (구가 선택된 경우에만 노출) */}
        {currentDistrictsInfo && (
          <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
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

        {/* 최종 선택 완료 및 이동 CTA */}
        <div className="pt-2 flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
          <div className="text-xs font-bold text-slate-700">
            선택 지역: <span className="text-sky-600 font-black">{currentRegion.name} {currentDistrictsInfo?.name || "구 선택 필요"} {selectedDong && `> ${selectedDong}`}</span>
          </div>
          
          <Link
            href={`/${selectedRegionKey}/${selectedDistrictKey || districtsEntries[0][0]}/${selectedDong || currentDistrictsInfo?.dongs[0] || "default"}/shop/1`}
            className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all shadow-sm ${
              selectedDistrictKey
                ? "bg-sky-600 hover:bg-sky-700 text-white active:scale-95"
                : "bg-slate-200 text-slate-400 pointer-events-none"
            }`}
          >
            🚀 해당 지역 제휴/예약 보기
          </Link>
        </div>
      </section>

      {/* 🛡️ 안내 및 신뢰도 섹션 */}
      <section className="bg-slate-100/80 rounded-3xl p-6 border border-slate-200/60 space-y-3">
        <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
          <span>🛡</span> 인서울테라피 안심 이용 가이드
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          저희 인서울테라피는 100% 안심 후불제 시스템을 기반으로 운영되며, 철저한 검증을 거친 전문 테라피스트들이 고객님의 프라이빗한 공간으로 직접 찾아가는 맞춤형 힐링 서비스를 제공합니다. 코스별 시간 및 요금은 상단 <Link href="/prices" className="text-sky-600 font-bold underline">코스&가격</Link> 메뉴에서 확인하실 수 있습니다.
        </p>
      </section>

    </main>
  );
}