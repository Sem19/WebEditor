import styles from "./row.module.css";
import classNames from "classnames";

const Row = ({ selected, children }) => {
  return (
    <div className={classNames(styles.row, selected ? styles.selected : null)}>
      {children}
    </div>
  );
};

export default Row;
