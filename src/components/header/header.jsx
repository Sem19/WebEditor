import styles from "./header.module.css";

const Header = ({ user, logOut }) => {
  return (
    <div className={styles.header}>
      <div></div>
      <div className={styles.acount}>
        <h2>AcountName: {user?.name}</h2>
        <button onClick={logOut} className={styles.button}>
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Header;
