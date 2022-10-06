import React from "react";
import cls from "./main.module.scss";
import Logo from "../../assets/svg/logo.svg";
import {
  AboutMe,
  Links,
  Projects,
  Sidebar,
  Technologies,
} from "../../components";
import Face from "../../components/face";
interface MainProps {}

const Main: React.FC<MainProps> = () => (
  <div className={cls.main}>
    <Sidebar />
    <div className={cls.middle}>
      <div className={cls.rerr}>
        <div id="home" className={cls.section}>
          <div className={cls["logo-wrapper"]}>
            <img src={Logo} alt="" />
          </div>
          <Face />
        </div>
        <div id="about" className={cls.section}>
          <AboutMe />
        </div>
        <div className={cls.section}>
          <Technologies />
        </div>
        <div id="projects" className={cls.section}>
          <Projects />
        </div>
      </div>
    </div>
    <Links />
  </div>
);

export default Main;
