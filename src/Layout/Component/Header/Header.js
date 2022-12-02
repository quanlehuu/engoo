import { useState } from "react";
import { Link } from "react-router-dom";
import MenuTopbar from "../MenuTopbar";
import MenuTopbarMobile from "../MenuTopbarMobile";
import styles from "./Header.module.scss";

function Header() {
  const [showMenuMobile, setShowMenuMobile] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
            <span className={showMenuMobile? styles.menuListItemActive : styles.menuListItem} onClick={()=> setShowMenuMobile(!showMenuMobile)}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
              >
                  <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
              </svg>
            </span>
            <Link className={styles.menuLogo} to={"/"}><img src="https://assets.engoo.com/assets/shared/logo-afcf5bc87590b094c82dc99d288534c33b9543fca5dd57493426d6ad997ccaf1.svg" /></Link>
        </div>
        <div className={styles.menuTopbar}>
            <MenuTopbar />
            <div className={styles.registerBtn}>
            <Link to={"/register"} className={styles.registerItemBtn}>
                Register
            </Link>
            </div>
        </div>
      </div>
      {showMenuMobile &&
        <div className={styles.mobileMenu}>
        <MenuTopbarMobile/>
      </div>
      }
    </div>
  );
}

export default Header;
