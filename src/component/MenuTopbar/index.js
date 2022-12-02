import styles from "./MenuTopbar.module.scss";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


function MenuTopbar() {
  const [contactValue, setContactValue] = useState(false);
  return (
    <ul className={styles.menu}>
      <li className={styles.menuItem}>Materials</li>
      <li className={styles.menuItem}>Our Tutors</li>
      <li className={styles.menuItem}>Blog</li>
      <li className={styles.menuItem}>Plans & Prices</li>
      <li className={contactValue ? styles.menuItem1Active : styles.menuItem1} onClick={() => setContactValue(!contactValue)}>
        Contact us
        <img src="https://assets.engoo.com/assets/general/shared/icons/icon-nav-caret-5df54a32721660a1a7adb35d24ded72f648f6c71384f7555156e442bdd4a5133.svg" />
        {contactValue && <ul className={styles.menuContact}>
          <li className={styles.menuContactItem}>Contact us</li>
          <li className={styles.menuContactItem}>Corporate</li>
        </ul>}
      </li>
      <li className={styles.menuItem}>FAQ</li>
      <li className={styles.menuItem}>Log In</li>
    </ul>
  );
}

export default MenuTopbar;
