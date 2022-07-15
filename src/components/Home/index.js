import {React,useState} from 'react';
import {Link}  from 'react-router-dom';


import axios from 'axios';

function Home(){
  const [email,setEmail] = useState("")
  const [pass,setPass] =useState("")
 


  const handleLogin = () =>{
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((response)=>{
      response.data.forEach((user)=>{
        if(user.email === email && user.password ===pass){
          window.location.href ="/success";
        }
      });

    }).catch((err)=>{
      console.log(err)
    })
  }

  const handleUsername = (event) =>{
    setEmail(event.target.value);
  }

  const handlePass = (event)=>{
    setPass(event.target.value);
  }


  return (
    <>
    
      <form className='container'>
        <h3>Login</h3>
        <label>Email</label>
        <input type="email" name="email" onChange={handleUsername} />
        <label>Password</label>
        <input type="password" name="password" onChange={handlePass} />


        <Link className='login' to="/">
          <button onClick={handleLogin} type="submit" className='loginText'> Log in</button>
        </Link>

      </form>
      <Link className='create' to='/signup'>Create an account</Link>
    </>
  )

}

export default Home ;