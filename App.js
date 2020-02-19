import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createSwitchNavigator } from '@react-navigation/stack';
import Login from './modules/initial/Login';
import Splash from './modules/initial/Splash';
import SignUp from './modules/initial/SignUp';
import Main from './modules/initial/Main';
import MainScreen from './modules/mainScreen/MainScreen';

const Stack = createStackNavigator();

function rootMain() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="rootMain" component={rootMain} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}