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
    
    return  (<>
          <Header /> 
          <ul>
        <li><h1 className="day"><Link to="./Day15">Day 15</Link></h1> </li>
        <li><h1  className="day"><Link to="./Day16">Day 16</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day17">Day 17</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day18">Day 18</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day19">Day 19</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day20">Day 20</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day21">Day 21</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day22">Day 22</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day23">Day 23</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day24">Day 24</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day25">Day 25</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day26">Day 26</Link></h1> </li>
        <li> <h1  className="day"><Link to="./Day27">Day 27</Link></h1> </li>




        
        </ul>  
        <footer className="footer">
            <img src="https://www.devsnest.in/static/media/logo.f1b45387.jpg" align="left" className= "logo" alt="logo" />
            <span><h2 className="madeBy">Made By - Annu Bharti</h2></span>
            <a href="https://github.com/Annubharti/Devsnest_frontend_tasks"> <i className="fa fa-github-square" style={iconStyle} /> </a>
            <a href="https://www.linkedin.com/in/annu-bharti-6a60bb158/"> <i className="fa fa-linkedin-square" style={iconStyle} /></a>
            <a href="https://twitter.com/AnnuBha92018769"><i className="fa fa-twitter-square" style={iconStyle} /></a>
            <a href="mailto:annu17@navgurukul.com"><i className="fa fa-envelope-square" style={iconStyle} /></a>
         </footer>  
    

    </>)
   
}

export default Days;