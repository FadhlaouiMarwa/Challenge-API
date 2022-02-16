import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function User({carte}) {
    const navigate=useNavigate()
  return (
    <div>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{carte.name}</Card.Title>
    <Card.Text>
     Username: {carte.username}
    </Card.Text>
    <Card.Text>
     Email: {carte.email}
    </Card.Text>
    {/* <Link to={`/profile/${carte.id}`}>
    <Button variant="primary">Profile</Button>
    </Link> */}
    <Button onClick={()=>navigate(`/profile/${carte.id}`)}>Profile</Button>

    
  </Card.Body>
</Card>
    </div>
  )
}

export default User