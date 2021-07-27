import React from "react";
import ReactDOM  from "react-dom";
import "./style.css"
import Days from "./Days"
import Day15App from "./Day_15/day_15_index"
import Day16App from "./Day_16/day_16_index";
import Day17App from "./Day_17/day_17_index";
import Day18App from "./Day_18/day_18_index";
import Day19App from "./Day_19/day_19_index";
import Day20App from "./Day_20/day_20_index";
import Day21App from "./Day21/day_21_index";
import Day22App from "./Day_22/index"
import Day24App from "./Day_24/day_24_index";




import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';




ReactDOM.render(
    <Router>
<div>
  
    <hr />
    <Switch>
        <Route exact path="/"> <Days /></Route>
        <Route path = "./"></Route>
        <Route path="/Day15"> < Day15App /> </Route>
        <Route path="/Day16"> <Day16App /> </Route>
        <Route path="/Day17"> <Day17App /> </Route>
        <Route path="/Day18"> <Day18App /> </Route>
        <Route path="/Day19"> <Day19App /> </Route>
        <Route path="/Day20"> <Day20App /> </Route>
        <Route path="/Day21"> <Day21App /> </Route>
        <Route path="/Day22"> <Day22App /></Route>
        <Route path="/Day24"> <Day24App /></Route>







    </Switch>
    
</div>
</Router>

, document.getElementById("root"))


