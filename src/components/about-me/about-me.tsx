import React from "react";

import cls from "./about-me.module.scss";
import Photo from "../../assets/images/img.jpeg";

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = () => (
  <div className={cls.wrapper}>
    <img src={Photo} alt="" />

    <div className={cls.info}>
      <h2 className={cls.title}>Asilbek Bekmurodov</h2>
      <p className={cls.paragraph}>
        i'm junior frontend developer. i work as a trainee for a two month for
        my mentor’s company. Whether you’re trying to find disciplined,
        hard-working and sociable worker, I could be one of the right cadre.
      </p>
    </div>
  </div>
);

export default AboutMe;
