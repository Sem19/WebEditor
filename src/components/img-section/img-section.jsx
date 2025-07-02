import styles from "../side-menu/side-menu.module.css";

const ImgSection = ({ onChangeData }) => {
  return (
    <>
      <div className={styles.box}>
        <h2 className={styles.title}>Image</h2>
        <div style={{ display: "flex" }}>
          <h2 className={styles.title}>URL</h2>
          <input type="text" style={{ width: "100%" }}></input>
        </div>
      </div>
    </>
  );
};
export default ImgSection;
