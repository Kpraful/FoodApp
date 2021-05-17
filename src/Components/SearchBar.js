import React from 'react';
import {
	Feather
} from '@expo/vector-icons';
import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native'

const SearchBar = (props) => {

	return (
		<View style={styles.backgroundStyle}>

		{/*{search icon}*/}
		<Feather name='search' style={styles.iconStyle}/> 
		<TextInput
		autoCapitalize="none"
		autoCorrect={false}
		style={styles.inputStyle}
		placeholder="Search"
		value={props.term}
		// onChangeText={
		// 	function(newTerm)
		// 	{
		// 		props.onTermChange(newTerm);
		// 	}
		// }
		onChangeText={props.onTermChange}//reference
		onEndEditing={ props.onTermSubmit}//reference

		/>

		</View>

	)
};

const styles = StyleSheet.create({

	backgroundStyle: {
		backgroundColor: 'rgb(214,214,219)',
		height: 45,
		borderRadius: 5,
		margin: 15,
		flexDirection: 'row', // so that seach and text come in same line
	},
	//border is added just to check how long input can we take
	inputStyle: {
		// borderColor: '#000000',
		// borderWidth: 1,
		flex: 1, // so that text input take whole screen, and not just  small space
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35, // size of icon
		alignSelf: 'center'
	}

});

export default SearchBar;