import { useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { haveCookies, parseCookies } from "../helpers";
import styles from "../styles/pages/Home.module.css";
import Sidebar from "../components/Sidebar";
import { SidebarContext } from "../contexts/Sidebar";
import Profile from "../components/Profile";
import Shopping from "../components/Shopping";
import Report from "../components/Report";

export default function Home({ data }) {
  const { currentPage, render } = useContext(SidebarContext);
  const router = useRouter();

  useEffect(() => {
    render("home");
    if (!haveCookies(data.dealer)) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <main>
          {currentPage === "home" && <Profile dealerData={data.dealer} />}
          {currentPage === "add" && <Shopping dealerData={data.dealer} />}
          {currentPage === "report" && <Report dealerData={data.dealer} />}
        </main>
      </div>
    </>
  );
}

Home.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);
  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" });
      res.end();
    }
  }
  return {
    data: data && data,
  };
};
