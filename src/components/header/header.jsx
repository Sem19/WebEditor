import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div></div>
      <div className={styles.acount}>
        <div>AcountName</div>
        <button className={styles.button}>LogOut</button>
      </div>
    </div>
  );
};

export default Header;
