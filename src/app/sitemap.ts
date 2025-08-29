import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://YOUR-DOMAIN.com";
  return [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/#events` },
    { url: `${base}/#staff` },
    { url: `${base}/#worlds` },
    { url: `${base}/#partners` },
    { url: `${base}/#sponsors` },
    { url: `${base}/#contact` },
  ];
}
