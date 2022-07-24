import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Signup from "./components/Signup";
import Success from "./components/Success";
import Todo from "./components/Todo";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";




function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App;