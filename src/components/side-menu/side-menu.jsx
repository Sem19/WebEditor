import classNames from "classnames";
import styles from "./side-menu.module.css";
import TextSection from "../text-section/text-section.jsx";

import { ReactComponent as ImgIcon } from "../../assets/img/img-icon.svg";
import { ReactComponent as TextIcon } from "../../assets/img/text-icon.svg";
import ImgSection from "../img-section/img-section.jsx";

const SideMenu = ({
  handleAddRow,
  handleAddColumn,
  editorValue,
  onChangeData,
}) => {
  const { content, text, align } = editorValue;

  const handleTogleSection = (content) => onChangeData("content", content);

  return (
    <div className={classNames(styles.side_menu, "properties")}>
      <div className={styles.box}>
        <h2 className={styles.title}>Page</h2>
        <button className={styles.button} onClick={handleAddRow}>
          Add row
        </button>
      </div>

      <div className={styles.box}>
        <h2 className={styles.title}>Row</h2>
        <button className={styles.button} onClick={handleAddColumn}>
          Add column
        </button>
      </div>
      <div className={styles.box}>
        <h2 className={styles.title}>Column</h2>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className={styles.title}>Contents</p>

          <div className={styles.wrapper}>
            <div
              className={classNames(
                styles.wrapper_item,
                content == "img" ? styles.selected : null
              )}
              onClick={() => handleTogleSection("img")}
            >
              <ImgIcon />
            </div>
            <div
              className={classNames(
                styles.wrapper_item,
                content == "text" ? styles.selected : null
              )}
              onClick={() => handleTogleSection("text")}
            >
              <TextIcon />
            </div>
          </div>
        </div>
      </div>
      {content == "text" ? (
        <TextSection text={text} align={align} onChangeData={onChangeData} />
      ) : (
        <ImgSection onChangeData={onChangeData} />
      )}
    </div>
  );
};

export default SideMenu;
