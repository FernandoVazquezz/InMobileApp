import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, Alert, Image , BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Main({ navigation }) {

      return (  
        
          <View style={styles.background}>
              <ImageBackground source={require('../../images/background.jpg')} style={styles.ImageBackground}>
              <Image  style={styles.logo} source={require('../../images/Welcome_InMobileApp.png')} />
              <TouchableOpacity
                style={styles.buttonSignUp}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={{color:'white', fontSize:20}}> Sign Up </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonLogIn}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={{color:'#1E9EE9', fontSize:20}}> Log In </Text>
              </TouchableOpacity>
              </ImageBackground>
          </View>
      );
   
}

export default Main

const styles = StyleSheet.create({
  background: {
    flex:1
  },
  logo:{
    marginBottom:200,
    width: '90%',
    height:'30%',
  },
  ImageBackground:{
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonSignUp: {
    backgroundColor:'#1E9EE9',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 50 ,
    borderRadius: 20,
    marginBottom:10,
    opacity: .8
  },
  buttonLogIn: {
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '75%',
    height: 50 ,
    borderRadius: 20,
    marginBottom: 50,
    opacity: .8
  },
});