import React from 'react'

import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native'

import {withNavigation} from 'react-navigation'

import ResultsDetails from './ResultsDetails'

const ResultsList = ({ results,	title,	navigation,}) => {
	
	if(!results.length)
	{
		return null;
	}

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
					<TouchableOpacity onPress = {() => navigation.navigate('ResultsShow', {id:item.id})} >
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

export default withNavigation(ResultsList); //exporting extra function so it will navigate