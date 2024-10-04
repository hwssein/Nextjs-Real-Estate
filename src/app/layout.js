import { Noto_Sans } from "next/font/google";
import { Noto_Sans_Arabic } from "next/font/google";

import "./globals.css";
import Layout from "src/components/layout/Layout";

const enFont = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--en-font",
});
const faFont = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  variable: "--fa-font",
});

export const metadata = {
  title: "Real State Next.js Project",
  description: "پروژه املاک توسعه داده شده با next js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${faFont.variable} ${enFont.variable} text-md`}
    >
      <body className="container">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
