import Card from "./Card";
import "../day_18_style.css"

function FoodApp() {
 
    return (
      <div className="App">
        <header> Calorie Read Only</header>
        <div className="scrollable">
        <div className= "foodCard">
        <Card itemName="Pizza"     title="56"/>
        <Card itemName="Burger"    title="49"/>
        <Card itemName="Coke"      title="50"/>
        <Card itemName="Browne"    title="18"/>
        <Card itemName="Fried Rice"title="90" />
        <Card itemName="Lassania"  title="200" />
        <Card itemName="Pani Puri" title="10" />
  
      </div>
      </div>
      </div>
    );
  }
  
  export default FoodApp;