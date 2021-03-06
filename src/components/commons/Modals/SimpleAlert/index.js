import React from 'react'
import { StyleSheet, View } from 'react-native'
import Modals from '..'
import PropTypes from 'prop-types'
import useTheme from '../../../../infrastructure/hooks/useTheme'
import IcAlert from '../../Icons/IcAlert'
import Paragraphs from '../../Paragraphs'

export default function SimpleAlert({ type, description, title }) {
  const { Background, Border, Flex, Padding } = useTheme()
  const getIcon = () => {
    switch (type) {
      case 'alert':
        return <IcAlert />

      default:
        return null
    }
  }
  return (
    <Modals>
      <View style={[Flex.row]}>
        <View>
          <View
            style={[
              styles.rounded,
              Background[type + 'Light'],
              Border.rfull,
              Flex.itemsCenter,
              Flex.justifyCenter,
            ]}>
            {getIcon()}
          </View>
        </View>
        <View style={[Padding.px10]}>
          <Paragraphs size={'base'}>
            {title}
          </Paragraphs>
          <Paragraphs size='sm'>
            {description}
          </Paragraphs>
        </View>
      </View>
    </Modals>
  )
}

SimpleAlert.propsTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'alert', 'warning', 'info', 'success', 'dark']),
}

SimpleAlert.defaultProps = {
  type: 'alert',
  description: 'description',
  title: 'title'
}

const styles = StyleSheet.create({
  rounded: {
    height: 40,
    width: 40,
  },
})
