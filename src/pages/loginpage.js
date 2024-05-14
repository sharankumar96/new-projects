import React from 'react'
import { Link } from 'react-router-dom'

function loginpage() {
  return (
    <>
    <form action='' style={{border:soild}}>
        <input type='text' placeholder='Enter Email'></input>
        <input type='password' placeholder='Enter Password'></input>
        <button>Login</button>

    </form>
    </>
   
  )
}

export default loginpage
