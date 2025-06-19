import Column from "../../components/column/column.jsx";
import Row from "../../components/row/row.jsx";
import SideMenu from "../../components/side-menu/side-menu.jsx";
import { useState } from "react";

const HomePage = () => {
  const [editorValue, setEditorValue] = useState({ content: "img" });
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState({
    selectedRow: null,
    selectedColumn: null,
  });

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      columns: [{ id: Date.now(), imgUrl: "", text: "Untilted" }],
    };

    setRows([...rows, newRow]);
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: Date.now(),
      imgUrl: "",
      text: "Untilted",
    };

    setRows(
      rows.map((row) =>
        row.id === selected.selectedRow
          ? { id: row.id, columns: [...row.columns, newColumn] }
          : row
      )
    );
    setSelected({
      ...selected,
      selectedColumn: newColumn.id,
    });
  };

  const handleSelect = (rowId, columnId) => {
    const isSameRow = rowId === selected.selectedRow;
    if (isSameRow) return;
    setSelected({
      selectedRow: rowId,
      selectedColumn: columnId,
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplate: `"stage properties" auto / auto 240px`,
      }}
    >
      <div className="stage" style={{ paddingTop: "20px" }}>
        {rows.map((row) => (
          <Row
            key={row.id}
            onClick={() => handleSelect(row.id, row.columns[0].id)}
            selected={row.id === selected.selectedRow}
          >
            {row.columns.map((column) => (
              <Column
                key={column.id}
                selected={column.id === selected.selectedColumn}
              >
                <p>{column.text}</p>
              </Column>
            ))}
          </Row>
        ))}
      </div>
      <SideMenu
        editorValue={editorValue}
        handleAddRow={handleAddRow}
        handleAddColumn={handleAddColumn}
        setEditorValue={setEditorValue}
      />
    </div>
  );
};
export default HomePage;
