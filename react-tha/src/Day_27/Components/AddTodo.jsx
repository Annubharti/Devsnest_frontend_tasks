import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="day27_todo_item">
      <input
        type="text"
        placeholder="Add  a Todo..."
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addItem(item));
          setItem("");
        }}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;
