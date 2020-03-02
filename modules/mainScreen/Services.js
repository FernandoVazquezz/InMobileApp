import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Services extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                    ubication :'Todos los resultados'
                     }
      };

  render() {
      return (  
          <View style={styles.Container}>
            <View style={styles.Search}>
                <TextInput style ={styles.input}
                              autoCapitalize="none"
                              placeholderTextColor="rgba(255, 255,255, 0.7)"
                              onChangeText={(ubication)=>this.setState({ubication:ubication})}
                              value={this.state.ubication}
                              maxLength={30}
                />
                <Icon name="search" size={30} color="#57B0EB" style={{marginLeft:15}}/>
            </View> 

            <View style={styles.ContServices}>
                <View>
                    <TouchableOpacity style={styles.Service}>
                        <View>   
                            <Image  style={styles.logo} source={require('../../images/notaria.jpg')} />
                        </View>
                    <View>
                        <View style={styles.ServiceDescriptionTop}>
                            <Text style={{fontSize:18}}> Notaria Santa Fe, CDMX</Text>
                        </View>
                        <View style={styles.ServiceDescriptionMedium}>
                            <Text style={{fontSize:10,textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore magna aliqua.</Text>
                        </View>
                        <View style={styles.ServiceDescriptionBotom}>
                        </View>
                    </View>
                    </TouchableOpacity>
               </View>
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
    Search:{
        width:'100%',
        height:'6%',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        justifyContent:'center',
        backgroundColor:'white',
        
    },
    ContServices:{
        flex:1,
    },
    Service:{
        width:'100%',
        flexDirection: 'row',
        backgroundColor:'white',
        padding:2
    },
    ServiceDescriptionTop:{
        flexDirection:'row',
        width:'79%',
        paddingHorizontal:16,
        paddingTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    ServiceDescriptionMedium:{
        paddingHorizontal:10,
        paddingVertical:5,
        alignContent:'center',
        width:'79%'
    },
    ServiceDescriptionBotom:{
        flexDirection:'row',
        width:'65%',
        paddingVertical:15,
        paddingHorizontal: 10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    logo:{
        width: 150,
        height: 155,
        borderRadius:20
    },
    icon:{
        width: 30,
        height: 30,
    },
    input:{
        width: '70%',
        height: 35 ,
        borderStyle: 'solid',
        textAlign:'center',
        color : '#57B0EB',
        backgroundColor:'rgba(52, 52, 52, 0)',
        fontSize: 12,
        borderColor: '#57B0EB',
        borderWidth: 2,
        borderRadius: 30,
  },
  });