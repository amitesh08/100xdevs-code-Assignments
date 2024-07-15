import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [selectedId, setSelectedId] = useState(1)

  function button1(){
    setSelectedId(1)
  }

  function button2(){
    setSelectedId(2)
  }

  function button3(){
    setSelectedId(3)
  }

  function button4(){
    setSelectedId(4)
  }

  function button5(){
    setSelectedId(5)
  }

  return <div>
    <button onClick={button1}>1</button>
    <button onClick={button2}>2</button>
    <button onClick={button3}>3</button>
    <button onClick={button4}>4</button>
    <button onClick={button5}>5</button>
    <Todo id={selectedId} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
  }, [id])

  return <div>
    <h5>id:{id}</h5>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;