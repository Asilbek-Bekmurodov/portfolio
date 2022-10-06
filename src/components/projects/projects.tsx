import React from "react";

import cls from "./projects.module.scss";

import project1 from "../../assets/svg/project1.svg";
import project2 from "../../assets/svg/project2.svg";
import project3 from "../../assets/svg/project3.svg";
import project4 from "../../assets/svg/project4.svg";

interface projectsItem {}

const items = [project1, project2, project3, project4];

const Projects: React.FC<projectsItem> = () => (
  <div className={cls.wrapper}>
    <div className={cls.projects}>
      <div className={cls.title}>Projects</div>
      <div className={cls["projects-box"]}>
        {items.map((item) => (
          <div className={cls.technology}>
            <img className={cls.img} src={item} alt="" />
          </div>
        ))}
      </div>
      <p className={cls.see}>see more</p>
    </div>
  </div>
);

export default Projects;
