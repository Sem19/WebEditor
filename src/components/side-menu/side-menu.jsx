import classNames from "classnames";
import styles from "./side-menu.module.css";
import TextSection from "../text-section/text-section.jsx";

import { ReactComponent as ImgIcon } from "../../assets/img/img-icon.svg";
import { ReactComponent as TextIcon } from "../../assets/img/text-icon.svg";
import ImgSection from "../img-section/img-section.jsx";

const SideMenu = () => {
  return (
    <div className={classNames(styles.side_menu, "properties")}>
      <div className={styles.box}>
        <h2 className={styles.title}>Page</h2>
        <button className={styles.button}>Add row</button>
      </div>

      <div className={styles.box}>
        <h2 className={styles.title}>Row</h2>
        <button className={styles.button}>Add column</button>
      </div>
      <div className={styles.box}>
        <h2 className={styles.title}>Column</h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.title}>Contents</p>

          <div className={styles.wrapper}>
            <div className={classNames(styles.wrapper_item)}>
              <ImgIcon />
            </div>
            <div className={classNames(styles.wrapper_item, styles.selected)}>
              <TextIcon />
            </div>
          </div>
        </div>
      </div>
      <TextSection />
      <ImgSection />
    </div>
  );
};

export default SideMenu;
