import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://777skills.com";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/products/43-metal-cabinet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/43-dual-screen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/43-wooden-cabinet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/32-metal-cabinet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products/self-dispensing-kiosk`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
