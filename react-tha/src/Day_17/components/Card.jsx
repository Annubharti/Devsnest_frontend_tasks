import "../day_17_style.css"

const Card= (props) =>
{
    

    return (
     
         <div className="item">
             <h2 className="itemName"> <u>{props.itemName}</u></h2>

             <p className="title"> You have consumed {props.title} calories.</p>
        

        </div>)

}
export default Card;