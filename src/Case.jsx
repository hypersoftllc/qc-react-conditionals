import React from 'react'

import Else from './Else'
import When from './When'


export default function Case(props) {
  let whenOrElse = false,
      children

  children = React.Children.map(props.children, (child) => {
    if (child.type === When) {
      if (!whenOrElse) {
        if (child.props.is) {
          whenOrElse = true
          return child
        }
      }
    }
    else if (child.type === Else) {
      if (!whenOrElse) {
        whenOrElse = true
        return child
      }
    }
    else {
      return child
    }
    return null
  })

  return children || null
}
