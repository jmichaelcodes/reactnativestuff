/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'; 
import {
  AppRegistry,
  BackAndroid,
  BackHandler,
  StyleSheet,
  Button,
  TouchableElement,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import MainPage from "./source/Main"
import Location from "./source/Location"
import Login from "./source/Login"
import Register from "./source/Register"
import LinkedIn from "./source/LinkedIn"
import Google from "./source/Google"
import Extras from "./source/Extras"
import Toolbar from "./source/Toolbar"
import List from "./source/List"
import Demo from './source/Demo'
import Etsy from './source/Etsy'
  
export default class Test extends Component {
     constructor(props) {
        super(props);
        this.state = {
            //indicate route location
            route: "Etsy",
        };

        this.backButton = this.backButton.bind(this)
    }

    componentWillMount() {
      this.backButton()
    }

    toGPS() {
      this.setState({route: "Gps"})
    }

    toLogin() {
      this.setState({route: "Login"})
    }

    toMain() {
      this.setState({route: 'Main'})
    }

    notification() {
      alert('notification to launch here')
    }

    toRegister() {
      this.setState({route: 'Register'})
    }

    toLinkedIn() {
      // alert('asdfasdf')
      this.setState({route: 'Linkedin'})
    }

    toGoogle() {
      this.setState({route: 'Google'})
    }

    toExtras() {
      this.setState({route: 'Extras'})
    }

    toList() {
      this.setState({route: 'List'})
    }

    toDemo() {
      this.setState({route: 'Demo'})
    }

    backButton() {
    BackHandler.addEventListener("hardwareBackPress", () => {
    if (this.state.route === 'Register') {
    this.setState({route : 'Login'})
    return true // do not exit app
  } else if (this.state.route === 'Gps') {
    this.setState({route: 'Main'})
    return true
  } else if (this.state.route === 'Extras') {
    this.setState({route: 'Main'})
    return true
  } else {
    return false // exit app
  }
})
  }

    render() {

        //page route system
        let route;
        switch (this.state.route) {
            //default page, watch public images

            case "Login":
                route = <Login
                toMain={this.toMain.bind(this)}
                register={this.toRegister.bind(this)}
                linkedInLogin={this.toLinkedIn.bind(this)}
                googleLogin ={this.toGoogle.bind(this)}
                />;
                break;
            case "Main":
                route = <MainPage
                  logout={this.toLogin.bind(this)}
                  toGPS={this.toGPS.bind(this)}
                  notification={this.notification.bind(this)}
                  extras={this.toExtras.bind(this)}
                  toList={this.toList.bind(this)}
                  toDemo={this.toDemo.bind(this)}

                />;
                break;
            case "Gps":
                route = <Location
                />;
                break;
            case "Register":
                route = <Register
                toMain={this.toMain.bind(this)}
                login={this.toLogin.bind(this)}
                />;
                break;
            case "Linkedin":
                route = <LinkedIn
                toMain={this.toMain.bind(this)}
                />;
                break;
            case "Google":
                route = <Google/>
                break;
            case "Extras":
                route = <Extras/>
                break;
            case "List":
                route = <List
                />
                break;
            case "Demo":
                route = <Demo/>
                break;
            case "Etsy": 
                route = <Etsy/>
                break;
  }

return (
                <View style={styles.container}>
                 
                    {route}
                </View>
        );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Test', () => Test);