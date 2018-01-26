import PropTypes from 'prop-types'
import React from 'react'

import Else from './Else'
import Then from './Then'


function If(props) {
  let children = props.children,
      is = props.is

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
  is: PropTypes.any,
}

export default If
