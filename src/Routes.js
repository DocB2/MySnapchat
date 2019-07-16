import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';





export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#ffff00',}} 
                titleStyle={{color: '#000000',}}
            >
                <Stack key="root">

                
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="signup" component={Signup} title="Sign up"/>
                <Scene key="home" component={Home} title="Home"/>
                </Stack>
            </Router>
        )
    }
}

const styles = {
    barButtonIconStyle: {
        tintColor: 'white'
    }
}