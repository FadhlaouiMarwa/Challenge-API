import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

function UserList() {
    const [users, setUsers] = useState()
    const [error, setError] = useState(null)
    
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>setUsers(res.data))
      .catch((err)=>setError(err));
     
    }, [])
    
  return (
    <div style={{display:"flex",justifyContent:"space-around", flexWrap:"wrap"}}>
        {users?.map((el)=> (<User carte={el} key={el.id}/>))}
    </div>
  )
}

export default UserList