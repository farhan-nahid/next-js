import React from "react";
import layoutStyles from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Nav />
      <main className={layoutStyles.main}>{children}</main>
    </div>
  );
};

export default Layout;
