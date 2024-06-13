// eslint-disable-next-line no-unused-vars
import React from 'react'

export const ListItems = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div>{props.items.map((item, index) => (
        <li key = {index}>{item}</li>
    ))}
    </div>
  )
}

export default ListItems
