import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import Paragraphs from '../Paragraphs'
import PropTypes from 'prop-types'
import useTheme from '../../../infrastructure/hooks/useTheme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../infrastructure/theme/color'

export default function Button({ style, type, disabled, icon, onlyIcon, onPress, loading }) {
  const { Background, Border, Padding, Opacity, Flex, Color } = useTheme()
  const getStyles = () => {
    const styles = [
      Padding.py15,
      Padding.px15,
      Border.r4,
      disabled && Opacity.o40,
      Flex.row,
      Flex.itemsCenter,
      Flex.justifyCenter,
    ]
    switch (style) {
      case 'filled':
        styles.push(Background[type])
        return styles
      case 'border':
        styles.push(Border[type])
        styles.push(Border.width1)
        return styles
      case 'flat':
        return styles
      default:
        return []
    }
  }

  const getStylesText = () => {
    const styles = [icon && Padding.pl10, style === 'filled' ? Color.white : Color[type]]
    return styles
  }
  const getIcon = () => {
    const color = style === 'border' ? colors[type] : colors.white
    switch (type) {
      case 'info':
        return <Ionicons name="information-circle-outline" size={16} color={color} />
      case 'warning':
        return <Ionicons name="warning-outline" size={16} color={color} />
      case 'alert':
        return <Ionicons name="alert-circle-outline" size={16} color={color} />
      default:
        return null
    }
  }
  return (
    <TouchableOpacity style={getStyles()} disabled={disabled} onPress={loading ? null : onPress}>
      {loading ? (
        <ActivityIndicator color={style === 'border' ? colors[type] : colors.white} />
      ) : (
        <>
          {icon && getIcon()}
          {!onlyIcon && <Paragraphs style={getStylesText()}>Texto</Paragraphs>}
        </>
      )}
    </TouchableOpacity>
  )
}

Button.propsTypes = {
  style: PropTypes.oneOf(['filled', 'border', 'flat', 'disabled', 'round', 'roundBorder']),
  type: PropTypes.oneOf(['primary', 'secondary', 'alert', 'warning', 'info', 'success', 'dark']),
  disabled: PropTypes.bool,
  icon: PropTypes.bool,
  onlyIcon: PropTypes.bool,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
}

Button.defaultProps = {
  style: 'flat',
  type: 'warning',
  disabled: false,
  icon: true,
  onlyIcon: false,
  onPress: null,
  loading: false,
}
