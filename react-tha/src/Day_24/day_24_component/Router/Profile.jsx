"use Strict";
import React, { useContext } from "react";
import Context from "../../Context/AuthContext";
import { Route, Redirect } from "react-router-dom";

function Profile() {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        <h1 className="Day24h1">Profile : Private Route</h1>

        <div>
          {logger.loggedIn ? "Welcome to your Profile Page" : <Redirect to="/Day24" />}
        </div>
      </Route>
    </div>
  );
}

export default Profile;
