import { Metadata } from "next";
import MainClientUI from "./MainClientUI";

const SITE_URL = "https://inseoul-therapy.netlify.app";
const SITE_NAME = "인서울테라피";

export const metadata: Metadata = {
  // 🌟 타이틀: '출장'과 '마사지'를 띄워서 분리
  title: `${SITE_NAME} | 서울·경기·인천 출장 프리미엄 마사지 & 바디케어`,
  // 🌟 디스크립션: '출장마사지'를 붙여서 작성
  description: "서울·경기·인천 출장마사지 인서울테라피 서비스를 살펴보세요. 프라이빗케어·웜아로마·소프트케어 등 다양한 구성과 60·90·120분 코스의 시간·금액을 한눈에 확인할 수 있습니다.",
  keywords: [
    "인서울테라피",
    "Inseoul Therapy",
    "서울 출장마사지",
    "경기 출장마사지",
    "인천 출장마사지",
    "수도권 방문테라피",
    "안심 후불제 마사지",
    "프라이빗 출장 홈케어",
    "스웨디시",
    "홈타이"
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | 서울·경기·인천 출장 프리미엄 마사지 & 바디케어`,
    description: "서울·경기·인천 출장마사지 인서울테라피 서비스를 살펴보세요. 프라이빗케어·웜아로마·소프트케어 등 다양한 구성과 60·90·120분 코스의 시간·금액을 한눈에 확인할 수 있습니다.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "인서울테라피 - 수도권 프리미엄 출장 홈케어 플랫폼",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | 서울·경기·인천 출장 리프레쉬 마사지`,
    description: "서울·경기·인천 출장마사지 제휴 정보 및 100% 안심 후불제 프리미엄 힐링 가이드",
    images: ["/og-main.png"],
  },
};

export default function Page(props: any) {
  return <MainClientUI />;
}