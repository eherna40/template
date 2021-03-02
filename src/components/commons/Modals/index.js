import React from 'react'
import { View, StyleSheet } from 'react-native'
import useTheme from '../../../infrastructure/hooks/useTheme'
import PropTypes from 'prop-types'

export default function Modals({ children }) {
  const { Flex, Position, Width, Height, Border, Shadows, Background, Padding } = useTheme()
  return (
    <View
      style={[
        Flex.flex1,
        Position.absolute,
        Position.top0,
        Position.left0,
        styles.container,
        Width.screen,
        Height.screen,
        Flex.justifyCenter,
        Flex.itemsCenter,
      ]}>
      <View
        style={[Width.w12t11, Background.white, Border.r6, Shadows.sm, Padding.px20, Padding.py15]}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.2)',
  },
})

Modals.propsTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
