import React from 'react'
import { useGlobalContext } from '../Context/Context'
function Homepage() {
    const {changepage,changerate,rate,disabled,changestate}=useGlobalContext()
  return (
    <div className='box'>
        <div className="container">
            <div className="icon">
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
            </div>
            <h1 className='head'>How did we do?</h1>
            <p className='about'>Please let us know how we did with your support request.All feedback is appreciated to help us improve our offering!</p>
            <div className="rating">
                <button className={(rate===1)?"rating1 active":"rating1"} onClick={()=>{changerate(1);changestate(false)}}>1</button>
                <button className={(rate===2)?"rating1 active":"rating1"} onClick={()=>{changerate(2);changestate(false)}}>2</button>
                <button className={(rate===3)?"rating1 active":"rating1"} onClick={()=>{changerate(3);changestate(false)}}>3</button>
                <button className={(rate===4)?"rating1 active":"rating1"} onClick={()=>{changerate(4);changestate(false)}}>4</button>
                <button className={(rate===5)?"rating1 active":"rating1"} onClick={()=>{changerate(5);changestate(false)}}>5</button>
            </div>
            <button disabled={disabled}  onClick={()=>changepage()} className="submit">Submit</button>
        </div>
    </div>
  )
}

export default Homepage