import React from "react";
import styles from "./index.module.less";
import HeroSvg from "@site/static/svg/hero.svg";

const Introduction = () => {
  return (
    <div className={styles.introduction}>
      <div className={styles.introductionCon}>
        <div className={styles.introductionConGreet}>
          你好！我是{" "}
          <span
            className={styles.name}
            onMouseMove={(e) => {
              const bounding = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.backgroundPositionX = `${
                e.clientX - bounding.x - 150
              }px`;
              e.currentTarget.style.backgroundPositionY = `${
                e.clientY - bounding.y - 150
              }px`;
            }}
          >
            白开水
          </span>
        </div>
        <div className={styles.introductionConDesc}>
          在这里我会分享一些在我日常开发中遇到的问题，或者在我日常学习中记录的一些笔记，希望我的博客会对你有所帮助!
        </div>
        <div className={styles.introductionConLink}>
          <a href="/baikaishui-blog/about">自我介绍</a>
        </div>
      </div>
      <div className={styles.hero}>
        <HeroSvg />
        <div className={styles.heroBg} />
      </div>
    </div>
  );
};

export default Introduction;
