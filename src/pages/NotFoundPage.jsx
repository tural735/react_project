import React from 'react'
import NotFoundIcon from '../assets/icons/NotFoundIcon'
import {Link} from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <main className='container not_found'>
      <NotFoundIcon/>
      <Link to="/" className='back'>Go To Home page</Link>
    </main>
  )
}

export default NotFoundPage
