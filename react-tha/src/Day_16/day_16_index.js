import Card from "./components/Card";
import Box from "./components/Box";
import "./day_16_style.css";

function Day16App() {
  return (
    <div className="container">
      <div className="cardContainer">
        <Card />
      </div>
      <div className="boxContainer">
        <Box />
      </div>
    </div>
  );
}

export default Day16App;
