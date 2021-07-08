import React from "react";
import ReactDOM  from "react-dom";
import "./style.css"

function Day15App(){
    
    return  (<div>
        <h1>Hello World!</h1> <hr />
        <p>This was the task of Day 15.
          <br/>
          <br></br>
           Here concept of import, export, render is used. 
        </p>
      </div>)
   
}


ReactDOM.render(<Day15App />, document.getElementById("root"))

export default Day15App;