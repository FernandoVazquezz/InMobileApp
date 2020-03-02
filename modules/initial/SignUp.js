import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                    user: '',
                    email:'',
                    phone:'',
                    pass: '' ,
                     }
      };

    render() {
      return (  
          <ImageBackground source={require('../../images/fondocasa.jpg')} style={styles.container}>
              <View style={styles.logo}>
                 <Image  style={styles.imagelogo} source={require('../../images/LogoInMobileApp.png')} />
              </View>
              <View style={styles.form}>
                        <TextInput style ={styles.input}
                            placeholderTextColor="rgba(255, 255,255, 0.7)"
                            placeholder="Ingrese su Nombre"
                            autoCorrect={false}
                            keyboardType="default"
                            onChangeText={(user)=>this.setState({user:user})}
                            value={this.setState.user}
                            returnKeyType= "next"
                            blurOnSubmit={false}
                            maxLength={30}
                            onSubmitEditing={(event) => { this.refs.inputemail.focus(); }}
                        />
                        <TextInput style ={styles.input}
                            placeholderTextColor="rgba(255, 255,255, 0.7)"
                            autoCapitalize="none"
                            ref='inputemail'
                            placeholder="Ingrese su correo electrónico"
                            autoCorrect={false}
                            onChangeText={(email)=>this.setState({email:email})}
                            value={this.setState.email}
                            keyboardType="email-address"
                            returnKeyType= "next"
                            blurOnSubmit={false}
                            onSubmitEditing={(event) => { this.refs.inputphone.focus(); }}
                        />
                        <TextInput style ={styles.input}
                            placeholderTextColor="rgba(255, 255,255, 0.7)"
                            placeholder="Ingrese su Teléfono"
                            maxLength={10}
                            ref='inputphone'
                            autoCorrect={false}
                            keyboardType="numeric"
                            onChangeText={(phone)=>this.setState({phone:phone})}
                            value={this.setState.phone}
                            returnKeyType= "next"
                            blurOnSubmit={false}
                            onSubmitEditing={(event) => { this.refs.inputpass.focus(); }}
                        />
                        <TextInput style ={styles.input}
                            autoCapitalize="none"
                            ref='inputpass'
                            placeholder="Ingrese su contraseña"
                            placeholderTextColor="rgba(255, 255,255, 0.7)"
                            autoCorrect={false}
                            onChangeText={(pass)=>this.setState({pass:pass})}
                            value={this.setState.pass}
                            secureTextEntry={true}
                            maxLength={30}
                        />
              </View>
              <View style={styles.button}>
                        <TouchableOpacity
                        style={styles.buttonsignUp}
                        >
                            <Text style={{color:'white', fontSize:20}}> Registrarse </Text>
                        </TouchableOpacity>
              </View>
              <View style={styles.icons}>
                <Icon name="facebook-square" size={55} color="#1E9EE9"/>
                <Image  style={styles.imageIcon} source={require('../../images/Google_Logo.svg.png')} />
              </View>
          </ImageBackground>
      );
   }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    logo:{
        flex:3,
        justifyContent: 'center',
        alignItems:'center',
        alignContent: 'flex-start'
    },
    imagelogo:{
        width: '90%',
        height: '100%'
    },
    imageIcon:{
        width: 50,
        height: 50
    },
    form:{
        flex:3,
        justifyContent: 'center',
        alignItems:'center',
        alignContent: 'center',
    },
    input:{
        width: '80%',
        height: 45 ,
        margin: 2,
        borderStyle: 'solid',
        textAlign:'center',
        color : 'white',
        backgroundColor:'rgba(52, 52, 52, 0.5)',
        fontSize: 20,
        borderColor: '#1E9EE9',
        borderWidth: 3,
    },
    button:{
        flex:1,
        alignItems:'center',
        marginTop:10,
    
    },
    buttonsignUp:{
        backgroundColor: '#1E9EE9',
        width: '85%',
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center'   
    },
    icons:{
        flex:1,
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent: 'space-around',
    }
});