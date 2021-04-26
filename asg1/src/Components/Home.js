import React,{useState} from 'react'
import Header from './Header'
import Body from './Body'
import './home.css'

export const Home = () => {
    const [Clickhandler,setClickHandler] = useState(false)

    const userinfoclick=()=>{
        setClickHandler(true)
    }
    return (
        <div className='Homehead'>
            <Header userinfoclick={userinfoclick}/>
            <Body Clickhandler={Clickhandler}/>
        </div>
    )
}

export default Home

