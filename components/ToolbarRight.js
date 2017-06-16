import React, {Component} from 'react'
import {
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class ToolbarRight extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.buttonBar}>
					<Text style={styles.sellText}>
						Sell
					</Text>
					<TouchableOpacity style={styles.signInButton}>
						<Text style={styles.signInText}>
							Sign In
						</Text>
					</TouchableOpacity>
					<Icon name='shopping-cart' size={20} color="#000" style={styles.cartIcon} />
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		alignSelf: 'stretch',
		// flexDirection: 'row',
		height: 45,
	},
	buttonBar: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		paddingLeft: 15,
		paddingRight: 15,
	},
	sellText: {
		color: 'gray',
		paddingBottom: 10,
	},
	signInButton:  {
		borderRadius: 3,
		borderColor: 'orange',
		borderWidth: 1,
		marginBottom: 5,
	},
	signInText: {
		color: 'orange',
		padding: 5,
	},
	cartIcon: {
		paddingBottom: 10,
	}
})

export default ToolbarRight