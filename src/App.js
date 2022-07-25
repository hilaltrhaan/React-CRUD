import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Signup from "./components/Signup";
import Success from "./components/Success";
import Todo from "./components/Todo";
import TodoList from "./components/Todos"
import CreateTask from "./components/Todos/CreateTask";


import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";




function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
        <Route path='/todos' element={<TodoList />}></Route>
        <Route path='/createtodos' element={<CreateTask />}></Route>
      </Routes>
    </Router>
    
  )
}

export default App;