import React from 'react'
import { StyleSheet, View } from 'react-native'
import Modals from '..'
import PropTypes from 'prop-types'
import useTheme from '../../../../infrastructure/hooks/useTheme'
import IcAlert from '../../Icons/IcAlert'
import Paragraphs from '../../Paragraphs'

export default function SimpleAlert({ type }) {
  const { Background, Border, Flex } = useTheme()
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
      <View>
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
        <View>
          <Paragraphs>
            
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
}

const styles = StyleSheet.create({
  rounded: {
    height: 40,
    width: 40,
  },
})
