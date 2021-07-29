import "./day_24_style.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./day_24_component/Router/Dashboard";
import About from "./day_24_component/Router/About";
import Home from "./day_24_component/Router/Home";
import Profile from "./day_24_component/Router/Profile";
import { AuthContext } from "./Context/AuthContext";

const Navbar = () => {
  return (
    <>
      <ul className="day24_navbar">
        <li>
          <Link to="/Day24">Home</Link>
        </li>
        <li>
          
          <Link to="/Day24/about">About</Link>
        </li>
        <li>
          
          <Link to="/Day24/profile">Profile</Link>
        </li>
        <li>
          <Link to="/Day24/dashboard">Dashboard</Link>
        </li>
      </ul>
    </>
  );
};

const Day24App = () => {
  return (
    <>
      

      <BrowserRouter>
      <Navbar />
      <div className="bodyOfDay24"></div>
        <Switch>
          <AuthContext>
          <Route exact path="/Day24"><Home /></Route>
          <Route exact path="/Day24/about/"><About /></Route>
          <Route path="/Day24/dashboard"><Dashboard /></Route>
          <Route path="/Day24/profile/"><Profile /></Route>
  
          </AuthContext>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Day24App;
