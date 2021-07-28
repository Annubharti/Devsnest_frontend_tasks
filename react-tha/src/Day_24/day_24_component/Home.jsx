import { useState } from "react"

// function ifLoggedIn(){
//     const [isLoggedIn, useIsLoggedIn]  = useState(false)

// }


const Home = () => {
    return (
    <>
    
    <h1>Home</h1>
    <br />
    <h2 className="day24Homeh2tag">If not logged in can't access, Profile and Dashboard</h2>

    <button className="day24LoginBtn"> Login </button>
    </>
    )
}

export default Home