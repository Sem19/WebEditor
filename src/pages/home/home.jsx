import Column from "../../components/column/column.jsx";
import Row from "../../components/row/row.jsx";
import SideMenu from "../../components/side-menu/side-menu.jsx";
import { useState } from "react";

const HomePage = () => {
  const [editorValue, setEditorValue] = useState({
    content: "text",
    text: "",
    align: "",
    imgURL: "",
  });
  const [rows, setRows] = useState([]);
  const [selected, setSelected] = useState({
    selectedRow: null,
    selectedColumn: null,
  });

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      columns: [
        { id: Date.now(), imgUrl: "", text: "Untilted", align: "left" },
      ],
    };

    setRows([...rows, newRow]);
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: Date.now(),
      imgUrl: "",
      text: "Untilted",
      align: "left",
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

  const handleRowSelect = (rowId, columnId) => {
    const isSameRow = rowId === selected.selectedRow;
    if (isSameRow) return;
    setSelected({
      selectedRow: rowId,
      selectedColumn: columnId,
    });
  };

  const handleColumnSelect = (e, rowId, columnId, column) => {
    e.stopPropagation();
    setSelected({
      selectedRow: rowId,
      selectedColumn: columnId,
    });
    setEditorValue({
      content: column.text ? "text" : "img",
      text: column.text,
      align: column.align,
      imgURL: column.imgURL,
    });
  };

  const onChangeData = (type, value) => {
    setEditorValue({ ...editorValue, [type]: value });
    if (type === "content") return;
    setRows(
      rows.map((row) =>
        row.id === selected.selectedRow
          ? {
              id: row.id,
              columns: row.columns.map((column) =>
                column.id === selected.selectedColumn
                  ? { ...column, [type]: value }
                  : column
              ),
            }
          : row
      )
    );
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
            onClick={() => handleRowSelect(row.id, row.columns[0].id)}
            selected={row.id === selected.selectedRow}
          >
            {row.columns.map((column) => (
              <Column
                key={column.id}
                selected={column.id === selected.selectedColumn}
                onClick={(e) =>
                  handleColumnSelect(e, row.id, column.id, column)
                }
              >
                <p style={{ textAlign: column.align }}>{column.text}</p>
              </Column>
            ))}
          </Row>
        ))}
      </div>
      <SideMenu
        editorValue={editorValue}
        handleAddRow={handleAddRow}
        handleAddColumn={handleAddColumn}
        onChangeData={onChangeData}
      />
    </div>
  );
};
export default HomePage;
