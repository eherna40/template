import React from 'react'
import PropTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../infrastructure/theme/color'

export default function IcInfo({ color, size }) {
  return <Ionicons name="information-circle-outline" size={size} color={color} />
}

IcInfo.propsTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcInfo.defaultProps = {
    color: colors.info,
  }