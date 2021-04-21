import { useContext } from "react";
import { useRouter } from "next/router";
import SideNav, { NavIcon, NavItem, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FiHome, FiLogOut, FiPlus, FiShoppingCart } from "react-icons/fi";
import { SidebarContext } from "../contexts/Sidebar";
import { useCookies } from "react-cookie";
import styles from "../styles/components/Sidebar.module.css";

export default function Sidebar() {
  const router = useRouter();
  const [cookie, setCookie, removeCookie] = useCookies(["dealer"]);
  const { currentPage, render } = useContext(SidebarContext);

  const logOut = () => {
    removeCookie("dealer");
    router.push("/");
  };

  return (
    <SideNav
      onSelect={(selected) => render(selected)}
      className={styles.color}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected={currentPage}>
        <NavItem eventKey="home" active={currentPage === "home"}>
          <NavIcon>
            <FiHome size="1rem" />
          </NavIcon>
          <NavText>
            Home
          </NavText>
        </NavItem>
        <NavItem eventKey="add" active={currentPage === "add"}>
          <NavIcon>
            <FiPlus />
          </NavIcon>
          <NavText>
            Cadastrar Compra
          </NavText>
        </NavItem>
        <NavItem eventKey="report" active={currentPage === "report"}>
          <NavIcon>
            <FiShoppingCart />
          </NavIcon>
          <NavText>
            Relatório de Compras
          </NavText>
        </NavItem>
        <NavItem onClick={logOut}>
          <NavIcon>
            <FiLogOut />
          </NavIcon>
          <NavText>
            Sair
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
