import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Comment from './Comment';

function Post({aa}) {
    const [comment, setComment] = useState()
    const [error, setError] = useState(null)
    const navigate=useNavigate()

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${aa.id}`).then((res)=>setComment(res.data))
      .catch((err)=>setError(err));
     
    }, [])
  return (
    <div>
        

         {comment?.map((el)=> <Comment bb={el} key={el.id}/>)}
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Title:{aa.title}</Card.Title>
    <Card.Text>
     Body: {aa.body}
    </Card.Text>
    
    
  </Card.Body>
</Card>

    </div>
  )
}

export default Post