import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {

    const navigate = useNavigate();

  return (
    <>
        <h1>Order received and confirmed!</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default OrderSummary