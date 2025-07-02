import { useState } from "react";

export const useEditor = (rows, setRows, { selectedRow, selectedColumn }) => {
  const [editorValue, setEditorValue] = useState({
    content: "text",
    text: "",
    align: "",
    imgURL: "",
  });

  const onChangeData = (type, value) => {
    setEditorValue({ ...editorValue, [type]: value });
    if (type === "content") return;

    setRows(
      rows.map((row) =>
        row.id === selectedRow
          ? {
              id: row.id,
              columns: row.columns.map((column) =>
                column.id === selectedColumn
                  ? { ...column, [type]: value }
                  : column
              ),
            }
          : row
      )
    );
  };

  return { editorValue, setEditorValue, onChangeData };
};

const NEW_COLUMN = { imgUrl: "", text: "Untilted", align: "left" };

export const useRows = ({ selectedRow }, setSelected) => {
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    const newColumn = {
      id: Date.now(),
      ...NEW_COLUMN,
    };

    const newRow = {
      id: Date.now(),
      columns: [newColumn],
    };
    setRows([...rows, newRow]);
  };

  const handleAddColumn = () => {
    const newColumn = {
      id: Date.now(),
      ...NEW_COLUMN,
    };

    setRows(
      rows.map((row) =>
        row.id === selectedRow
          ? { id: row.id, columns: [...row.columns, newColumn] }
          : row
      )
    );
    setSelected({
      selectedRow,
      selectedColumn: newColumn.id,
    });
  };

  return { rows, setRows, handleAddRow, handleAddColumn };
};
