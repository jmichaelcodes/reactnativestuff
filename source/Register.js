/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

var width = Dimensions.get('window').width * .75; //full width
    var height = Dimensions.get('window').height; //full height

  
class Register extends Component {
    constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.register = this.register.bind(this)
  }

  register() {
    if(this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '' || this.state.confirmPassword === '') {
      alert('You must enter all fields')
    } else if (this.state.password !== this.state.confirmPassword) {
    alert('Your passwords must match')
    } else {
      alert('User has been registered')
    }
  }


  render() {
    return (
      <View style ={styles.container}>
      <View style={{alignSelf: 'stretch', marginTop: 50}}>
      <View style={{flexDirection: 'row'}}>
      <Icon name='user' size={30} color='#900' style={{position: 'relative', top: 10, left: 15}}/>
       <TextInput style = {styles.editText} onChangeText={(firstName) => this.setState({firstName}) } value={this.state.firstName} placeholder="First Name"/>
      </View>
       <TextInput style = {styles.editText} onChangeText={(lastName) => this.setState({lastName}) } value={this.state.lastName} placeholder="Last Name"/>
       <TextInput style = {styles.editText} onChangeText={(email) => this.setState({email}) } value={this.state.email} placeholder="Email"/>
       <TextInput style = {styles.editText} onChangeText={(password) => this.setState({password}) } value={this.state.password} placeholder="Password" secureTextEntry={true}/>
       <TextInput style = {styles.editText} onChangeText={(confirmPassword) => this.setState({confirmPassword}) } value={this.state.confirmPassword} placeholder="Confirm Password" secureTextEntry={true}/>
       <TouchableOpacity style = {styles.submitButton} text="Register" onPress={this.register} >
            <Text style={ styles.buttonText}  > Register</Text>
       </TouchableOpacity>
       <Text style={styles.loginLink} onPress={this.props.login}>Already a user? Login</Text>

       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    alignSelf: 'stretch'
  },
  editText: {
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    width: width,
  },
  submitButton: {
    alignSelf: 'stretch',
    margin: 20,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    height: 30,
    fontSize: 20,
  },
  loginLink: {
    textAlign: 'center',
  }
});

export default Register;
