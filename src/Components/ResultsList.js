import React from 'react'

import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native'

import ResultsDetails from './ResultsDetails'

const ResultsList = ({
	results,
	title,
	navigation,
}) => {
	return (
		<View>
		<Text style={styles.title}>
			{title}
		</Text>
	<FlatList

		horizontal={true}

		showsHorizontalScrollIndicator={false}

		data={results}

		keyExtractor={(results) => results.id}

		renderItem={

			function({item})
			{
				// element==={item: {all the data of list we get} ,index:item.id}
				// console.log(element)
				return (
					<TouchableOpacity onPress = {() => navigation.navigate('ResultsShow')} >
						<ResultsDetails result={item}/>
					</TouchableOpacity>
					)
			}
		}

	/>
	</View>
	)
}

const styles = StyleSheet.create({

	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginLeft: 15,
	}
})

export default ResultsList;