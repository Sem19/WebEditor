import classNames from "classnames";
import styles from "./column.module.css";
const Column = ({ selected, children }) => {
  return (
    <div
      className={classNames(styles.column, selected ? styles.selected : null)}
    >
      {children}
    </div>
  );
};
export default Column;
