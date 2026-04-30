import { Metadata } from "next";

export const siteConfig = {
  name: "聚星数据知识产权有限公司",
  description: "专注数据知识产权确权、数据合规、知识产权布局与维权服务，为企业数据资产提供专业法律与技术支撑",
  url: "https://juxingip.com",
  ogImage: "https://juxingip.com/og.jpg",
  links: {
    github: "",
  },
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
