import Column from "../../components/column/column.jsx";
import Row from "../../components/row/row.jsx";
import SideMenu from "../../components/side-menu/side-menu.jsx";
import { useState } from "react";

const HomePage = () => {
  const [editorValue, setEditorValue] = useState({ content: "img" });
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      columns: [{ id: Date.now(), imgUrl: "", text: "Untilted" }],
    };

    setRows([...rows, newRow]);
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
        {rows.map((raw) => (
          <Row key={raw.id}>
            {raw.columns.map((column) => (
              <Column key={column.id}>
                <p>{column.text}</p>
              </Column>
            ))}
          </Row>
        ))}
      </div>
      <SideMenu
        editorValue={editorValue}
        handleAddRow={handleAddRow}
        setEditorValue={setEditorValue}
      />
    </div>
  );
};
export default HomePage;
