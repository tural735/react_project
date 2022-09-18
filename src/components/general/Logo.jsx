import React from 'react'
import CustomLogo from '../../assets/images/logo.svg';
import {useNavigate} from 'react-router-dom';
const Logo = () => {
    const navigate=useNavigate()
  return (
    <>
      <img className='logo' src={CustomLogo} alt="" onClick={()=> navigate('/')}/>
    </>
  )
}

export default Logo
