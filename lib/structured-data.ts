export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "聚星数据知识产权有限公司",
    url: "https://juxingip.com",
    logo: "https://juxingip.com/logo.png",
    description: "专注数据知识产权确权、数据合规、知识产权布局与维权服务，为企业数据资产提供专业法律与技术支撑",
    address: {
      "@type": "PostalAddress",
      addressLocality: "广州市",
      addressRegion: "广东省",
      streetAddress: "天河区",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86-180-7274-0873",
      contactType: "customer service",
      email: "2787326121@qq.com",
    },
    sameAs: [
      "https://weixin.qq.com",
    ],
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "聚星数据知识产权有限公司",
      logo: {
        "@type": "ImageObject",
        url: "https://juxingip.com/logo.png",
      },
    },
    url: article.url,
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: product.url,
    brand: {
      "@type": "Brand",
      name: "聚星数据知识产权有限公司",
    },
  };
}
