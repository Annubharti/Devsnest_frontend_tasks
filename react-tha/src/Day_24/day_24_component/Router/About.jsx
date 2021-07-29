import { useContext } from "react"
import Context from "../../Context/AuthContext"

 const About = () => {

const logger = useContext(Context)
     return (<>

     <h1>About : Public Route</h1>
     <div>{logger.loggedIn? "You are Logged in " : "You are Logged out"}</div>
     </>
     )
 }

 export default About