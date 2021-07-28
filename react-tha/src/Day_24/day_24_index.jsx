import "./day_24_style.css";
import { ReactDOM } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./day_24_component/Dashboard";
import About from "./day_24_component/About";
import Home from "./day_24_component/Home";
import Profile from "./day_24_component/Profile";


const Navbar = () => {
  return (
    <>
      <ul className="day24_navbar">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li> <Link to="/Day24/about">About</Link></li>
        <li> <Link to="/Day24/profile"> Profile</Link></li>
        <li> <Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </>
  );
};

const Day24App = () => {
  return (
    <>
      <Navbar />
      <div className="bodyOfDay24"></div>

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/Day24" exact component={Home} />
            <Route path="/Day24/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile"> <Profile /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Day24App;
