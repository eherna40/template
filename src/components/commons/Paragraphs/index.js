import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export default function Paragraphs({ children, style }) {
  return (
    <View>
      <Text style={[...style]}>{children}</Text>
    </View>
  )
}

Paragraphs.propsTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  style: PropTypes.array,
}

Paragraphs.defaultProps = {
  style: [],
}
