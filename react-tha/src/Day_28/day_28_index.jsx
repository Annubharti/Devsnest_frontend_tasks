import 'bootstrap/dist/css/bootstrap.min.css'
import './day_28_style.css';
import {useState,useEffect} from "react"


function Day28App() {
  const [place,setplace]=useState("");
  const[placeData,setPlaceData]=useState({})  
  const updatePlaceData=()=>{
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=c3466e82919f495f862161527210708&q=${place}`)
    .then(res=>res.json())
    .then((data)=>{
      setPlaceData(data)
    })
  };

  return (
    <div className="Day28App">
      <div className="container">
        <h1 className="day28_heading"> Weather App</h1>
        
          <div className="col-12 form ">
          
            <input type="text"
             value={place}
             placeholder="City Name" 
             onChange={(e)=>
            setplace(e.target.value)}
            />
            <button className="day28_btn" onClick={updatePlaceData}>
                Submit
            </button>
            </div>
            <div className="offset-md-4 col-12 col-md-4 weather">
              <div className="day_28_card card">
                {placeData.location?(
                  <div>
                    <img src={placeData.current.condition.icon} alt=""/>
                    <div className="temp">{placeData.current.temp_c}°<sup>C</sup></div>
                    <div className="desc">{placeData.current.condition.text}</div>
                    <div className="place">{placeData.location.name}</div>
                   <div className="container">
                     <div className="row whp">
                       <div className="col">
                         <div className="title">Wind now</div>
                         <div className="data">
                           {placeData.current.wind_kph}<span className="unit">%</span>
                       </div>
                       </div>
                       <div className="col">  
                         <div className="title">Humidity</div>
                         <div className="data">
                           {placeData.current.humidity} <span className="unit">%</span>
                         </div>
                       </div>
                       <div className="col">
                          <div className="title">Precipitation</div>
                         <div className="data">
                           {placeData.current.precip_in} <span className="unit">%</span>
                         </div></div>
                     </div>
                   </div>
                    </div>
                ):(<h2>Place Not found</h2>)
                }
              </div>
            </div>
          </div>
        </div>

       );
}

export default Day28App;
  