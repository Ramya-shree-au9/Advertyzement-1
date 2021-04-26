import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Loader from './Loader/index'

export const Userinfo = () => {
    const [userdetail,setUserDetail]=useState('')
    const [page,setPage] = useState(false)

    useEffect(()=>{
        if(!page){
            var pageno = 1   
        }else{
            pageno = 2
        }
        axios.get(`https://reqres.in/api/users?page=${pageno}`).then(res=>{
            setUserDetail(res.data.data)
        }) 
    },[page])

    return (
        <div>
            {userdetail?
            <>
            <h2 className='userhead'>User Information</h2>
            <div className='usersection'>
            {userdetail.map(data=>{
                return(
                    <div className='singleuserinfo'>
                    <p><img className='userimg' src={data.avatar} alt='Avatar' /></p>
                   <b> <p>{data.first_name}{data.last_name}</p></b>
                    <p>{data.email}</p>
                    </div>
                )
            })}
            </div>
            <div className='pagesetting'>
            <p onClick={()=>setPage(false)}><i class="fas fa-chevron-left"></i></p>
                <div onClick={()=>setPage(false)}>1</div>
                <div onClick={()=>setPage(true)}>2</div>
              <p onClick={()=>setPage(true)}> <i class="fas fa-chevron-right"></i></p> 
            </div>
            </>:
            <div>
                <Loader/>
                </div>}
        </div>
    )
}

export default Userinfo