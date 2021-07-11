import { useState } from "react"
import "../day_19_style.css"

const Button3 = () => {
let [value,  setValue] = useState(0)

let handleClick = () => {
    setValue( (previousCount) =>{
        return previousCount + 1
    })
}

    return (
        <button className="btn" onClick = {handleClick} >{value}</button>
    )
}

export default Button3