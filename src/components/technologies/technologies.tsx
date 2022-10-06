import React from "react";

import cls from "./technologies.module.scss";

import svg from "../../assets/svg/html.svg";
import svg1 from "../../assets/svg/css.svg";
import svg2 from "../../assets/svg/js.svg";
import svg3 from "../../assets/svg/ts.svg";
import svg4 from "../../assets/svg/react.svg";
import svg5 from "../../assets/svg/bootstrap.svg";
import svg6 from "../../assets/svg/ant.svg";
import svg7 from "../../assets/svg/git.svg";

interface TechnologiesItem {}

const items = [svg, svg1, svg2, svg3, svg4, svg5, svg6, svg7];

const Technologies: React.FC<TechnologiesItem> = () => (
  <div className={cls.wrapper}>
    <div className={cls.technologies}>
      <div className={cls.title}>Technologies</div>
      <div className={cls["technologies-box"]}>
        {items.map((item) => (
          <div className={cls.technology}>
            <img className={cls.img} src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Technologies;
