import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

const Login = () => {
    const [user, setuser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }

  return (
    <div>
        <label>
            Username : 
            <input  type='text'
                onChange={e => setuser(e.target.value)}
            />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login