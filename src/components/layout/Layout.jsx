import { auth } from "@/config/auth";
import Footer from "./Footer";
import Header from "./Header";

async function Layout({ children }) {
  const session = await auth();
  return (
    <>
      <Header session={session?.user} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
