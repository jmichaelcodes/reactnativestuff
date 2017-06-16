import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

class BrowseHeader extends Component {
	render() {
		return (
				<View style={styles.container}>
					<View style={styles.sectionHeader}>
						<Text style={styles.sectionPath}>{this.props.mainPath}</Text>
						<Icon name='chevron-right' size={20} color='gray'/>
						<Text style={styles.sectionPath}>{this.props.secondaryPath} ({this.props.results}) items</Text>
					</View>
					<Text style={styles.sectionTitle}>{this.props.title}</Text>
					<Text style={styles.sectionSubHeader}>{this.props.description}</Text>
				</View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		margin: 10,
		// alignSelf: 'stretch',
	},
	sectionHeader: {
		flexDirection: 'row'
	},
	sectionTitle: {
		fontSize: 25,
		marginTop: 5,
		marginBottom: 5,
		color: 'black'
	}

})

export default BrowseHeader