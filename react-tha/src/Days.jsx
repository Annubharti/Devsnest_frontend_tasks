import { Link } from 'react-router-dom';


const Header = () =>{
    return <header>React Take Home Assignments (THAs)</header>
}

const iconStyle = {
    color:"white",
    fontSize:"40px", 
    textDecoration: "none",
    margin: "4px",
    padding: "10px"
}

function Days(){
    
    return  (<div>
          <Header /> 
          <hr /> 
          <ul>
        <li><h1 className="day"><Link to="./Day15">Day 15</Link></h1> </li>
        <li><h1  className="day"><Link to="./Day16">Day 16</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day17">Day 17</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day18">Day 18</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day19">Day 19</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day20">Day 20</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day21">Day 21</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day22">Day 22</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day24">Day 24</Link></h1> </li>


        
        </ul>  
        <footer className="footer">
            <img src="https://www.devsnest.in/static/media/logo.f1b45387.jpg" align="left" className= "logo" alt="logo" />
            <span><h2 className="madeBy">Made By -<br /> Annu Bharti</h2></span>
            <a href="https://github.com/Annubharti/Devsnest_frontend_tasks"> <i className="fa fa-github-square" style={iconStyle} /> </a>
            <a href="https://www.linkedin.com/in/annu-bharti-6a60bb158/"> <i className="fa fa-linkedin-square" style={iconStyle} /></a>
            <a href="https://twitter.com/AnnuBha92018769"><i className="fa fa-twitter-square" style={iconStyle} /></a>

         </footer>  
    

    </div>)
   
}

export default Days;