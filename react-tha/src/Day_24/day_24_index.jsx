import "./day_24_style.css"

const Navbar = () => {
  return (
      <>
    <ul className="day24_navbar">
      <li> Home</li>
      <li>About</li>
      <li>Profile</li>
      <li>Dashboard</li>
    </ul>
    </>
  );
};


const Day24App = () => {
  return ( <>
  <Navbar />
  </>
  )
};

export default Day24App
