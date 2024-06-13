// import React from 'react'

export default function Footer() {
    const fruits = ['mango', 'banana', 'apple'];

  return (
    <div>
        <ul>
        {fruits.map((fruits)=>
        // eslint-disable-next-line react/jsx-key
        <li>{fruits}</li>
    )}
    </ul>
    </div>
  )
}
