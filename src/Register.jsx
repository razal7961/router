import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>

        <h1>Register</h1>

        <Link to='/login'><button>login</button></Link>
        <Link to='/view'><button>view</button></Link>
      
    </div>
  )
}

export default Register
