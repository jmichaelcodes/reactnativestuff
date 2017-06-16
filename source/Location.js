/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import MapView from 'react-native-maps';

  
class gpsPage extends Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (
      <View style ={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
        <TouchableOpacity style={styles.fab}>
      <Image
          style={styles.navButton}
           source={require('../img/location.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignSelf: 'stretch',
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fab: {
  backgroundColor: 'green',
  position: 'absolute', 
  bottom: 16, 
  right: 16,
  width: 50,
  height: 50,
  borderRadius: 25,
},
  logoutButton: {
  width: 20, 
  height: 20, 
  },
  navButton: {
  position: 'absolute',
  bottom: 10,
  right: 10,
  width: 30, 
  height: 30, 
  },
});

export default gpsPage;
