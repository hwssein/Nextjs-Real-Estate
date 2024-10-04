import "./globals.css";

export const metadata = {
  title: "Real State Next.js Project",
  description: "پروژه املاک توسعه داده شده با next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
