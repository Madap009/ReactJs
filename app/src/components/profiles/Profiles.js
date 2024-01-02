
function Profiles(props) {
  
    return(
    
        <div className="card">
        <img src={props.cardObj.img} className="card-img-top" ></img>
        <div className="card-body">
          <h5 className="card-title">{props.cardObj.title}</h5>
          <p className="card-text"> {props.cardObj.text}</p>
        </div>
        <i className="fa fa-quora" aria-hidden="true"></i>
      </div>
    )
 }
  
   


export default Profiles