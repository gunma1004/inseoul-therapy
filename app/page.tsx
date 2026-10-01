import { Metadata } from "next";
import MainClientUI from "./MainClientUI";

const SITE_URL = "https://inseoul-therapy.netlify.app";
const SITE_NAME = "인서울테라피";

export const metadata: Metadata = {
  // 스팸 키워드 배제 및 클릭 유도형 네이버 검색 최적화 규격 준수
  title: `${SITE_NAME} | 서울·경기·인천 출장 메마른 대지를 적시는 마사지 & 전신 피로 완화`,
  description: "서울·경기·인천에서 인서울테라피 출장마사지를 살펴보세요. 프라이빗케어·웜아로마·소프트케어 등 다양한 구성과 60·90·120분 코스의 시간·금액을 한눈에 확인할 수 있습니다.",
  keywords: [
    "인서울테라피",
    "Inseoul Therapy",
    "서울 출장 마사지",
    "경기 출장 마사지",
    "인천 출장 마사지",
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
    title: `${SITE_NAME} | 서울·경기·인천 출장 메마른 대지를 적시는 마사지 & 전신 피로 완화`,
    description: "서울·경기·인천에서 인서울테라피 출장마사지를 살펴보세요. 프라이빗케어·웜아로마·소프트케어 등 다양한 구성과 60·90·120분 코스의 시간·금액을 한눈에 확인할 수 있습니다.",
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

export default function Page() {
  return <MainClientUI />;
}