import React from "react";
import navStyle from "../styles/nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={navStyle.nav}>
      <ul className={navStyle.ul}>
        <li className={navStyle.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={navStyle.li}>
          <Link href="/about">About</Link>
        </li>
        <li className={navStyle.li}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
