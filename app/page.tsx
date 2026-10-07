import type { Metadata } from "next";
import MainClientUI from "./MainClientUI";

const SITE_URL = "https://inseoul-therapy.netlify.app";
const SITE_NAME = "인서울테라피";

export const metadata: Metadata = {
  title: `${SITE_NAME} | 서울·경기·인천 출장 리플레쉬 마사지 & 프리미엄 안심 홈케어`,
  description:
    "서울, 경기, 인천 수도권 전 지역 출장마사지 안내 인서울테라피. 프라이빗케어, 웜아로마, 소프트케어 등 다양한 코스와 정찰제 요금 안내. 선입금 없는 100% 안심 후불제로 25분 내 빠른 방문을 약속합니다.",
  keywords: [
    "인서울테라피",
    "출장마사지",
    "서울 출장마사지",
    "경기 출장마사지",
    "인천 출장마사지",
    "수도권 홈타이",
    "후불제 출장안마",
    "스웨디시",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | 서울·경기·인천 출장 리플레쉬 마사지 `,
    description:
      "선입금 0원 100% 현장 후불제! 타이, 아로마, 스웨디시 전문 테라피스트가 고객님이 계신 곳으로 25분 내 신속 방문합니다.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "인서울테라피 수도권 출장 홈케어 플랫폼",
      },
    ],
  },
};

export default function Page() {
  // 메인 페이지 전용 로컬 서비스 구조화 데이터 (SEO 신뢰도 부여)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "인서울테라피 수도권 출장 홈케어 서비스",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: "0507-1280-3199",
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "서울특별시" },
      { "@type": "AdministrativeArea", name: "경기도" },
      { "@type": "AdministrativeArea", name: "인천광역시" },
    ],
    description:
      "서울, 경기, 인천 전 지역 선입금 없는 100% 안심 후불제 출장 홈타이 및 바디케어 서비스 안내",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainClientUI />
    </>
  );
}