import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { changePage } from '../../features/allUser/allUserSlice';

const Pagination = ({totalPage,currentPage}) => {
    const dispatch=useDispatch()
    const pages=totalPage;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const numberOfPages=[];
    for(let i=1;i<=pages;i++){
        numberOfPages.push(i)
    }
    const [currentButton,setCurrentButton]=useState(currentPage)
    const [arrOfCurrButtons,setArrOfCurrButtons]=useState([])

    useEffect(()=>{
      dispatch(changePage(currentButton))
    },[dispatch,currentButton])

    useEffect(()=>{
        let tempNumberOfPages=[...arrOfCurrButtons];
        let dotsInitial = '...'
        let dotsLeft = '... '
        let dotsRight = ' ...'

        if (numberOfPages.length < 6) {
          tempNumberOfPages = numberOfPages
        }
        else if(currentButton >= 1 && currentButton <=3){
          tempNumberOfPages=[1,2,3,4,dotsInitial,numberOfPages.length]
        }
        else if(currentButton===4){
          const sliced = numberOfPages.slice(0, 5)
          tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length]
        }
        else if(currentButton>4 && currentButton<numberOfPages.length -2){
          const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)
          const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
          tempNumberOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
        }
        else if(currentButton>numberOfPages.length-3){
          const sliced=numberOfPages.slice(numberOfPages.length-4);
          tempNumberOfPages=([1,dotsLeft,...sliced]);
        }
        else if(currentButton===dotsInitial){
          setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length-3]+1)
        }
        else if (currentButton === dotsRight) {
          setCurrentButton(arrOfCurrButtons[3] + 2)
        }
        else if (currentButton === dotsLeft) {
          setCurrentButton(arrOfCurrButtons[3] - 2)
        }
        setArrOfCurrButtons(tempNumberOfPages);
    },[currentButton,numberOfPages,arrOfCurrButtons])
  return (
    <div className='pagination'>
      <div className="pagination-container">
            <button disabled={currentButton===1} className={currentButton ===1 && 'disabled'} onClick={()=>setCurrentButton((prev)=>prev < 1 ? 1 : prev-1)}>Prev</button>
            {arrOfCurrButtons.map((page,index)=>{
                return (
                    <button key={index} className={currentButton ===page ? 'active':''} onClick={()=>setCurrentButton(page)}>{page}</button>
                )
            })}
            <button className={currentButton===numberOfPages.length && 'disabled'} disabled={currentButton===numberOfPages.length} onClick={()=>setCurrentButton((prev)=>prev+1)}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
