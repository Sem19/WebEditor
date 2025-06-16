import Column from "../components/column/column.jsx";
import Row from "../components/row/row.jsx";
import animalIcon from "../assets/img/animal1.jpg";
import SideMenu from "../components/side-menu/side-menu.jsx";

const HomePage = () => {
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
      <SideMenu />
    </div>
  );
};
export default HomePage;
