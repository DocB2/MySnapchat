import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Form from '../components/Form';


import {Actions} from 'react-native-router-flux';



export default class Home extends Component {
    render () {
        return (
            <View style={styles.container}>
                
                <Text>Bienvenue sur My Snapchat!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff00'
    }
});
  