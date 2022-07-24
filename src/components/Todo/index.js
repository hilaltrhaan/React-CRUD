import React, {useState,useEffect} from "react";



 function Todo(){
  const [todos,setTodos]= useState([]);
  const [newTodo,setNewTodo]=useState("");

  const saveData =(newTodos) =>{
    localStorage.setItem("todos",JSON.stringify(newTodos));
  } //value değerine erismek icin kullanılır

  useEffect(()=>{
    if(localStorage.getItem("todos")){
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  },[])

  //veri eklerken kullanılır.

  const onAddTodo = () => {
    if(newTodo.trim()) {
      let newTodos =[...todos, { todo:newTodo.trim(),id:Date.now()}];
      setTodos(newTodos);
      setNewTodo("")
      saveData(newTodos);

    }
  }

  const deleteTodo =(id)=>{
    let newTodos = todos.filter((todo)=> todo.id !== id);
    setTodos(newTodos)
    saveData(newTodos);
  }

  return(
    <div className="container">
      <h2>Todo List</h2>

      <table>
        <thead>
          <tr>
            <th>
              <input 
              type="text"
              id="todoInput"
              className="form-control"
              placeholder="add todo"
              value={newTodo}
              onChange={(e)=> setNewTodo(e.target.value)}
              />
            </th>

            <th>
              <button className="buton btn " onClick={onAddTodo}>{""} Add
              </button>  
            </th>
          </tr>
        </thead>
         <thead>
          <tr>
            <th scope="col">
              Task
            </th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody id="table">
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.todo}</td>
              <td>
                <button
                  className="loginText btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  {" "}
                  Delete{" "}
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>


      </table>

    </div>
  )




 }
export default Todo;