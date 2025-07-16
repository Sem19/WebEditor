import classNames from "classnames";
import styles from "../side-menu/side-menu.module.css";

import { ReactComponent as LeftIcon } from "../../assets/img/text-align-left.svg";
import { ReactComponent as RightIcon } from "../../assets/img/text-align-right.svg";
import { ReactComponent as CenterIcon } from "../../assets/img/text-align-center.svg";

const TextSection = ({ text, align, onChangeData }) => {
  return (
    <>
      <div className={styles.box}>
        <h2 className={styles.title}>Text</h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.title}>Alignment</p>

          <div className={styles.wrapper}>
            <div
              data
              className={classNames(
                styles.wrapper_item,
                align == "left" ? styles.selected : null
              )}
              onClick={() => onChangeData("align", "left")}
            >
              <LeftIcon />
            </div>
            <div
              className={classNames(
                styles.wrapper_item,
                align == "center" ? styles.selected : null
              )}
              onClick={() => onChangeData("align", "center")}
            >
              <CenterIcon />
            </div>
            <div
              className={classNames(
                styles.wrapper_item,
                align == "right" ? styles.selected : null
              )}
              onClick={() => onChangeData("align", "right")}
            >
              <RightIcon />
            </div>
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => onChangeData("text", e.target.value)}
          placeholder="Enter text"
          rows={7}
        ></textarea>
      </div>
    </>
  );
};
export default TextSection;
