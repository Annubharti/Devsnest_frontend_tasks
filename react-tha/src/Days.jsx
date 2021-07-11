import { Link } from 'react-router-dom';


const Header = () =>{
    return <header>React THAs</header>
}

function Days(){
    
    return  (<div>
          <Header /> 
          <hr /> 
          <ul>
        <li><h1><Link to="./Day15">Day 15</Link></h1> </li>
        <li><h1><Link to="./Day16">Day 16</Link></h1> </li>
        <li> <h1><Link to="./Day17">Day 17</Link></h1> </li>
        <li> <h1><Link to="./Day18">Day 18</Link></h1> </li>
        <li> <h1><Link to="./Day19">Day 19</Link></h1> </li>
        </ul>    
    

    </div>)
   
}

export default Days;