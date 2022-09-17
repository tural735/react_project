import React from 'react'
import { useDispatch } from 'react-redux';
import { changeAuth } from '../../../features/auth/authSlice';

const Register = () => {
    const dispatch=useDispatch();
  return (
    <div className='auth__section__content__form'>
      <h1>Register</h1>
      <button onClick={()=>dispatch(changeAuth())}>Login</button>
    </div>
  )
}

export default Register
