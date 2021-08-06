import { useDispatch,useSelector } from "react-redux"
import { removeItem } from "../actions";
const ListTodo =()=>{
    const dispatch=useDispatch()
    const todos=useSelector((state)=>state.todo);
    return(
        <div className="day27_todolist">
            {todos.map((todo,index)=>(
                <div key={index} className="day27_todo_list_item">
            <span>{todo}</span>
            <button  className="day27_deleteBtn  float-right" onClick={()=>{
                dispatch(removeItem(index))
            }}>Delete</button>
        </div>))}
        </div>
    )
}
export default ListTodo