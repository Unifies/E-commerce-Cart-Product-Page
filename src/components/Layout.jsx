import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartTab from "./CartTab";

const Layout = () => {
  return (
    <>
      <div className="w-screen font-display">
        <main>
          <Header />
          <Outlet />
        </main>
        <CartTab />
      </div>
    </>
  );
};

export default Layout;
