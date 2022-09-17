import React from 'react'
import Logo from '../../assets/images/logo.svg';
import {Link,useNavigate} from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate()
  return (
    <header>
      <div className="container header">
        <img className='logo' src={Logo} alt="" onClick={()=> navigate('/')}/>
        <Link to="/register" className='auth'>Login/Register</Link>
      </div>
    </header>
  ) 
}

export default Header
