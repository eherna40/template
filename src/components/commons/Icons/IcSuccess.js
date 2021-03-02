import React from 'react'
import PropTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../infrastructure/theme/color'

export default function IcSuccess({ color, size }) {
  return <Ionicons name="checkmark-done-circle-outline" size={size} color={color} />
}

IcSuccess.propsTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcSuccess.defaultProps = {
  color: colors.success,
}