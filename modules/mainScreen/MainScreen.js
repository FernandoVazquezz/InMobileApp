import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Services from './Services';
import Immovables from './Immovables';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inmuebles" component={Immovables} />
      <Tab.Screen name="Servicios" component={Services} />
    </Tab.Navigator>
  );
}

export default class MainScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
                ubication :'Santa Fe, CDMX'
                 }
  };

  render() {
      return (  
          <View style={styles.Container}>
              <View style={styles.Header}>
                <Icon name="bars" size={30} color="#fff"/>
                <TextInput style ={styles.input}
                              autoCapitalize="none"
                              placeholderTextColor="rgba(255, 255,255, 0.7)"
                              onChangeText={(ubication)=>this.setState({ubication:ubication})}
                              value={this.state.ubication}
                              maxLength={30}
                          />
                <Icon name="search" size={30} color="#fff"/>
              </View>
              <View style={styles.Immovables}>
              <MyTabs></MyTabs>    
              </View>
              </View>
      );
   }
}

const styles= StyleSheet.create({
  Container:{
      flex:1,
      alignContent:'flex-end',
  },
  Header:{
    flex:1,
    alignContent:'flex-end',
    backgroundColor:'#57B0EB',
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center'
  },
  input:{
    width: '70%',
    height: 35 ,
    borderStyle: 'solid',
    textAlign:'center',
    color : 'white',
    backgroundColor:'rgba(52, 52, 52, 0)',
    fontSize: 13,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
  },
  Immovables:{
    flex:15,
    alignContent:'flex-end',
  }
});