import classNames from "classnames";
import styles from "./column.module.css";
const Column = ({ selected, children, onClick }) => {
  return (
    <div
      className={classNames(styles.column, selected ? styles.selected : null)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default Column;
