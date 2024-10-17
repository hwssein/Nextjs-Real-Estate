import { Noto_Sans } from "next/font/google";
import { Noto_Sans_Arabic } from "next/font/google";

import "./globals.css";
import Layout from "src/components/layout/Layout";
import SessionsProvider from "@/providers/SessionsProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
  title: "Real Estate Next.js Project",
  description: "پروژه املاک توسعه داده شده با next js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${faFont.variable} ${enFont.variable} text-base`}
    >
      <body className="container max-w-7xl mx-auto">
        <SessionsProvider>
          <Layout>{children}</Layout>
          <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            theme="light"
          />
        </SessionsProvider>
      </body>
    </html>
  );
}
