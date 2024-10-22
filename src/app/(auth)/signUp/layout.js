import Footer from "@/layout/Footer";

function SignUpLayout({ children }) {
  return (
    <>
      <header className="w-full text-center mt-4 mb-12">
        <div className="font-bold text-2xl text-primary">املاک کویر</div>
      </header>
      <main>{children}</main>
      <footer className="mt-8">
        <span className="w-full bg-primary h-px block"></span>
        <Footer />
      </footer>
    </>
  );
}

export default SignUpLayout;
