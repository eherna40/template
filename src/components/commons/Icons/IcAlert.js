import React from 'react'
import PropTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../infrastructure/theme/color'

export default function IcAlert({ color, size }) {
  return <Ionicons name="alert-circle-outline" size={size} color={color} />
}

IcAlert.propsTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
IcAlert.defaultProps = {
  color: colors.alert.dark,
  size: 18,
}