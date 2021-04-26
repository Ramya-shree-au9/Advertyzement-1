import React from 'react'
import img from '../img/welcome.svg'
import UserInfo from './Userinfo'

export const Body = (props) => {
    
    return (
        <>
        {!props.Clickhandler?
        <div className='bodysection'>
            <div className='subhead'>
            <h1 className='headline'>Welcome to our Website</h1>
            <p>Let's see your beautiful world</p>
            </div>
            <div ><img className='svgimg' src={img} alt='Welcome'/></div>
        </div>  :
       <UserInfo/>
    }
    </>
    )
}

export default Body
