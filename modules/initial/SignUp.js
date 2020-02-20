import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SigSignUpnIn extends React.Component {
  
    render() {
      return (  
          <View>
              <Text >
              <Icon name="comments" size={30} color="#900" />
              </Text>
          </View>
      );
   }
}