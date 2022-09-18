import React from 'react'

import {Link} from 'react-router-dom';
import Logo from './Logo';
const Header = () => {
  return (
    <header>
      <div className="container header">
        <Logo/>
        <Link to="/register" className='auth'>Login/Register</Link>
      </div>
    </header>
  ) 
}

export default Header
