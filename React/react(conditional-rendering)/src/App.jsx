//conditional rendering : allows you to control what's get rendered in your application 
//                        based on certain conditions ( show, hide or change components).

import UserGreeting from "./userGreeting"

function App() {
  

  return (
    <>
      <UserGreeting isGreeting = {true} username = "amitesh" />
    </>
  )
}
export default App
