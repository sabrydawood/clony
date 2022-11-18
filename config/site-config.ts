import { SiteConfig } from "@/types";

export const websiteUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
export const githubBaseUrl =
  "https://github.com/virgel1995/Virus-Docs";

const siteConfig: SiteConfig = {
  repo: {
    url: githubBaseUrl,
    editUrl: `${githubBaseUrl}/edit/main/content`,
    blobUrl: `${githubBaseUrl}/blob/main`,
  },
  author: {
    name: "virus24",
    github: "virgel1995",
    twitter: "@virus24",
    email: "kazouya25@gmail.com",
  },
  seo: {
    title: "Virus-Docs",
    description: "an website for virus24 packages documention",
    openGraph: {
      url: websiteUrl,
      type: "website",
      image: {
        url: `${websiteUrl}/static/images/banner.png`,
        width: 1240,
        height: 480,
        alt: "an website for virus24 packages documention",
        type: "image/png",
      },
      locale: "en_US",
      siteName: "Virus-Docs",
    },
    twitter: {
      site: "@virus24",
      handle: "@virus24",
      cardType: "summary_large_image",
      image: {
        url: `${websiteUrl}/static/images/banner.png`,
        width: 1012,
        height: 506,
        alt: "an website for virus24 packages documention",
        type: "image/png",
      },
    },
    robots: "index, follow",
  },
};

export default siteConfig;
