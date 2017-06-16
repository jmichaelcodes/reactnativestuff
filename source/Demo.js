import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class Demo extends Component {
	render() {
		return(
			<View style={styles.PinContainer}>
				<View style={styles.PinHeader}>
					<View style={styles.UtilityNav}>
						<Icon name='chevron-left' size={25} color="#000" />
						<Icon name='heart' size={25} color="#000" />
						<Icon name='share' size={25} color="#000" />
						<Icon name='ellipsis-h' size={20} color="#000" />
					</View>
					<View style={styles.PinButtonContainer}>
						<View style={styles.PinButton}>
							<Icon name='thumb-tack' size={20} color="#000" />
							<Text style={styles.PinButtonText}>Save</Text>
						</View>
					</View>
				</View>

				<View style={styles.PinContent}>
					<Text style={styles.ImagePlaceholder}>Placeholder</Text>
				</View>

				<View style={styles.PinMeta}>
					<View style={styles.PinMetaTextContainer}>
						<Text style={styles.PinMetaText}>Saved from</Text>
						<Text style={[styles.PinMetaText, styles.TextBold]}>website.com</Text>
					</View>
					<View style={styles.PinButtonContainer}>
						<View style={[styles.PinButton, styles.UtilityButton]}>
							<Text style={[styles.PinButtonText, styles.UtilityButtonText]}>Visit</Text>
						</View>
					</View>
				</View>

				<View style={styles.PinUser}>
					<View style={styles.PinUserAvatar}>
						
					</View>
					<View style={styles.PinUserContainer}>
						<Text style={styles.PinUserText}>
							<Text style={styles.TextBold}>User Name </Text>
							 saved to 
							<Text style={styles.TextBold}> Space</Text>
						</Text>
						<Text style={styles.PinUserText}>Lorem Ipsum</Text>
					</View>
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	PinContainer: {
		flex: 1,
		backgroundColor: "#f4f4f4",
		alignSelf: 'stretch',
	},
	PinHeader: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
		flex: 1,
		padding: 8,
	},
	UtilityNav: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1,
	},
	PinButton: {
		flexDirection: 'row',
		backgroundColor: 'red',
		borderRadius: 5,
		padding: 8,
		justifyContent: 'space-between',
		width: 60,
	},
	PinButtonText: {
		color: 'white'
	},
	PinButtonContainer: {
		flex: 1,
		alignItems: 'flex-end'
	},
	PinContent: {
		flex: 3,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: 8,
		paddingRight: 8,
	},
	ImagePlaceholder: {
		backgroundColor: '#c9c9c9',
		flex: 1,
		alignSelf: 'stretch',
		borderRadius: 6,
	},
	PinMeta: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 16,
		paddingRight: 8,
		paddingBottom: 16,
		paddingLeft: 8,
	},
	PinMetaTextContainer: {
		
	},
	UtilityButton: {
		backgroundColor: '#cecece',
		alignItems: 'center',
		justifyContent: 'center'
	},
	UtilityButtonText: {
		color: 'black',
		fontWeight: 'bold',
	},
	PinUser: {
		flex: 5,
		flexDirection: 'row',
		paddingLeft: 8,
		paddingRight: 8,
	},
	PinUserAvatar: {
		width: 50,
		height: 50,
		backgroundColor: 'black',
		borderRadius: 25,	
		marginRight: 8,
	},
	TextBold: {
		fontWeight: 'bold',
	},

})

export default Demo