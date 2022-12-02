import styles from "./Home.module.scss";
import ToggleChat from "../../component/ToggleChat"

function Home() {
  return (
    <div className={styles.container}>
      <ToggleChat/>
      <div className={styles.headerBanner}>
        <img
          className={styles.bannerImg}
          src="https://assets.engoo.com/assets/general/homepage/banner-9a563df50bd4d32b863d1c718c3f0e3a0c4a1dfb46f17b10a1f712ed937d006a.jpg"
          alt="background Banner"
        />
        <div className={styles.bannerBox}>
            <img src="https://assets.engoo.com/assets/general/homepage/banner-engoo-logo-3ab71fc51535c6837638effcdf547d46e3327824d817febcf55a5178d215ba98.svg"/>
            <h1 className={styles.bannerTtl}>
                IMPROVE<span className={styles.highlightWrap}>YOUR <span className={styles.highlight}>ENGLISH</span></span>
            </h1>
            <h2 className={styles.bannerSubTtl}>Anytime, anywhere</h2>
            <p className={styles.bannerText}>Start your 1-on-1 <span className={styles.highlightWrap}>25 Minute Lessons <span className={styles.highlight}>today!</span></span></p>
            <div className={styles.bannerButton}>
                <a>START WITH UP TO 51% OFF</a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
