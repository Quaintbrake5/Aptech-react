/* eslint-disable no-unused-vars */
import React from 'react'

const Signup = () => {
  return (
    <>
      <form>
        <div>
            <label htmlFor="fullName">Name</label>
            <input type='text' id='fullName' name='fullName'></input>
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type='email' id='email' name='email'></input>
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type='password' id='password' name='password'></input>
        </div>

        <div>
            <button type='submit'>Sign Up</button>
        </div>
      </form>
    </>
  )
}

export default Signup
