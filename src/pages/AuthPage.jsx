import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../components/auth/login/Login'
import Register from '../components/auth/register/Register'

const RegisterPage = () => {
  const {register}=useSelector(state=>state.auth);
  return (
    <div className='container'>
        <div className="auth__section">
            <div className='auth__section__content'>
              {register ? (
                  <Login/>
              ):(
                  <Register/>
              )}
            </div>
        </div>
    </div>
  )
}

export default RegisterPage
