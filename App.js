import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, OnBoardingScreen, Item, ItemsScreen } from './screens';
import "react-native-url-polyfill/auto";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="ItemsScreen" component={ItemsScreen}/>
        <Stack.Screen name="Item" component={Item}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
