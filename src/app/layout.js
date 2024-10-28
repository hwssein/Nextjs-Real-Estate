import "./globals.css";
import Layout from "src/components/layout/Layout";
import SessionsProvider from "@/providers/SessionsProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const metadata = {
  title: "Real Estate Next.js Project",
  description: "پروژه املاک توسعه داده شده با next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="container max-w-7xl mx-auto text-base font-sans">
        <SessionsProvider>
          <Layout>{children}</Layout>
        </SessionsProvider>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          theme="light"
        />
      </body>
    </html>
  );
}
