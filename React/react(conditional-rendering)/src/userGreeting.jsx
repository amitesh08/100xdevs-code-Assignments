import ProtoType from "prop-types"

function userGreeting(props){

    return ( props.isGreeting ? <h2 className="welcome">Welcome {props.username}</h2> : <h2 className="login">Please Log in</h2> )

}

userGreeting.prototype={
    isGreeting: ProtoType.bool,
    username: ProtoType.string
}
export default userGreeting
