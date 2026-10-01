"use client";

export default function MainClientUI() {
  return (
    <main className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-6 space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm text-center space-y-4">
        <span className="bg-sky-50 text-sky-600 text-xs font-extrabold px-3 py-1 rounded-full border border-sky-100">
          ✨ 수도권 프리미엄 100% 안심 후불제
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          인서울테라피 방문 홈케어 서비스
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          서울·경기·인천 전 지역에서 만나는 프라이빗케어, 웜아로마, 소프트케어. 
          편안한 공간에서 전문 테라피스트의 힐링을 경험하세요.
        </p>
      </div>
    </main>
  );
}