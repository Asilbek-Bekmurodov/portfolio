import React from "react";
import Logo from "../../assets/svg/logo.svg";

import cls from "./nav.module.scss";

interface NavProps {}

const Nav: React.FC<NavProps> = () => (
  <div className={cls.nav}>
    <img src={Logo} alt="" />
  </div>
);

export default Nav;
