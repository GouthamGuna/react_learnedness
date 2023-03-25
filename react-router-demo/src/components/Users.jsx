import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
  const [searchParams, setsearchParams] = useSearchParams()
  const showActiveusers = searchParams.get('filter') === 'active'
  return (
    <>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setsearchParams({ filter : 'active'})}>
          Active users
        </button>
        <button onClick={() => setsearchParams({})}>Reset Filter</button>
      </div>
      {
        showActiveusers ? ( <h2>Showing active users</h2> 
        ) : (<h2>Showing all users</h2>)
      }
    </>
  )
}

export default Users