import CommonFooter from "../common_components/footer";
import React, { useState } from "react"
import Card from './components/Card';
import data from './data.json';

const Day20App=()=> {
  const [state,setState]=useState(data)
 
  return (
    <>
      <section className="foodCardDay20">{
          state.length > 0 ? state.map((food,id) => {
            return <Card state={state} setState={setState} food={food} key={id }/>
          }) : <h1>No more element left.</h1>
         } 
      </section>
      <CommonFooter />
  </>
  );
}

export default Day20App;