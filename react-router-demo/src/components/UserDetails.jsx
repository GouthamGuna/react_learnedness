import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const {userId} = useParams();
  
  return (
    <h1>Details about user {userId}</h1>
  )
}

export default UserDetails