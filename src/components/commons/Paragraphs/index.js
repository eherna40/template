import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import useTheme from '../../../infrastructure/hooks/useTheme'

export default function Paragraphs({ children, style, size }) {
  const { fontSize} = useTheme()

  return (
    <View>
      <Text style={[...style, fontSize[size]]}>{children}</Text>
    </View>
  )
}

Paragraphs.propsTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  style: PropTypes.array,
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', 'xl2', 'xl3', 'xl4', 'xl5', 'xl6', 'xl7', 'xl8', 'xl9', 'xl10'])
}

Paragraphs.defaultProps = {
  style: [],
  size: 'base'
}
