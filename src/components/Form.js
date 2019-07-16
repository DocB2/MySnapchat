import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import axios from 'axios'

import {Actions} from 'react-native-router-flux';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
      }
      
      home(){
          Actions.home()
      }

      
      saveData = () => {
        fetch('http://10.18.207.147:27043/api/user', {
            method: 'POST',
            headers: { 
                     'Accept': 'application/json',
                     'Content-Type': 'application/json' 
                     },
            body: JSON.stringify({email: this.state.email, password: this.state.password})
          })
          .then((response) => response.json())
          .then((responseData) => { console.log("response: " + responseData); })
          .catch((err) => { console.log(err); });
          
          
        }





   /* constructor(props){
        super(props);
        this.state={
            login: '',
            email:'',
            password: ''
        }
    }

    cook() {
        Actions.home()
    }

    saveData = async() => {

    

        const {login, email,password} = this.state;

        //save data with asyncstorage
        let loginDetails={
            login: login,
            email: email,
            password: password
        }

        if(this.props.type !== 'Login')
        {
            return fetch('https://10.18.207.147:27043/api/user', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({  
                    login: this.state.login,
                  email: this.state.email,
                  password: this.state.password,
                }),
              });
            
        }
        else if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);

                if (ld.email != null && ld.password != null)
                {
                    if (ld.email == email && ld.password == password)
                    {
                        alert('Vous êtes bien connecté(e)!')
                        this.props.type = this.cook()
                        
                    }
                    else
                    {
                        alert('Email ou mot de passe incorrect!');
                    }
                }

            }catch(error)
            {
                alert(error);
            }
        }
        console.log (login, email, password)
    }

    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
    }
*/
    render() {
        return(
             <ScrollView>
            <View style={styles.container}>

          <TextInput style={styles.inputBox}
                onChangeText={(email) => this.setState({email})}
                value={this.state.text}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}/>

                
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                value={this.state.text}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
                ref={(input) => this.password = input}
                />
                
                <TouchableOpacity style={styles.button} onPress={this.saveData}> 
                    <Text style={styles.buttonText} >{this.props.type}</Text>
                </TouchableOpacity>  

                <TouchableOpacity style={styles.button} onPress={this.home}> 
                    <Text style={styles.buttonText} >Mode Test</Text>
                </TouchableOpacity>    
                
             
            </View>
           </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#ffffff', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000000',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#0277bd',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});