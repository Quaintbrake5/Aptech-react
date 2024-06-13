/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

export const Button = (props) => {
  return (
      <button onClick={props.onClick} title={props.title}>{props.label}</button>
  )
}

export default Button
