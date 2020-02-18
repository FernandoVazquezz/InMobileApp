import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FIVE_SECONDS = 5000;

export default class Splash extends React.Component {

    componentDidMount() {
        setTimeout(() => {
          this.props.navigation.navigate('Main');
        }, FIVE_SECONDS);
      }
    
      render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../images/SplashIcon.jpg')} />
            </View>
        );
     }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  logo:{
    width:300,
    height:300
  },
});