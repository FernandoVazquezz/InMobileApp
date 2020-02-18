import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'MainScreen',
      };
    render() {
      return (  
          <View>
              <Text >
                MainScreen
              </Text>
          </View>
      );
   }
}
