/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, { createContext, useMemo, useState } from 'react'
import Navigation from './src/navigation/Navigation'
import { Provider } from 'react-redux'
import { persistor, store } from './src/infrastructure/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import i18n from './src/infrastructure/i18n/i18n'
export const LocalizationContext = createContext()

const App = () => {
  const [locale, setLocale] = useState('en');
  console.log(i18n)
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  );
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationContext.Provider value={localizationContext}>
          <Navigation />
        </LocalizationContext.Provider>
      </PersistGate>
    </Provider>
  )
}

export default App
