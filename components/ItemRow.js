import React, {Component} from 'react'
import {
	StyleSheet,
	View
} from 'react-native'

import ItemBox from './ItemBox'

class ItemRow extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ItemBox title={this.props.leftTitle}/>
				<ItemBox title={this.props.rightTitle}/>
			</View>
			)
	}
}

const styles=StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#f4f4f4'
	}
})

export default ItemRow