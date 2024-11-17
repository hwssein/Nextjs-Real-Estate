export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: "https://amlak-kavir.vercel.app/sitemap.xml",
  };
}
