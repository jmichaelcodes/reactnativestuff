/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'; 
import {
  AppRegistry,
  DrawerLayoutAndroid,
  Modal,
  StyleSheet,
  Button,
  Image,
  Picker,
  Switch,
  ToastAndroid,
  ToolbarAndroid,
  TouchableElement,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
  
class Extras extends Component {
  constructor(props) {
    super(props)
    this.state = {
    modalVisible: false,
    language: 'You should make a selection',
    value: false,
    }
  }

    setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

    notification() {
      alert('notification to launch here')
    }

    switchSwitch() {
      if (this.state.value) {
        this.setState({value: false})
      } else {
        this.setState({value: true})
      }
    }

  render() {
    return (
      <View style={styles.container}>

              <View style={{marginTop: 22}}>
        <Modal
          style={{width: 100, height: 100, backgroundColor: 'orange' }}
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <TouchableOpacity style={{backgroundColor: 'yellow', alignSelf: 'stretch', margin: 20, borderRadius: 5, borderWidth: .5}} onPress={() => ToastAndroid.show('Heres a toast', ToastAndroid.LONG)}>
            <Text style={{textAlign: 'center'}}>{this.state.language}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: 100, alignSelf: 'center'}} onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{textAlign: 'center', backgroundColor: 'red', borderWidth: 1, fontWeight: 'bold', color: 'white'}}>Hide Modal</Text>
            </TouchableOpacity>

          </View>
         </View>
        </Modal>
        <Switch value={this.state.value} onValueChange={this.switchSwitch.bind(this)}/>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
          style={{width: 200}}> 
          <Picker.Item label="Default label" value="You should select a label"/>
          <Picker.Item label="Here is label 1" value="You have chosen the first label" />
          <Picker.Item label="This is label 2" value="You have chosen label 2" />
        </Picker>
        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text style={{textAlign: 'center'}}>Show value in modal</Text>
        </TouchableHighlight>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    alignSelf: 'stretch'
  },
});

export default Extras;
