import React from 'react'

export const Header = (props) => {

    const getuserDetails=()=>{
        props.userinfoclick("true")
        console.log(';enter')
    }

    return (
        <div className='headersection'>
            <p className='brandname'>Sony Brand</p>
            <p className='userdet' onClick={getuserDetails}>Get Users</p>
        </div>
    )
}

export default Header