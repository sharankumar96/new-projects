import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import

function home() {
  return (
    <>
      <div>Homepage</div>
      <button type='button' onClick={()=>{Navigate("/loginpage")}}>LogIn</button>

    </>

  )
}

export default home
