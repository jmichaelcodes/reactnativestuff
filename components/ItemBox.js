import React, {Component} from 'react'
import {
	StyleSheet,
	Image,
	View,
	Text,
} from 'react-native'

class ItemBox extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.itemBox} source={{uri: 'https://unsplash.it/200'}}/>
				<Text style={styles.itemText}>{this.props.title}</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 5,
		borderWidth: 1,
		margin: 10,
		height: 200,
	},
	itemBox: {
		height: 150,
	},
	itemText: {
		fontSize: 25,
		borderTopWidth: 1,
		textAlign: 'center'
	}
})

export default ItemBox