import classNames from "classnames";
import styles from "../side-menu/side-menu.module.css";

import { ReactComponent as LeftIcon } from "../../assets/img/text-align-left.svg";
import { ReactComponent as RightIcon } from "../../assets/img/text-align-right.svg";
import { ReactComponent as CenterIcon } from "../../assets/img/text-align-center.svg";

const TextSection = () => {
  return (
    <>
      <div className={styles.box}>
        <h2 className={styles.title}>Text</h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.title}>Alignment</p>

          <div className={styles.wrapper}>
            <div className={classNames(styles.wrapper_item)}>
              <LeftIcon />
            </div>
            <div className={classNames(styles.wrapper_item)}>
              <CenterIcon />
            </div>
            <div className={classNames(styles.wrapper_item, styles.selected)}>
              <RightIcon />
            </div>
          </div>
        </div>
        <textarea placeholder="Enter text" rows={7}></textarea>
      </div>
    </>
  );
};
export default TextSection;
