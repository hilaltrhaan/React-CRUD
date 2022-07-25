import React, { useEffect, useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios';
import TodosCard from '../TodosCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateTask from './CreateTask';

function TodoList(){
  const [modal,setModal]= useState(false);
  const [users,setUsers]= useState([]);
  const toggle = () => setModal(!modal);
  const [loading,setLoading] = useState(true);
  const [todoss,setTodoss]= useState([]);
  const loggedUserId =localStorage.getItem("userId");

  const getAllTodos = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/todos`).then((response) => {
      const temp = response.data.filter(todo => {
        return todo.userId === parseInt(loggedUserId)
      });
      setTodoss(temp);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }

  const getAllUser = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((response) => {
      setUsers(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  const saveTask = (taskObj) => {
    axios.post(`${process.env.REACT_APP_API_URL}/todos`, taskObj
    ).then((response) => {
      console.log(`${response.data.Name} başlıklı todo kaydedildi`)
    })
  }


  useEffect(() => {
    getAllUser();
    getAllTodos();
  }, []);


  return (
    loading ? <ThreeDots color="#00BFFF" height={80} width={80} /> :


      <div className="todos">
        <div className='header text-center'>
          <h2 className="sign">Todo List</h2>
          <button className='btn btn-primary' onClick={() => setModal(true)}>Create Task</button>
        </div>
        {todoss.map((obj) => (
          <TodosCard todoTitle={obj.Name} todoContent={obj.description} />
        ))}
        <CreateTask toggle={toggle} modal={modal} save={saveTask} users={users} />
      </div>


  )
}

export default TodoList;

