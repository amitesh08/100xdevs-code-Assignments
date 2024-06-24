import profilePic from "../assets/batmanLogo.jpg"

function Card(props){

    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" className="image" />
            <h2 className="name">{props.name} </h2>
            <p className="description">{props.description}</p>
        </div>
    ) 
}


export default Card