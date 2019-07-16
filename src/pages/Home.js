import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Form from '../components/Form';


import {Actions} from 'react-native-router-flux';




export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
      }
      


    componentDidMount = () => {

        fetch("http://10.18.207.147:27043/api/users", {method: "GET"}).
        then(response => response.json()).
        then(result => {
          this.setState({
            data: result
            
          });

          
          console.log(this.state.data)
        });
        
      }

    render () {
        return (
            
            <View style={styles.container}>
                <Text>Bienvenue sur My Snapchat!</Text>
<ScrollView>
{
            this.state.data.map((item, index) => {
              return (
                <Text key={index}>{item.email}</Text>
                
                
              ); 
            })
          }
                
                
            </ScrollView>
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
  