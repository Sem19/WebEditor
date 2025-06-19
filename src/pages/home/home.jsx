import Column from "../../components/column/column.jsx";
import Row from "../../components/row/row.jsx";
import animalIcon from "../../assets/img/download.jpg";
import SideMenu from "../../components/side-menu/side-menu.jsx";
import { useState } from "react";
import styles from "./home.module.css";

const HomePage = () => {
  const [editorValue, setEditorValue] = useState({ content: "img" });
  const [rows, setRows] = useState([
    // {
    //   id: 1,
    //   bordName: "Untitled",
    //   colums: [{ id: 1, imgUrl: "", text: "ColumnText" }],
    // },
  ]);

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
          <Row key={raw.id} selected>
            {raw.colums.map((column) => (
              <Column key={column.id} selected>
                <p>{column.text}</p>
              </Column>
            ))}
          </Row>
        ))}
      </div>
      <SideMenu
        editorValue={editorValue}
        setEditorValue={setEditorValue}
        setRows={setRows}
      />
    </div>
  );
};
export default HomePage;
