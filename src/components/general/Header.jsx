import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {Link} from 'react-router-dom';
import { changePage } from '../../features/allUser/allUserSlice';
import { logoutUser } from '../../features/auth/authSlice';
import Logo from './Logo';
const Header = () => {
  const dispatch=useDispatch();
  const { user } = useSelector((store) => store.auth);
  return (
    <header>
      <div className="container header">
        <Logo/>
        {user ? (
          <div className='authenticated'>
              <Link to="/profile" onClick={()=>dispatch(changePage(1))} className='link'>Profile</Link>
              <button className='logout' onClick={()=>dispatch(logoutUser())}>Logout</button>
          </div>
        ):(<Link to="/register" className='auth'>Login/Register</Link>)}
      </div>
    </header>
  ) 
}

export default Header
