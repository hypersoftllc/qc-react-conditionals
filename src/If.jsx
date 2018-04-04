import PT from 'prop-types'
import React from 'react'

import Else from './Else'
import Then from './Then'


function If(props) {
  let children = props.children
  let is = props.is

  children = React.Children.map(children, function (child) {
    let item = child

    if (child.type === Then) {
      if (!is) {
        item = null
      }
    }
    else if (child.type === Else) {
      if (is) {
        item = null
      }
    }
    return item
  })

  return children || null
}

If.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  is: PT.any,
}

export default If
