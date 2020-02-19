import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                    email :'',
                    pass: '' ,
                     }
      };

      validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
            Alert.alert(
                'Datos incorrectos',
                'Verifique los datos ingresados',
                [
                  {
                    text: 'ACEPTAR',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  }
                ],
                {cancelable: false},
              );
        console.log("Email is Not Correct");
        this.setState({email:text})
        return false;
          }
        else {
          this.setState({email:text})
          console.log("Email is Correct");
        }

        const {pass} = this.state;

            if(pass.length < 8) {
                Alert.alert(
                    'Contraseña demasiado pequeña',
                    'El minimo de caracteres que debe utilizar es 8',
                    [
                      {
                        text: 'ACEPTAR',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      }
                    ],
                    {cancelable: false},
                  );
            }
        }
  
    render() {
        return (
            <ImageBackground source={require('../../images/fondocasa.jpg')} style={styles.Container}>
                    <View style={styles.formu}>
                        
                            <Image  style={styles.imagelogo} source={require('../../images/inmobileapp.jpg')} />
                        
                        <TextInput style ={styles.inputemail}
                            placeholderTextColor="rgba(255, 255,255, 0.7)"
                            autoCapitalize="none"
                            placeholder="Enter your email"
                            autoCorrect={false}
                            onChangeText={(email)=>this.setState({email:email})}
                            value={this.setState.email}
                            keyboardType="email-address"
                            returnKeyType= "next"
                            blurOnSubmit={false}
                            onSubmitEditing={(event) => { this.refs.inputpass.focus(); }}
                        />
                        <TextInput style ={styles.inputpass}
                            autoCapitalize="none"
                            ref='inputpass'
                            placeholder="Enter your password"
                            placeholderTextColor="rgba(255, 255,255, 0.7)"
                            autoCorrect={false}
                            onChangeText={(pass)=>this.setState({pass:pass})}
                            value={this.setState.pass}
                            secureTextEntry={true}
                            maxLength={10}
                        />
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                        style={styles.buttonValidate}
                        onPress={() => this.validate(this.state.email)}
                        >
                            <Text style={{color:'white', fontSize:20}}> Log In </Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        );
     }
}

const styles= StyleSheet.create({
    Container:{
        flex:1,
        alignContent:'flex-end',
    },
    imagelogo:{
        marginBottom:130,
        opacity:.7,
        width: '110%',
        transform: [
          { rotateZ: '-15deg'},
    
        ],
      },
    formu:{
        flex:3,
        justifyContent: 'flex-end',
        alignItems:'center'
    },
    inputemail:{
        width: '80%',
        height: 45 ,
        borderStyle: 'solid',
        textAlign:'center',
        color : 'white',
        backgroundColor:'rgba(52, 52, 52, 0.5)',
        fontSize: 20,
        borderColor: '#1E9EE9',
        borderWidth: 2,
    },
    inputpass:{
        marginTop: 10,
        width: '80%',
        height: 45 ,
        borderStyle: 'solid',
        textAlign:'center',
        color : 'white',
        backgroundColor:'rgba(52, 52, 52, 0.5)',
        fontSize: 20,
        borderColor: '#1E9EE9',
        borderWidth: 2,
    },
    button:{
        flex:1,
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center'
    },
    buttonValidate:{
        backgroundColor: '#1E9EE9',
        width: '85%',
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent:'center',
        alignItems:'center'
    }
});
