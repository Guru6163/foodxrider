import React from 'react'
import { Text } from 'react-native'
import Routes from './Routes';
import { NavigationContainer } from '@react-navigation/native';


function App() {
  return (
    <NavigationContainer>
    <Routes />
  </NavigationContainer>
  )
}

export default App