import Column from "../components/column/column.jsx";
import Row from "../components/row/row.jsx";
import animalIcon from "../assets/img/animal1.jpg";

const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
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
      <Row selected>
        <Column selected></Column>
        <Column selected></Column>
        <Column selected></Column>
      </Row>
      <Row selected>
        <Column selected></Column>
        <Column selected></Column>
        <Column selected></Column>
      </Row>
    </div>
  );
};
export default HomePage;
