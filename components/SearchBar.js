import React, {Component} from 'react'
import {
	Dimensions,
	StyleSheet,
	TextInput,
	View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

var width = Dimensions.get('window').width * .75; //full width

class SearchBar extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.editText} placeholder='Search for items or shops' underlineColorAndroid='transparent'/>
				<Icon style={styles.searchIcon} name='search' size={20} color='#fff'/>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		flexDirection: 'row',
		// borderRadius: 5,
		borderWidth: 1,
		borderColor: 'black',
		height: 50,
		margin: 10,
		justifyContent: 'space-between'
	},
	editText: {
	    alignSelf: 'stretch',
	    marginLeft: 20,
	    marginRight: 20,
	    width: width,
	},
	searchIcon: {
		flexDirection: 'column',
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: 'darkorange',
		// alignSelf: 'stretch',
		padding: 10
	}
})

export default SearchBar