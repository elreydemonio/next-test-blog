import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>
      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; Ryan Ray Portfolio</h1>
          <p>2000 - {new Date().getFullYear()}</p>
          <p>All rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
