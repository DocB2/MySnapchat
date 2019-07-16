import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard, Image } from 'react-native';

import {Actions} from 'react-native-router-flux';

import Form from '../components/Form';

export default class Login extends Component {

    signup() {
        Actions.signup()
    }

    render() {
        return(
                <View style={styles.container}>

                <Image
                    style={styles.stretch}
                    source={require('../img/MySnapchat_logo.png')}
                />
                <Text>{'\n'}</Text>
                <Text>{'\n'}</Text>
                <Form type="Login"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Pas encore de compte?! </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Inscription</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
      color: '#12799f', 
      fontSize:16,
    },
    signupButton: {
        color: '#0277bd',
        fontSize:16,
        fontWeight: '500',
    },
    stretch: {
        width: 200,
        height: 200
      }
});