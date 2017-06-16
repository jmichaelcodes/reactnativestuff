import React, {Component} from 'react'
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ToolbarLeft from './ToolbarLeft'
import ToolbarRight from './ToolbarRight'

var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height

class EtsyToolbar extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ToolbarLeft/>
				<ToolbarRight/>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		flexWrap: 'wrap',
		justifyContent: 'center',
			flexDirection: 'row',
		width: width,
		height: 50,
		// backgroundColor: 'red'
	},
	rowContainer: {
		backgroundColor: 'white',
		// flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		// flex: 1,
		padding: 8,
	},
	logo: {
		height: 50,
		width: 50,
	},
	logoAndSearch: {
		flex: 3,
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
	buttonBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end'
	},
	signInButton:  {
		borderRadius: 3,
		borderColor: 'orange',
		borderWidth: 1,
	},
	signInText: {
		color: 'orange',
		padding: 5,
	}
})

export default EtsyToolbar