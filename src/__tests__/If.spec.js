/* eslint-env jest, node */
/* eslint max-len: "off" */
/* eslint max-nested-callbacks: "off" */
/* eslint padded-blocks: "off" */

import React from 'react'
import TestRenderer from 'react-test-renderer'

import Else from '../Else'
// import ElseIf from '../ElseIf'
import If from '../If'
import Then from '../Then'

const TRUE = true

/*
F, T: []
[ 'Other' ]
[ 'Then' ]
[ 'Else' ]
[ 'Other', 'Then' ]
[ 'Other', 'Else' ]
[ 'Then', 'Other' ]
[ 'Then', 'Then' ]
[ 'Then', 'Else' ]
[ 'Else', 'Other' ]
[ 'Else', 'Then' ]
[ 'Else', 'Else' ]
[ 'Other', 'Then', 'Other' ]
[ 'Other', 'Then', 'Then' ]
[ 'Other', 'Then', 'Else' ]
[ 'Other', 'Else', 'Other' ]
[ 'Other', 'Else', 'Then' ]
[ 'Other', 'Else', 'Else' ]
[ 'Then', 'Other', 'Then' ]
[ 'Then', 'Other', 'Else' ]
[ 'Then', 'Then', 'Other' ]
[ 'Then', 'Then', 'Else' ]
[ 'Then', 'Else', 'Other' ]
[ 'Then', 'Else', 'Then' ]
[ 'Then', 'Else', 'Else' ]
[ 'Else', 'Other', 'Then' ]
[ 'Else', 'Other', 'Else' ]
[ 'Else', 'Then', 'Other' ]
[ 'Else', 'Then', 'Then' ]
[ 'Else', 'Then', 'Else' ]
[ 'Else', 'Else', 'Other' ]
[ 'Else', 'Else', 'Then' ]
[ 'Other', 'Then', 'Other', 'Then' ]
[ 'Other', 'Then', 'Other', 'Else' ]
[ 'Other', 'Then', 'Then', 'Other' ]
[ 'Other', 'Then', 'Then', 'Else' ]
[ 'Other', 'Then', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Then' ]
[ 'Other', 'Then', 'Else', 'Else' ]
[ 'Other', 'Else', 'Other', 'Then' ]
[ 'Other', 'Else', 'Other', 'Else' ]
[ 'Other', 'Else', 'Then', 'Other' ]
[ 'Other', 'Else', 'Then', 'Then' ]
[ 'Other', 'Else', 'Then', 'Else' ]
[ 'Other', 'Else', 'Else', 'Other' ]
[ 'Other', 'Else', 'Else', 'Then' ]
[ 'Then', 'Other', 'Then', 'Other' ]
[ 'Then', 'Other', 'Then', 'Else' ]
[ 'Then', 'Other', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Then' ]
[ 'Then', 'Other', 'Else', 'Else' ]
[ 'Then', 'Then', 'Other', 'Else' ]
[ 'Then', 'Then', 'Else', 'Other' ]
[ 'Then', 'Then', 'Else', 'Else' ]
[ 'Then', 'Else', 'Other', 'Then' ]
[ 'Then', 'Else', 'Other', 'Else' ]
[ 'Then', 'Else', 'Then', 'Other' ]
[ 'Then', 'Else', 'Then', 'Else' ]
[ 'Then', 'Else', 'Else', 'Other' ]
[ 'Then', 'Else', 'Else', 'Then' ]
[ 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Other', 'Then', 'Then' ]
[ 'Else', 'Other', 'Then', 'Else' ]
[ 'Else', 'Other', 'Else', 'Other' ]
[ 'Else', 'Other', 'Else', 'Then' ]
[ 'Else', 'Then', 'Other', 'Then' ]
[ 'Else', 'Then', 'Other', 'Else' ]
[ 'Else', 'Then', 'Then', 'Other' ]
[ 'Else', 'Then', 'Then', 'Else' ]
[ 'Else', 'Then', 'Else', 'Other' ]
[ 'Else', 'Then', 'Else', 'Then' ]
[ 'Else', 'Else', 'Other', 'Then' ]
[ 'Else', 'Else', 'Then', 'Other' ]
[ 'Else', 'Else', 'Then', 'Then' ]
[ 'Other', 'Then', 'Other', 'Then', 'Other' ]
[ 'Other', 'Then', 'Other', 'Then', 'Else' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Then' ]
[ 'Other', 'Then', 'Other', 'Else', 'Else' ]
[ 'Other', 'Then', 'Then', 'Other', 'Else' ]
[ 'Other', 'Then', 'Then', 'Else', 'Other' ]
[ 'Other', 'Then', 'Then', 'Else', 'Else' ]
[ 'Other', 'Then', 'Else', 'Other', 'Then' ]
[ 'Other', 'Then', 'Else', 'Other', 'Else' ]
[ 'Other', 'Then', 'Else', 'Then', 'Other' ]
[ 'Other', 'Then', 'Else', 'Then', 'Else' ]
[ 'Other', 'Then', 'Else', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Else', 'Then' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Then' ]
[ 'Other', 'Else', 'Other', 'Then', 'Else' ]
[ 'Other', 'Else', 'Other', 'Else', 'Other' ]
[ 'Other', 'Else', 'Other', 'Else', 'Then' ]
[ 'Other', 'Else', 'Then', 'Other', 'Then' ]
[ 'Other', 'Else', 'Then', 'Other', 'Else' ]
[ 'Other', 'Else', 'Then', 'Then', 'Other' ]
[ 'Other', 'Else', 'Then', 'Then', 'Else' ]
[ 'Other', 'Else', 'Then', 'Else', 'Other' ]
[ 'Other', 'Else', 'Then', 'Else', 'Then' ]
[ 'Other', 'Else', 'Else', 'Other', 'Then' ]
[ 'Other', 'Else', 'Else', 'Then', 'Other' ]
[ 'Other', 'Else', 'Else', 'Then', 'Then' ]
[ 'Then', 'Other', 'Then', 'Other', 'Else' ]
[ 'Then', 'Other', 'Then', 'Else', 'Other' ]
[ 'Then', 'Other', 'Then', 'Else', 'Else' ]
[ 'Then', 'Other', 'Else', 'Other', 'Then' ]
[ 'Then', 'Other', 'Else', 'Other', 'Else' ]
[ 'Then', 'Other', 'Else', 'Then', 'Other' ]
[ 'Then', 'Other', 'Else', 'Then', 'Else' ]
[ 'Then', 'Other', 'Else', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Else', 'Then' ]
[ 'Then', 'Then', 'Other', 'Else', 'Other' ]
[ 'Then', 'Then', 'Other', 'Else', 'Else' ]
[ 'Then', 'Then', 'Else', 'Other', 'Else' ]
[ 'Then', 'Then', 'Else', 'Else', 'Other' ]
[ 'Then', 'Else', 'Other', 'Then', 'Other' ]
[ 'Then', 'Else', 'Other', 'Then', 'Else' ]
[ 'Then', 'Else', 'Other', 'Else', 'Other' ]
[ 'Then', 'Else', 'Other', 'Else', 'Then' ]
[ 'Then', 'Else', 'Then', 'Other', 'Else' ]
[ 'Then', 'Else', 'Then', 'Else', 'Other' ]
[ 'Then', 'Else', 'Else', 'Other', 'Then' ]
[ 'Then', 'Else', 'Else', 'Then', 'Other' ]
[ 'Else', 'Other', 'Then', 'Other', 'Then' ]
[ 'Else', 'Other', 'Then', 'Other', 'Else' ]
[ 'Else', 'Other', 'Then', 'Then', 'Other' ]
[ 'Else', 'Other', 'Then', 'Then', 'Else' ]
[ 'Else', 'Other', 'Then', 'Else', 'Other' ]
[ 'Else', 'Other', 'Then', 'Else', 'Then' ]
[ 'Else', 'Other', 'Else', 'Other', 'Then' ]
[ 'Else', 'Other', 'Else', 'Then', 'Other' ]
[ 'Else', 'Other', 'Else', 'Then', 'Then' ]
[ 'Else', 'Then', 'Other', 'Then', 'Other' ]
[ 'Else', 'Then', 'Other', 'Then', 'Else' ]
[ 'Else', 'Then', 'Other', 'Else', 'Other' ]
[ 'Else', 'Then', 'Other', 'Else', 'Then' ]
[ 'Else', 'Then', 'Then', 'Other', 'Else' ]
[ 'Else', 'Then', 'Then', 'Else', 'Other' ]
[ 'Else', 'Then', 'Else', 'Other', 'Then' ]
[ 'Else', 'Then', 'Else', 'Then', 'Other' ]
[ 'Else', 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Else', 'Other', 'Then', 'Then' ]
[ 'Else', 'Else', 'Then', 'Other', 'Then' ]
[ 'Else', 'Else', 'Then', 'Then', 'Other' ]
[ 'Other', 'Then', 'Other', 'Then', 'Other', 'Else' ]
[ 'Other', 'Then', 'Other', 'Then', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Then', 'Else', 'Else' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Then' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Else' ]
[ 'Other', 'Then', 'Other', 'Else', 'Then', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Then', 'Else' ]
[ 'Other', 'Then', 'Other', 'Else', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Else', 'Then' ]
[ 'Other', 'Then', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Then', 'Other', 'Else', 'Else' ]
[ 'Other', 'Then', 'Then', 'Else', 'Other', 'Else' ]
[ 'Other', 'Then', 'Then', 'Else', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Then', 'Else', 'Other', 'Then', 'Else' ]
[ 'Other', 'Then', 'Else', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Other', 'Else', 'Then' ]
[ 'Other', 'Then', 'Else', 'Then', 'Other', 'Else' ]
[ 'Other', 'Then', 'Else', 'Then', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Else', 'Other', 'Then' ]
[ 'Other', 'Then', 'Else', 'Else', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Then' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Else' ]
[ 'Other', 'Else', 'Other', 'Then', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Then', 'Else' ]
[ 'Other', 'Else', 'Other', 'Then', 'Else', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Else', 'Then' ]
[ 'Other', 'Else', 'Other', 'Else', 'Other', 'Then' ]
[ 'Other', 'Else', 'Other', 'Else', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Else', 'Then', 'Then' ]
[ 'Other', 'Else', 'Then', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Then', 'Other', 'Then', 'Else' ]
[ 'Other', 'Else', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Else', 'Then', 'Other', 'Else', 'Then' ]
[ 'Other', 'Else', 'Then', 'Then', 'Other', 'Else' ]
[ 'Other', 'Else', 'Then', 'Then', 'Else', 'Other' ]
[ 'Other', 'Else', 'Then', 'Else', 'Other', 'Then' ]
[ 'Other', 'Else', 'Then', 'Else', 'Then', 'Other' ]
[ 'Other', 'Else', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Else', 'Other', 'Then', 'Then' ]
[ 'Other', 'Else', 'Else', 'Then', 'Other', 'Then' ]
[ 'Other', 'Else', 'Else', 'Then', 'Then', 'Other' ]
[ 'Then', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Then', 'Other', 'Then', 'Other', 'Else', 'Else' ]
[ 'Then', 'Other', 'Then', 'Else', 'Other', 'Else' ]
[ 'Then', 'Other', 'Then', 'Else', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Then', 'Other', 'Else', 'Other', 'Then', 'Else' ]
[ 'Then', 'Other', 'Else', 'Other', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Other', 'Else', 'Then' ]
[ 'Then', 'Other', 'Else', 'Then', 'Other', 'Else' ]
[ 'Then', 'Other', 'Else', 'Then', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Else', 'Other', 'Then' ]
[ 'Then', 'Other', 'Else', 'Else', 'Then', 'Other' ]
[ 'Then', 'Then', 'Other', 'Else', 'Other', 'Else' ]
[ 'Then', 'Then', 'Other', 'Else', 'Else', 'Other' ]
[ 'Then', 'Then', 'Else', 'Other', 'Else', 'Other' ]
[ 'Then', 'Else', 'Other', 'Then', 'Other', 'Else' ]
[ 'Then', 'Else', 'Other', 'Then', 'Else', 'Other' ]
[ 'Then', 'Else', 'Other', 'Else', 'Other', 'Then' ]
[ 'Then', 'Else', 'Other', 'Else', 'Then', 'Other' ]
[ 'Then', 'Else', 'Then', 'Other', 'Else', 'Other' ]
[ 'Then', 'Else', 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Other', 'Then', 'Other', 'Then', 'Other' ]
[ 'Else', 'Other', 'Then', 'Other', 'Then', 'Else' ]
[ 'Else', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Else', 'Other', 'Then', 'Other', 'Else', 'Then' ]
[ 'Else', 'Other', 'Then', 'Then', 'Other', 'Else' ]
[ 'Else', 'Other', 'Then', 'Then', 'Else', 'Other' ]
[ 'Else', 'Other', 'Then', 'Else', 'Other', 'Then' ]
[ 'Else', 'Other', 'Then', 'Else', 'Then', 'Other' ]
[ 'Else', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Other', 'Else', 'Other', 'Then', 'Then' ]
[ 'Else', 'Other', 'Else', 'Then', 'Other', 'Then' ]
[ 'Else', 'Other', 'Else', 'Then', 'Then', 'Other' ]
[ 'Else', 'Then', 'Other', 'Then', 'Other', 'Else' ]
[ 'Else', 'Then', 'Other', 'Then', 'Else', 'Other' ]
[ 'Else', 'Then', 'Other', 'Else', 'Other', 'Then' ]
[ 'Else', 'Then', 'Other', 'Else', 'Then', 'Other' ]
[ 'Else', 'Then', 'Then', 'Other', 'Else', 'Other' ]
[ 'Else', 'Then', 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Else', 'Other', 'Then', 'Other', 'Then' ]
[ 'Else', 'Else', 'Other', 'Then', 'Then', 'Other' ]
[ 'Else', 'Else', 'Then', 'Other', 'Then', 'Other' ]
[ 'Other', 'Then', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Then', 'Other', 'Else', 'Else' ]
[ 'Other', 'Then', 'Other', 'Then', 'Else', 'Other', 'Else' ]
[ 'Other', 'Then', 'Other', 'Then', 'Else', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Then', 'Else' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Else', 'Then' ]
[ 'Other', 'Then', 'Other', 'Else', 'Then', 'Other', 'Else' ]
[ 'Other', 'Then', 'Other', 'Else', 'Then', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Else', 'Other', 'Then' ]
[ 'Other', 'Then', 'Other', 'Else', 'Else', 'Then', 'Other' ]
[ 'Other', 'Then', 'Then', 'Other', 'Else', 'Other', 'Else' ]
[ 'Other', 'Then', 'Then', 'Other', 'Else', 'Else', 'Other' ]
[ 'Other', 'Then', 'Then', 'Else', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Other', 'Then', 'Other', 'Else' ]
[ 'Other', 'Then', 'Else', 'Other', 'Then', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Other', 'Else', 'Other', 'Then' ]
[ 'Other', 'Then', 'Else', 'Other', 'Else', 'Then', 'Other' ]
[ 'Other', 'Then', 'Else', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Then', 'Else' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Else', 'Then' ]
[ 'Other', 'Else', 'Other', 'Then', 'Then', 'Other', 'Else' ]
[ 'Other', 'Else', 'Other', 'Then', 'Then', 'Else', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Else', 'Other', 'Then' ]
[ 'Other', 'Else', 'Other', 'Then', 'Else', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Else', 'Other', 'Then', 'Then' ]
[ 'Other', 'Else', 'Other', 'Else', 'Then', 'Other', 'Then' ]
[ 'Other', 'Else', 'Other', 'Else', 'Then', 'Then', 'Other' ]
[ 'Other', 'Else', 'Then', 'Other', 'Then', 'Other', 'Else' ]
[ 'Other', 'Else', 'Then', 'Other', 'Then', 'Else', 'Other' ]
[ 'Other', 'Else', 'Then', 'Other', 'Else', 'Other', 'Then' ]
[ 'Other', 'Else', 'Then', 'Other', 'Else', 'Then', 'Other' ]
[ 'Other', 'Else', 'Then', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Else', 'Then', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Else', 'Other', 'Then', 'Other', 'Then' ]
[ 'Other', 'Else', 'Else', 'Other', 'Then', 'Then', 'Other' ]
[ 'Other', 'Else', 'Else', 'Then', 'Other', 'Then', 'Other' ]
[ 'Then', 'Other', 'Then', 'Other', 'Else', 'Other', 'Else' ]
[ 'Then', 'Other', 'Then', 'Other', 'Else', 'Else', 'Other' ]
[ 'Then', 'Other', 'Then', 'Else', 'Other', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Other', 'Then', 'Other', 'Else' ]
[ 'Then', 'Other', 'Else', 'Other', 'Then', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Other', 'Else', 'Other', 'Then' ]
[ 'Then', 'Other', 'Else', 'Other', 'Else', 'Then', 'Other' ]
[ 'Then', 'Other', 'Else', 'Then', 'Other', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Else', 'Other', 'Then', 'Other' ]
[ 'Then', 'Then', 'Other', 'Else', 'Other', 'Else', 'Other' ]
[ 'Then', 'Else', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Then', 'Else', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Other', 'Then', 'Other', 'Then', 'Other', 'Else' ]
[ 'Else', 'Other', 'Then', 'Other', 'Then', 'Else', 'Other' ]
[ 'Else', 'Other', 'Then', 'Other', 'Else', 'Other', 'Then' ]
[ 'Else', 'Other', 'Then', 'Other', 'Else', 'Then', 'Other' ]
[ 'Else', 'Other', 'Then', 'Then', 'Other', 'Else', 'Other' ]
[ 'Else', 'Other', 'Then', 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Other', 'Else', 'Other', 'Then', 'Other', 'Then' ]
[ 'Else', 'Other', 'Else', 'Other', 'Then', 'Then', 'Other' ]
[ 'Else', 'Other', 'Else', 'Then', 'Other', 'Then', 'Other' ]
[ 'Else', 'Then', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Else', 'Then', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Else', 'Other', 'Then', 'Other', 'Then', 'Other' ]
[ 'Other', 'Then', 'Other', 'Then', 'Other', 'Else', 'Other', 'Else' ]
[ 'Other', 'Then', 'Other', 'Then', 'Other', 'Else', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Then', 'Else', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Then', 'Other', 'Else' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Then', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Else', 'Other', 'Then' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Else', 'Then', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Then', 'Then', 'Other', 'Else', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Else', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Then', 'Other', 'Else' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Then', 'Else', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Else', 'Other', 'Then' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Else', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Else', 'Other', 'Then', 'Other', 'Then' ]
[ 'Other', 'Else', 'Other', 'Else', 'Other', 'Then', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Else', 'Then', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Then', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Else', 'Then', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Else', 'Other', 'Then', 'Other', 'Then', 'Other' ]
[ 'Then', 'Other', 'Then', 'Other', 'Else', 'Other', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Then', 'Other', 'Else', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Other', 'Then', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Else', 'Other', 'Then', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Else', 'Other', 'Else', 'Other', 'Then', 'Other', 'Then', 'Other' ]
[ 'Other', 'Then', 'Other', 'Then', 'Other', 'Else', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Then', 'Other', 'Else', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Then', 'Other', 'Else', 'Other' ]
[ 'Other', 'Else', 'Other', 'Then', 'Other', 'Else', 'Other', 'Then', 'Other' ]
[ 'Other', 'Else', 'Other', 'Else', 'Other', 'Then', 'Other', 'Then', 'Other' ]
*/
describe('If.jsx', function () {

  describe('If', function () {

    describe('declared with a falsy `is` property', function () {

      describe('with no children', function () {

        it('should render as expected', function () {
          let comp


          comp = TestRenderer.create(
            <If/>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}/>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

      })

      describe('with no `Then` children', function () {

        it('should render the children as expected', function () {
          let comp


          comp = TestRenderer.create(
            <If is={false}>
              First child.
              <span>Second child.</span>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

        xdescribe('but with one or more `ElseIf` children', function () {

          // xit('should render all applicable children as expected', function () {
          //   let comp


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <span>First child.</span>
          //       <span>Second child.</span>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <span>First child.</span>
          //       <span>Second child.</span>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <span>First child.</span>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <span>First child.</span>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <span>First child.</span>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <span>First child.</span>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <span>First child.</span>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <span>First child.</span>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={false}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()
          // })

          xdescribe('and with one or more `Else` children', function () {

            it('should render all applicable children as expected', function () {
            })

          })

        })

        describe('but with one or more `Else` children', function () {

          it('should render all applicable children as expected', function () {
            let comp


            comp = TestRenderer.create(
              <If is={false}>
                <span>First child.</span>
                <span>Second child.</span>
                <Else><span>Last child.</span></Else>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <span>First child.</span>
                <Else><span>Second child.</span></Else>
                <span>Last child.</span>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <span>First child.</span>
                <Else><span>Second child.</span></Else>
                <Else><span>Last child.</span></Else>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <Else><span>First child.</span></Else>
                <span>Second child.</span>
                <span>Last child.</span>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <Else><span>First child.</span></Else>
                <span>Second child.</span>
                <Else><span>Last child.</span></Else>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <Else><span>First child.</span></Else>
                <Else><span>Second child.</span></Else>
                <span>Last child.</span>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <Else><span>First child.</span></Else>
                <Else><span>Second child.</span></Else>
                <Else><span>Last child.</span></Else>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()
          })

        })

      })

      describe('with one or more `Then` children', function () {

        it('should render all applicable children as expected', function () {
          let comp


          comp = TestRenderer.create(
            <If is={false}>
              <Then>First child.</Then>
              <span>Second child.</span>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              First child.
              <Then>Second child.</Then>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              First child.
              <span>Second child.</span>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              <Then>First child.</Then>
              <Then><span>Second child.</span></Then>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              <Then>First child.</Then>
              <span>Second child.</span>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              First child.
              <Then><span>Second child.</span></Then>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              <Then>First child.</Then>
              <Then><span>Second child.</span></Then>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

        // xdescribe('and one or more `ElseIf` children', function () {

        //   it('should render all applicable children as expected', function () {
        //     let comp


        //     comp = TestRenderer.create(
        //       <If is={false}>
        //         <Then>First child.</Then>
        //         <span>Second child.</span>
        //         {
        //           [
        //             'Third child[0].',
        //             'Third child[1].',
        //           ]
        //         }
        //       </If>
        //     )

        //     expect(comp.toJSON()).toMatchSnapshot()
        //   })

        // })

        describe('and one or more `Else` children', function () {

          it('should render all applicable children as expected', function () {
            let comp

            /*
              One Then, One Else
              One Then, Two Else
              Two Then, Two Else
            */


            // One Then, one Else
            comp = TestRenderer.create(
              <If is={false}>
                <Then><span>Second child.</span></Then>
                <Else><span>Last child.</span></Else>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <span>First child.</span>
                <Else><span>Second child.</span></Else>
                <span>Last child.</span>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <span>First child.</span>
                <Else><span>Second child.</span></Else>
                <Else><span>Last child.</span></Else>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <Else><span>First child.</span></Else>
                <span>Second child.</span>
                <span>Last child.</span>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <Else><span>First child.</span></Else>
                <span>Second child.</span>
                <Else><span>Last child.</span></Else>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <Else><span>First child.</span></Else>
                <Else><span>Second child.</span></Else>
                <span>Last child.</span>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()


            comp = TestRenderer.create(
              <If is={false}>
                <Else><span>First child.</span></Else>
                <Else><span>Second child.</span></Else>
                <Else><span>Last child.</span></Else>
              </If>
            )

            expect(comp.toJSON()).toMatchSnapshot()
          })

        })

        // xdescribe(', one `Else` child, and one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        // xdescribe(', one `Else` child, and more than one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        // xdescribe(', more than one `Else` child, and more than one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        it('should render all children, including `Then` children, as expected', function () {
          let comp


          comp = TestRenderer.create(
            <If is={TRUE}>
              <Then>First child.</Then>
              <span>Second child.</span>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              First child.
              <Then><span>Second child.</span></Then>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              First child.
              <span>Second child.</span>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              <Then>First child.</Then>
              <Then><span>Second child.</span></Then>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              <Then>First child.</Then>
              <span>Second child.</span>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              First child.
              <Then><span>Second child.</span></Then>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              <Then>First child.</Then>
              <Then><span>Second child.</span></Then>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

        // xdescribe('and one or more `ElseIf` children', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        describe('and one or more `Else` children', function () {
        })

        // xdescribe(', one `Else` child, and one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        // xdescribe(', one `Else` child, and more than one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        // xdescribe(', more than one `Else` child, and more than one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

      })

    })


    describe('declared with a truthy `is` property', function () {

      describe('with no children', function () {

        it('should render as expected', function () {
          let comp


          comp = TestRenderer.create(
            <If is/>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}/>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

      })

      describe('with no `Then` children', function () {

        it('should render the children as expected', function () {
          let comp


          comp = TestRenderer.create(
            <If is={TRUE}>
              First child.
              <span>Second child.</span>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

        xdescribe('but with one or more `ElseIf` children', function () {

          // xit('should render all applicable children as expected', function () {
          //   let comp


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <span>First child.</span>
          //       <span>Second child.</span>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <span>First child.</span>
          //       <span>Second child.</span>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <span>First child.</span>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <span>First child.</span>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // One ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <span>First child.</span>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <span>First child.</span>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <span>First child.</span>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <span>First child.</span>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <span>Second child.</span>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Two ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <span>Last child.</span>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={false}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={false}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={false}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()


          //   // Three ElseIfs:
          //   comp = TestRenderer.create(
          //     <If is={TRUE}>
          //       <ElseIf is={TRUE}><span>First child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Second child.</span></ElseIf>
          //       <ElseIf is={TRUE}><span>Last child.</span></ElseIf>
          //     </If>
          //   )

          //   expect(comp.toJSON()).toMatchSnapshot()
          // })

          xdescribe('and with one or more `Else` children', function () {

            it('should render all non-`Then` children as expected', function () {
              // let comp


              // comp = TestRenderer.create(
              //   <If is={false}>
              //     <Then>First child.</Then>
              //     <span>Second child.</span>
              //     {
              //       [
              //         'Third child[0].',
              //         'Third child[1].'
              //       ]
              //     }
              //   </If>
              // )

              // expect(comp.toJSON()).toMatchSnapshot()


              // comp = TestRenderer.create(
              //   <If is={false}>
              //     First child.
              //     <Then>Second child.</Then>
              //     {
              //       [
              //         'Third child[0].',
              //         'Third child[1].'
              //       ]
              //     }
              //   </If>
              // )

              // expect(comp.toJSON()).toMatchSnapshot()


              // comp = TestRenderer.create(
              //   <If is={false}>
              //     First child.
              //     <span>Second child.</span>
              //     <Then>
              //       {
              //         [
              //           'Third child[0].',
              //           'Third child[1].'
              //         ]
              //       }
              //     </Then>
              //   </If>
              // )

              // expect(comp.toJSON()).toMatchSnapshot()


              // comp = TestRenderer.create(
              //   <If is={false}>
              //     <Then>First child.</Then>
              //     <Then><span>Second child.</span></Then>
              //     {
              //       [
              //         'Third child[0].',
              //         'Third child[1].'
              //       ]
              //     }
              //   </If>
              // )

              // expect(comp.toJSON()).toMatchSnapshot()


              // comp = TestRenderer.create(
              //   <If is={false}>
              //     <Then>First child.</Then>
              //     <span>Second child.</span>
              //     <Then>
              //       {
              //         [
              //           'Third child[0].',
              //           'Third child[1].'
              //         ]
              //       }
              //     </Then>
              //   </If>
              // )

              // expect(comp.toJSON()).toMatchSnapshot()


              // comp = TestRenderer.create(
              //   <If is={false}>
              //     First child.
              //     <Then><span>Second child.</span></Then>
              //     <Then>
              //       {
              //         [
              //           'Third child[0].',
              //           'Third child[1].'
              //         ]
              //       }
              //     </Then>
              //   </If>
              // )

              // expect(comp.toJSON()).toMatchSnapshot()


              // comp = TestRenderer.create(
              //   <If is={false}>
              //     <Then>First child.</Then>
              //     <Then><span>Second child.</span></Then>
              //     <Then>
              //       {
              //         [
              //           'Third child[0].',
              //           'Third child[1].'
              //         ]
              //       }
              //     </Then>
              //   </If>
              // )

              // expect(comp.toJSON()).toMatchSnapshot()
            })

          })

        })

        xdescribe('but with one or more `Else` children', function () {
        })

      })

      describe('with one or more `Then` children', function () {

        it('should render all non-`Then` children as expected', function () {
          let comp


          comp = TestRenderer.create(
            <If is={false}>
              <Then>First child.</Then>
              <span>Second child.</span>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              First child.
              <Then>Second child.</Then>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              First child.
              <span>Second child.</span>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              <Then>First child.</Then>
              <Then><span>Second child.</span></Then>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              <Then>First child.</Then>
              <span>Second child.</span>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              First child.
              <Then><span>Second child.</span></Then>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={false}>
              <Then>First child.</Then>
              <Then><span>Second child.</span></Then>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

        // xdescribe('and one or more `ElseIf` children', function () {

        //   it('should render applicable children as expected', function () {
        //     let comp


        //     comp = TestRenderer.create(
        //       <If is={false}>
        //         <Then>First child.</Then>
        //         <span>Second child.</span>
        //         {
        //           [
        //             'Third child[0].',
        //             'Third child[1].',
        //           ]
        //         }
        //       </If>
        //     )

        //     expect(comp.toJSON()).toMatchSnapshot()
        //   })

        // })

        describe('and one or more `Else` children', function () {
        })

        // describe(', one `Else` child, and one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        // describe(', one `Else` child, and more than one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        // describe(', more than one `Else` child, and more than one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })


        it('should render all children, including `Then` children, as expected', function () {
          let comp


          comp = TestRenderer.create(
            <If is={TRUE}>
              <Then>First child.</Then>
              <span>Second child.</span>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              First child.
              <Then><span>Second child.</span></Then>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              First child.
              <span>Second child.</span>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              <Then>First child.</Then>
              <Then><span>Second child.</span></Then>
              {
                [
                  'Third child[0].',
                  'Third child[1].',
                ]
              }
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              <Then>First child.</Then>
              <span>Second child.</span>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              First child.
              <Then><span>Second child.</span></Then>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()


          comp = TestRenderer.create(
            <If is={TRUE}>
              <Then>First child.</Then>
              <Then><span>Second child.</span></Then>
              <Then>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Then>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

        // describe('and one or more `ElseIf` children', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        describe('and one or more `Else` children', function () {
        })

        // describe(', one `Else` child, and one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        // describe(', one `Else` child, and more than one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

        // describe(', more than one `Else` child, and more than one `ElseIf` child', function () {

        //   describe('declared with a falsy `is` property', function () {
        //   })

        //   describe('declared with a truthy `is` property', function () {
        //   })

        // })

      })

      describe('with one or more `Else` children', function () {

        it('should render the children as expected', function () {
          let comp


          comp = TestRenderer.create(
            <If is={TRUE}>
              First child.
              <Else>
                <span>Second child.</span>
                {
                  [
                    'Third child[0].',
                    'Third child[1].',
                  ]
                }
              </Else>
            </If>
          )

          expect(comp.toJSON()).toMatchSnapshot()
        })

      })

    })

    // describe('with no `Then`, `ElseIf`, or `Else` children', function () {

    //   describe('declared with a falsy `is` property', function () {

    //     it('should render the children as expected', function () {
    //       let comp


    //       comp = TestRenderer.create(
    //         <If>
    //           First child.
    //           <span>Second child.</span>
    //           {
    //             [
    //               'Third child[0].',
    //               'Third child[1].'
    //             ]
    //           }
    //         </If>
    //       )

    //       expect(comp.toJSON()).toMatchSnapshot()


    //       comp = TestRenderer.create(
    //         <If is={false}>
    //           First child.
    //           <span>Second child.</span>
    //           {
    //             [
    //               'Third child[0].',
    //               'Third child[1].'
    //             ]
    //           }
    //         </If>
    //       )

    //       expect(comp.toJSON()).toMatchSnapshot()
    //     })

    //   })

    //   describe('declared with a truthy `is` property', function () {

    //     it('should render the children as expected', function () {
    //       let comp


    //       comp = TestRenderer.create(
    //         <If is>
    //           First child.
    //           <span>Second child.</span>
    //           {
    //             [
    //               'Third child[0].',
    //               'Third child[1].'
    //             ]
    //           }
    //         </If>
    //       )

    //       expect(comp.toJSON()).toMatchSnapshot()


    //       comp = TestRenderer.create(
    //         <If is={TRUE}>
    //           First child.
    //           <span>Second child.</span>
    //           {
    //             [
    //               'Third child[0].',
    //               'Third child[1].'
    //             ]
    //           }
    //         </If>
    //       )

    //       expect(comp.toJSON()).toMatchSnapshot()
    //     })

    //   })

    // })

  })

})
