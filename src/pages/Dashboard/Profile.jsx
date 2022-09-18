import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import Pagination from '../../components/profile/Pagination';
import UserCard from '../../components/profile/UserCard';
import { getAllUser } from '../../features/allUser/allUserSlice';

const Profile = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const {isLoading:allUserLoading,error:AllUserError,page,totalPage,per_page,users:usersData,totalrecord}=useSelector(state=>state.allUser);
  
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [dispatch,page]);
  useEffect(()=>{
    dispatch(getAllUser())
  },[dispatch,page])

  if(allUserLoading){
    return <div className='container loading'>
      <HashLoader size={50} color="#2697DC"/>
    </div>
  }
  if(AllUserError){
    return <div className='container error_content'>
      <h1>It was not possible to contact the server, try again after a while edit</h1>
      <button onClick={()=>navigate('/')}>Go to Home Page</button>
    </div>
  }
  return (
    <main className='container'>
        <div className="profile">
            <h1 className='headLine'>{per_page * page}/ {totalrecord}</h1>
            <div className='all_user'>
              {usersData && usersData.map((user,index)=>(
                <UserCard key={index} user={user}/>
              ))}
            </div>
            <Pagination currentPage={page} totalPage={totalPage}/>
        </div>
    </main>
  )
}

export default Profile
