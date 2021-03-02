import React from 'react'
import PropTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../infrastructure/theme/color'

export default function IcWarning({ color, size }) {
  return <Ionicons name="warning-outline" size={size} color={color} />
}

IcWarning.propsTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcWarning.defaultProps = {
  color: colors.warning,
}