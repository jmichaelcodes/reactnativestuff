import React, {Component} from 'react'
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class ToolbarLeft extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoAndSearch}>
					<Image style={styles.logo} source={require('../img/etsy.png')}/>
					<Icon name='search' size={20} color="#000" style={styles.searchIcon} />
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignSelf: 'stretch',
		flexDirection: 'row',
		height: 45,
	},
	logo: {
		marginLeft: 10,
		height: 50,
		width: 50,
	},
	logoAndSearch: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		position: 'absolute',
		top: 0,
		left: 0,
	},
	searchIcon: {
		position: 'relative',
		top: 10,
		left: 0,
		marginLeft:10,
	},
})

export default ToolbarLeft