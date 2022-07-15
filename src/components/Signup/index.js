import {useFormik} from 'formik'
import axios from 'axios';
import validationSchema from '../validations'
import React from 'react'
import { Link } from 'react-router-dom';
function Signup() {
  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues:{
      email :'',
      password:'',
      passwordConfirm:''

    },

    onSubmit : values =>{
      console.log(values)
      axios.post(`${process.env.REACT_APP_API_URL}/users`,{
        "email" : values.email,
        "password" : values.password
      }).then((response)=>{
        console.log(`${response.data.email} email adresi için kayıt oluşturuldu`)
      }).catch((err)=>{
        console.log(err);

      });
    },
    validationSchema,


  })
  return (
    <div>
      <form className='container' onSubmit={handleSubmit}>
        <h3 className='sign'>Sign Up</h3>
        <label>Email</label>
        <input
        name='email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}

        />


      {errors.email && touched.email && (
        <div className='error'>
          {errors.email}
        </div>
      )}

        <label> Password</label>
        <input
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.password && touched.password && (
          <div className='error'>
            {errors.password}
          </div>
        )}

        <br />
        <br />

        <label> Confirm Password</label>
        <input
          type = 'password'
          name='passwordConfirm'
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className='error'>
            {errors.passwordConfirm}
          </div>
        )}

<button className='buton' type='submit' >Sign up</button>

      </form>

      <Link className='create' to='/'> Back to login</Link>
      
    </div>
  )
}

export default Signup;
