import Column from "../components/column/column.jsx";
import Row from "../components/row/row.jsx";
import animalIcon from "../assets/img/animal1.jpg";
import SideMenu from "../components/side-menu/side-menu.jsx";
import { useState } from "react";

const HomePage = () => {
  const [editorValue, setEditorValue] = useState({ content: "img" });
  const [rows, setRows] = useState([
    { id: 1, colums: [{ id: 1, imgUrl: "", text: "" }] },
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
      <div className="stage">
        <Row selected>
          <Column selected>
            <p>Title</p>
            <img src={animalIcon} alt="animal" />
          </Column>
          <Column selected>
            <img src={animalIcon} alt="animal" />
          </Column>
          <Column selected>
            <img src={animalIcon} alt="animal" />
          </Column>
        </Row>

        <Row>
          <Column></Column>
          <Column></Column>
        </Row>
      </div>
      <SideMenu editorValue={editorValue} setEditorValue={setEditorValue} />
    </div>
  );
};
export default HomePage;
