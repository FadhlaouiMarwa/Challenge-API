import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import Post from './Post';

function Profile() {
    const params=useParams()
    const [post, setPost] = useState()
    const [error, setError] = useState(null)
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`).then((res)=>setPost(res.data))
      .catch((err)=>setError(err));
     
    }, [])
  return (
    <div style={{display:"flex",justifyContent:"space-around", flexWrap:"wrap"}}>
    
        {post?.map((el)=> <Post aa={el} key={el.id}/>)}
        
    </div>
  )
}

export default Profile