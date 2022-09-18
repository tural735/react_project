import React from 'react'
import { formatDate, formatTime } from '../../utils/formatDate'

const UserCard = ({user}) => {
  return (
    <article>
        <img src={user?.profilepicture} alt={user?.name} />
        <div className='info'>
            <div className='head'>
                <h6>{user.name}</h6>
                <span>{user.location}</span>
            </div>
            <p className='email'>{user.email}</p>
            <p>{formatDate(new Date(user.createdat))} - {formatTime(new Date(user.createdat))}</p>
        </div>
    </article>
  )
}

export default UserCard
