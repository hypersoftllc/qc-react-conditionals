import React from 'react'


function Then(props) {
  let children = props.children
  let typeOf = typeof children

  return typeOf === 'number' || typeOf === 'string' ? children : children || null
}

export default Then
