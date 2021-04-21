import "../styles/globals.css";
import { CookiesProvider } from "react-cookie";
import { SidebarProvider } from "../contexts/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <SidebarProvider
        currentPage={pageProps.currentPage}
      >
        <Component {...pageProps} />
      </SidebarProvider>
    </CookiesProvider>
  );
}

export default MyApp;
