/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Greeting = (props) => {
  return (
    <>
      <h1>Hello {props.name}!</h1>
      <p>{props.message}</p>
    </>
  )
}

export default Greeting
