import React from "react";
import ReactDOM  from "react-dom";
import "./style.css"
import Days from "./Days"
import Day15App from "./Day_15/index"
import Day16App from "./Day_16/index";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


const Header = () =>{
    return <header>React THAs</header>
}

ReactDOM.render(
    <Router>
<div>
    <Header />  
    <hr />
    <Switch>
        <Route exact path="/"> <Days /></Route>
        <Route path="/Day15"><Day15App /></Route>
        <Route path="/Day16"><Day16App /></Route>

        
    </Switch>
    
</div>
</Router>

, document.getElementById("root"))


