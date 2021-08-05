import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFirstNameInput,updateLastNameInput } from '../redux/userForm/UserFormActions';
const Form =()=>{
    const FirstName=useSelector((state=>state.firstName));
    const  LastName=useSelector((state=>state.lastName));
    const dispatch=useDispatch()

    return (
        <div>
            <form action="" className="day_26_form">
                <span>FirstName:{'    '}</span>
                <input type="text" 
                value={FirstName}
                onChange={(e)=>dispatch(updateFirstNameInput(e.target.value))} />
                <br />
                <br />
                <span>LastName:{'    '}</span>
                <input type="text" 
                value={LastName}
                onChange={(e)=>dispatch(updateLastNameInput(e.target.value))}/>

            </form>
        <div className="showOutput">

        <br />
            <hr />
            <br />
            <h2>Show Input Item</h2>

<p>FirstName:{" " +FirstName}</p>
<p>LastName :{" " +LastName}</p>
</div>
</div>
    )
}
export default Form