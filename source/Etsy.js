import React, {Component} from 'react'
import {
	Image,
	View,
	StyleSheet,
	TextInput,
	ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons'

import EtsyToolbar from '../components/EtsyToolbar'
import SearchBar from '../components/SearchBar'
import BrowseHeader from '../components/BrowseHeader'
import ItemRow from '../components/ItemRow'

class Etsy extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<EtsyToolbar/>
					<SearchBar/>
					<BrowseHeader mainPath='Home' secondaryPath='Home & Living' results='7,611,761' title='Home & Living' description='Wall decor, candles, and furniture to make your home yours'/>
					<ItemRow leftTitle='Left' rightTitle='Right'/>
					<ItemRow leftTitle='Left' rightTitle='Right'/>
					<ItemRow leftTitle='Left' rightTitle='Right'/>
					<ItemRow leftTitle='Left' rightTitle='Right'/>
					<ItemRow leftTitle='Left' rightTitle='Right'/>
					<ItemRow leftTitle='Left' rightTitle='Right'/>
					<ItemRow leftTitle='Left' rightTitle='Right'/>
					<ItemRow leftTitle='Left' rightTitle='Right'/>
				</ScrollView>

				</View>
			)
	}
}	

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-start'
	},
})

export default Etsy