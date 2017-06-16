import React, {Component} from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View
} from 'react-native'

class Row extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style = {styles.container}>
				<Image source={{uri: this.props.avatar}} style={{height: 40, width: 40, borderRadius: 20}}/>
				<Text style={{textAlign: 'center'}} >{this.props.firstName} {this.props.lastName}</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 20,
	}
})

export default Row