import { createContext, useState } from "react";

export const SidebarContext = createContext({});

export function SidebarProvider({ children, ...rest }) {
  const [currentPage, setCurrentPage] = useState("home");

  /**
   * @param {string} component - Component name
   */
  const render = (component) => {
    setCurrentPage(component);
  };

  return (
    <SidebarContext.Provider value={{
      render,
      currentPage
    }}>
      {children}
    </SidebarContext.Provider>
  );
}
