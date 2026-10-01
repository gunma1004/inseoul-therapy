import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

const SITE_URL = "https://inseoul-therapy.netlify.app";
const SITE_NAME = "인서울테라피";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // 네이버 검색 최적화 규격 준수
    default: `${SITE_NAME} | 서울·경기·인천 출장 리프레쉬 마사지 & 프리미엄 테라피`,
    template: `%s | ${SITE_NAME}`
  },
  // 요청하신 디테일한 코스 및 시간 안내를 포함한 클릭 유도형 디스크립션
  description: "서울·경기·인천에서 출장마사지를 인서울테라피 살펴보세요. 프라이빗케어·웜아로마·소프트케어 등 다양한 구성과 60·90·120분 코스의 시간·금액을 한눈에 확인할 수 있습니다.",
  keywords: [
    "인서울테라피",
    "서울 출장 마사지",
    "경기 출장 마사지",
    "인천 출장 마사지",
    "수도권 방문테라피",
    "안심 후불제 마사지",
    "프라이빗 출장 홈케어"
  ],
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    other: {
      "naver-site-verification": "81067612bc6994453b9f8ec9eb23b036547fdbf8",
    },
  },
  openGraph: {
    title: `${SITE_NAME} | 서울·경기·인천 출장 리프레쉬 마사지 & 프리미엄 테라피`,
    description: "서울·경기·인천에서 출장마사지를 인서울테라피 살펴보세요. 프라이빗케어·웜아로마·소프트케어 등 다양한 구성과 60·90·120분 코스의 시간·금액을 한눈에 확인할 수 있습니다.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans selection:bg-sky-500 selection:text-white">
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
}