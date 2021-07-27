import './day_21_style.css'
import { useState } from 'react';



const Day21App = ({ addEntry }) => {
  
    const [food, setFood] = useState("");
    const [cal, setCal] = useState("");
    console.log(food, cal);
  


  
  return (
    <div className="App">
      <form>
        
  <input type="text" className="foodItem" placeholder="Item Name" name="foodName" onChange={(e) => setFood(e.target.value)} />
  <input type="number" className="calorie" placeholder="Calorie Amount" name="calorieAmount" onChange={(e) => setCal(e.target.value)}/>
  <br /> 
  <button className="add" type="submit"  variant="contained" color="primary" onClick={() => addEntry(food, cal)}>Add Item</button>

<br />
  </form>


  <h1> Start Adding Items</h1>
      </div>
  )
}

  export default Day21App;
