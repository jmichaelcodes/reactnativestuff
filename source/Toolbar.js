import React, { Component } from 'react'

import {
	StyleSheet,
	ToolbarAndroid,
	View,
} from 'react-native'

class Toolbar extends Component {
	render() {
		return (
			<View style={styles.container}>
	<ToolbarAndroid
        // logo={require('../img/logout.png')}
        title={this.props.title}
        style={{backgroundColor: 'red', height: 58, alignSelf: 'stretch'}}
        actions={[{title: 'Settings', icon: require('../img/logout.png'), show: 'always'}]}
        onActionSelected={this.props.logout} 
      />
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    alignSelf: 'stretch'
  },
});

export default Toolbar