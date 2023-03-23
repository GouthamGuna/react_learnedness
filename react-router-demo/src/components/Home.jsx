import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Home = () => {

    const navigate = useNavigate();

  return (
    <>
        <h1>Home Page</h1>
        <button onClick={() => navigate('order-summary', {replace : true})} >
            Place order
        </button>
    </>
  )
}

export default Home
