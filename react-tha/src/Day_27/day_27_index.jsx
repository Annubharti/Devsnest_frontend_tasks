import './day_27_style.css';
import  AddTodo from "./Components/AddTodo"
import ListTodo from './Components/ListTodo';


function Index() {
  return (
    <div className="Day_27_App">
      <h1> Todo List</h1>
      <AddTodo/>
      <ListTodo/>
     
    </div>
  );
}

export default Index;