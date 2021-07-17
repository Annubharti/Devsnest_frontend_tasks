import "../day_18_style.css"

const Card= (props) =>
{
    

    return (
     
         <div className="item">
            
             <h2 className="itemNameDay18">{props.itemName}</h2>
                { props.title > 50 ? 
                <i class="fa fa-times-circle fa-1x fa-pull-right fa-border" style= {{ fontSize:"40px", color:"red", backgroundColor:"white"  }}></i> :            
                <i class="fa fa-check-square fa-1x fa-pull-right fa-border" style= {{ fontSize:"40px", color:"white", backgoundColor: "white" }}></i>}    

                <p className="title"> You have consumed {props.title} calories.</p>

         

        </div>)

}
export default Card;