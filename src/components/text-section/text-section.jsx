import classNames from "classnames";
import styles from "../side-menu/side-menu.module.css";

import { ReactComponent as LeftIcon } from "../../assets/img/text-align-left.svg";
import { ReactComponent as RightIcon } from "../../assets/img/text-align-right.svg";
import { ReactComponent as CenterIcon } from "../../assets/img/text-align-center.svg";
import { useState } from "react";

const TextSection = () => {
  const [alignment, setAlignment] = useState("center");

  const HandleAligment = (align) => {};
  return (
    <>
      <div className={styles.box}>
        <h2 className={styles.title}>Text</h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.title}>Alignment</p>

          <div className={styles.wrapper}>
            <div
              className={classNames(
                styles.wrapper_item,
                alignment == "left" ? styles.selected : null
              )}
              onClick={() => setAlignment("left")}
            >
              <LeftIcon />
            </div>
            <div
              className={classNames(
                styles.wrapper_item,
                alignment == "center" ? styles.selected : null
              )}
              onClick={() => setAlignment("center")}
            >
              <CenterIcon />
            </div>
            <div
              className={classNames(
                styles.wrapper_item,
                alignment == "right" ? styles.selected : null
              )}
              onClick={() => setAlignment("right")}
            >
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
