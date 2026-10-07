"use client";

import { useEffect, useState } from "react";

interface Props {
  locationText: string;
}

// 🌟 네이버/구글 검색엔진 품질 점수(품질 지수)를 높이는 순환 헤드라인 패턴 풀
const headlineMixers = [
  "출장 프리미엄 방문 테라피 & 릴렉스 케어",
  "출장 감성 스웨디시 마사지 & 프라이빗 홈케어",
  "출장 아로마 힐링 마사지 & 1:1 맞춤 바디케어",
  "출장 딥티슈 이완 마사지 & 전문 관리사 매칭",
  "출장 전신 스트레칭 마사지 & 안심 힐링 케어"
];

const subTextMixers = [
  "수도권 평균 25분 내 신속한 방문 · 100% 안심 후불제 시스템",
  "선입금·예약금 0원 원칙 · 현장 도착 후 대면 결제",
  "철저한 1회용 위생 관리와 최고급 천연 오일 사용 · 정찰제 운영",
  "늦은 심야 및 새벽 시간 할증 없는 투명한 정찰제 케어"
];

export default function ClientTextMixer({ locationText }: Props) {
  const [headline, setHeadline] = useState(
    `${locationText} 출장 프리미엄 방문 테라피 & 릴렉스 케어`
  );
  const [subText, setSubText] = useState(
    "수도권 평균 25분 내 신속한 방문 · 100% 안심 후불제 시스템"
  );

  useEffect(() => {
    // 지역명 + 날짜 해시 기반으로 지역 및 접속일자마다 고유한 조합 생성 (중복 콘텐츠 방지)
    const charSum = locationText
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
        (1000 * 60 * 60 * 24)
    );

    const hIdx = (charSum + dayOfYear) % headlineMixers.length;
    const sIdx = (charSum * 3 + dayOfYear) % subTextMixers.length;

    setHeadline(`${locationText} ${headlineMixers[hIdx]}`);
    setSubText(subTextMixers[sIdx]);
  }, [locationText]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-sky-500/10 border border-sky-500/30 p-4 md:p-5 rounded-2xl text-center shadow-sm">
      {/* 상단 실시간 안내 뱃지 */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sky-200 text-[11px] font-bold text-sky-700 mb-2 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        실시간 {locationText} 인서울테라피 전문 관리사 배차 대기중
      </div>

      {/* 핵심 키워드 헤드라인 */}
      <h2 className="text-sm md:text-base font-extrabold text-sky-900 tracking-tight">
        ✨ {headline}
      </h2>

      {/* 신뢰도 제공 서브 카피 */}
      <p className="text-[11px] md:text-xs text-slate-500 mt-1 font-medium">
        {subText}
      </p>
    </div>
  );
}