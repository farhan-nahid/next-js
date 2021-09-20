import React from "react";
import headerStyle from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyle.title}>
        This is <span>Banner Text</span>
      </h1>
      <p className={headerStyle.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
        quia velit, fugit ut earum eligendi molestiae unde modi delectus commodi
        nam accusantium dolore repellat, non, illum dolorum quis nemo! Numquam?
      </p>
    </div>
  );
};

export default Header;
