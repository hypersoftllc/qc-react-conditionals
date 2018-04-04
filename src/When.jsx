import PT from 'prop-types'
import React from 'react'


function When(props) {
  if (props.is) {
    let children, typeOf

    children = props.children
    typeOf = typeof children
    return typeOf === 'number' || typeOf === 'string' ? children : children || null
  }
  return null
}

When.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  is: PT.any,
}

export default When
