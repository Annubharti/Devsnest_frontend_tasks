
import React,{useContext} from 'react';
import Context  from '../../Context/AuthContext';

import {
        Route,
        Redirect
    } from 'react-router-dom'


function Dashboard () {
    const logger = useContext(Context)
     return (
         <div>
     <h1>Dashboard : Private Route</h1>
     <Route>
         {
         logger.loggedIn?"Welcome to Devsnest":<Redirect to="/Day24"/>
         }
     </Route>
     </div>
     )
 }

 export default Dashboard