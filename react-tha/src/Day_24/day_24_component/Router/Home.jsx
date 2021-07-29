import  React,{ useContext } from "react"
import Context from "../../Context/AuthContext"

function Home(){
    const logger = useContext(Context)
    return (
<div> 

    
    <h1 className="Day24h1">Home</h1>
    <h3> Login to access Dashboard and Profile </h3>
   {
   logger.loading?"Loading...":
   logger.loggedIn?
   <button  className="day24LoginBtn" onClick={logger.logout}>Logout</button>:

    <button  className="day24LoginBtn" onClick={logger.login}>Login</button>
   }

    </div>
    )
}

export default Home