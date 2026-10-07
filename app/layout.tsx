import type { Metadata } from "next";
import "./globals.css";
import NavigationHeader from "./NavigationHeader";

const SITE_URL = "https://inseoul-therapy.netlify.app";
const SITE_NAME = "인서울테라피";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 서울·경기·인천 출장 리프레쉬 마사지 & 당신이 머무는 곳이 가장 완벽한 쉼터`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "서울·경기·인천에서 출장마사지를 인서울테라피에서 살펴보세요. 프라이빗케어·웜아로마·소프트케어 등 다양한 구성과 60·90·120분 코스의 시간·금액을 한눈에 확인할 수 있습니다.",
  keywords: [
    "인서울테라피",
    "서울 출장 마사지",
    "경기 출장 마사지",
    "인천 출장 마사지",
    "수도권 방문테라피",
    "안심 후불제 마사지",
    "프라이빗 출장 홈케어",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    other: {
      "naver-site-verification": "84346f775bdde51b31965e650e9c026b4f25bb0f",
    },
  },
  openGraph: {
    title: `${SITE_NAME} | 서울·경기·인천 출장 리프레쉬 마사지`,
    description:
      "프라이빗케어·웜아로마·소프트케어 등 다양한 구성과 60·90·120분 코스의 시간·금액 안내. 선입금 없는 100% 안심 후불제.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans selection:bg-sky-500 selection:text-white">
        <NavigationHeader />
        {children}
      </body>
    </html>
  );
}