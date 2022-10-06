import React from "react";
import Card from "../../assets/icons/card";
import Home from "../../assets/icons/home";
import Portfolio from "../../assets/icons/portfolio";
import Rgb from "../../assets/icons/rgb";

import cls from "./sidebar.module.scss";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => (
  <div className={cls.wrapper}>
    <a href="#home">{Home}</a>
    <a href="#about">{Card}</a>
    <a href="#projects">{Portfolio}</a>
    <div>{Rgb}</div>
    
  </div>
);

export default AboutMe;
