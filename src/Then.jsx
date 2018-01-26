import React from 'react'


function Then(props) {
  let children = props.children,
      typeOf = typeof children

  return typeOf === 'number' || typeOf === 'string' ? children : children || null
}

export default Then
