import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoadScreen from '../screens/LoadScreen'
import LoginScreen from '../screens/LoginScreen'
import RecoverScreen from '../screens/RecoverScreen'
import RecoverSuccessScreen from '../screens/RecoverSuccessScreen'

const Stack = createStackNavigator()

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Load" component={LoadScreen} />
      <Stack.Screen name="LoginStack" component={LoginStack} />
    </Stack.Navigator>
  </NavigationContainer>
)

const LoginStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Recover" component={RecoverScreen} />
    <Stack.Screen name="RecoverSuccess" component={RecoverSuccessScreen} />
  </Stack.Navigator>
)

export default Navigation
