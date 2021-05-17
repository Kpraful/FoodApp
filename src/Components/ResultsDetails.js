import React from 'react'
import {
	Text,
	View,
	Image,
	StyleSheet,
} from 'react-native'

// results==="Business object"
const ResultsDetails = ({
	result
}) => {

	return (
		<View style={styles.container}>

			<Image style={styles.image} source={{uri:result.image_url}}/>
			<Text style={styles.name}> {result.name} </Text>
			<Text style={{marginBottom:10,marginLeft: 15 }}>{result.rating} Stars ,{result.review_count} Reviews </Text>
		</View>

	)
}
const styles = StyleSheet.create({

	container: {
		marginLeft: 15,
	},

	viewStyle: {
		flexDirection: 'column',
	},

	image: {
		width: 200,
		height: 200,
		borderRadius: 4,
	},
	name: {

		fontWeight: 'bold',
		fontSize: 14,
	}
})
export default ResultsDetails;