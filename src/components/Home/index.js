import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import axios from 'axios';

function Home() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)



  const handleLogin = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((response) => {
      response.data.forEach((user) => {
        if (user.email === email && user.password === pass) {
    

          MySwal.fire({
            title: <strong>Successful Login</strong>,
            icon: 'success'
          })
          navigate("/success")
        }
      });

    }).catch((err) => {
      console.log(err)
    })
  }

  const handleUsername = (event) => {
    setEmail(event.target.value);
  }

  const handlePass = (event) => {
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

export default Home;