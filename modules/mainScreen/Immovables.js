import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput,Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class Immovables extends React.Component {
  render() {
      return (  
          <View style={styles.Container}>
            <View style={styles.Filters}>
                <Text >+200 resultados</Text>
                <Text style={{color:'#57B0EB'}}>Filtrar</Text>
            </View> 
            <View style={styles.ContImmovables}>
                <View>
                    <TouchableOpacity style={styles.Immovable}>
                        <View>   
                            <Image  style={styles.logo} source={require('../../images/casa1.jpg')} />
                        </View>
                    <View>
                        <View style={styles.ImmovableDescriptionTop}>
                            <Text>Santa Fe, CDMX</Text>
                            <Image  style={styles.icon} source={require('../../images/sale-tag.png')} />
                        </View>
                        <View style={styles.ImmovableDescriptionMedium}>
                            <Text style={{fontSize:35}}>$ 948,000</Text>
                            <Text style={{fontSize:10, color:'#A1A1A1'}}>Hace 1 hora</Text>
                        </View>
                        <View style={styles.ImmovableDescriptionBotom}>
                            <Text style={{fontSize:15}}>1</Text>
                            <Image  style={styles.icon} source={require('../../images/cama.png')} />
                            <Text style={{fontSize:15}}>1</Text>
                            <Image  style={styles.icon} source={require('../../images/banera.png')} />
                            <Text style={{fontSize:15}}>15,000</Text>
                            <Image  style={styles.icon} source={require('../../images/m2.png')} />
                        </View>
                    </View>
                    </TouchableOpacity>
               </View>

               <View>
                    <TouchableOpacity style={styles.Immovable}>
                        <View>   
                            <Image  style={styles.logo} source={require('../../images/casa2.jpg')} />
                        </View>
                    <View>
                        <View style={styles.ImmovableDescriptionTop}>
                            <Text>Santa Fe, CDMX</Text>
                            <Image  style={styles.icon} source={require('../../images/en-venta.png')} />
                        </View>
                        <View style={styles.ImmovableDescriptionMedium}>
                            <Text style={{fontSize:35}}>$ 648,000</Text>
                            <Text style={{fontSize:10, color:'#A1A1A1'}}>Hace 1 hora</Text>
                        </View>
                        <View style={styles.ImmovableDescriptionBotom}>
                            <Text style={{fontSize:15}}>1</Text>
                            <Image  style={styles.icon} source={require('../../images/cama.png')} />
                            <Text style={{fontSize:15}}>1</Text>
                            <Image  style={styles.icon} source={require('../../images/banera.png')} />
                            <Text style={{fontSize:15}}>15,000</Text>
                            <Image  style={styles.icon} source={require('../../images/m2.png')} />
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
    Filters:{
        width:'100%',
        height:'5%',
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        justifyContent:'space-between',
        backgroundColor:'white'
    },
    ContImmovables:{
        flex:1,
    },
    Immovable:{
        width:'100%',
        flexDirection: 'row',
        backgroundColor:'white',
        padding:2
    },
    ImmovableDescriptionTop:{
        flexDirection:'row',
        width:'67%',
        paddingHorizontal:16,
        paddingTop:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    ImmovableDescriptionMedium:{
        paddingHorizontal:10,
    },
    ImmovableDescriptionBotom:{
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
    }
  });