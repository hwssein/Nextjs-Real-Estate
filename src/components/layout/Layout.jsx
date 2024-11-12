import Footer from "./Footer";
import Header from "./Header";
import findUser from "@/serverAction/findUser";

async function Layout({ children }) {
  const user = await findUser();
  const jsUser = JSON.parse(JSON.stringify(user));

  return (
    <>
      <Header session={jsUser?.email} role={jsUser?.role} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
