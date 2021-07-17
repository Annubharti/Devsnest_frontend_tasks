import Card from "./Card";
import "../day_17_style.css"

function FoodApp() {
 
    return (
      <div className="App">
        <header> Calorie Read Only</header>
        <div className="scrollable">
        <div className= "foodCardDay_17">
        <Card itemName="Pizza"     title="56"/>
        <Card itemName="Burger"    title="69"/>
        <Card itemName="Coke"      title="500"/>
        <Card itemName="Browne"    title="180"/>
        <Card itemName="Fried Rice"title="90" />
        <Card itemName="Lassania"  title="200" />
        <Card itemName="Pani Puri" title="10" />
  
      </div>
      </div>
      </div>
    );
  }
  
  export default FoodApp;