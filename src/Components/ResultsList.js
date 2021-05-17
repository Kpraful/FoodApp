import React from 'react'

import {
	View,
	Text,
	StyleSheet,
	FlatList,
} from 'react-native'

const ResultsList = ({
	results,
	title
}) => {
	return (
		<View>
		<Text style={styles.title}>
			{title}
		</Text>
	<FlatList

		horizontal={true}

		data={results}

		keyExtractor={(results) => results.id}

		renderItem={

			function({item})
			{
				// element==={item: {all the data of list we get} ,index:item.id}
				// console.log(element)
				return <Text>{item.name}</Text>
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
	}
})

export default ResultsList;