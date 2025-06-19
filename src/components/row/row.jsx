import styles from "./row.module.css";
import classNames from "classnames";

const Row = ({ selected, children, onClick }) => {
  return (
    <div
      className={classNames(styles.row, selected ? styles.selected : null)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Row;
