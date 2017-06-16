import React, {Component} from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    email: '',
    password: ''
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={{alignSelf: 'stretch', marginTop: 50}}>
        <Image style={styles.emailIcon} source={require('../img/email.png')}/>
        <TextInput style = {styles.editText} onChangeText={(email) => this.setState({email}) } value={this.state.email} placeholder="Email"/>
        </View>
        <View style={{alignSelf: 'stretch'}}>
         <Image style={styles.passwordIcon} source={require('../img/password.png')}/>
        <TextInput style = {styles.editText} onChangeText={(password) => this.setState({password}) } value={this.state.password} placeholder="Password" secureTextEntry={true}/>
        </View>
        <TouchableOpacity style = {styles.loginButton} onPress={this.props.toMain}>
          <Text style= {styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.linkedInButton} onPress={this.props.linkedInLogin}>
          <Text style= {styles.buttonText}>Login with LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.googleButton} onPress={this.props.googleLogin}>
          <Text style= {styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
        <Text style = {styles.registerLink} onPress={this.props.register}>Register</Text>
      </View>
      )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    alignSelf: 'stretch'
  },
  horizontalRow: {
    flex: 1,
    flexDirection: 'row'
  },
  emailIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 20,
    top: 17,
  },
  passwordIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 20,
    top: 17,
  },
    editText: {
    alignSelf: 'stretch',
    marginLeft: 40,
    marginRight: 20,
  },
  loginButton: {
    alignSelf: 'stretch',
    margin: 20,
    backgroundColor: 'green',
  },
   linkedInButton: {
    alignSelf: 'stretch',
    margin: 20,
    backgroundColor: 'lightblue',
  },
   googleButton: {
    alignSelf: 'stretch',
    margin: 20,
    marginTop: 0,
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  registerLink: {
    textAlign: 'center'
  },

})

export default Login