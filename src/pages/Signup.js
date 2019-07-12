import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {

    goBack() {
        Actions.pop()
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
                <Form type="Signup"/>
                <View style={styles.signupTextCont}> 
                    <Text style={styles.signupText}>Tu as déjà un compte?! </Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Connexion</Text></TouchableOpacity>
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
      backgroundColor: '#f5f5f5'
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row'
    },
    signupText: {
      color: '#12799f', 
      fontSize:16
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500'
    },
    stretch: {
        width: 200,
        height: 200
      }
});