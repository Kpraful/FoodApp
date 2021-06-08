console.log("SearchScreen")
import React, {
	useState,
	useEffect
} from 'react';
import yelp from '../api/yelp';
import {
	View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native'

import useResults from '../hooks/useResults'

import SearchBar from '../Components/SearchBar'

import ResultsList from '../Components/ResultsList'

const SearchScreen = () => {

	

	const [term, setTerm] = useState('');

	const [searchApi, results, errorMessage] = useResults();

	const filterResulysByPrice = (price) => {
		//price === '$' || '$$' || '$$'
		// (results.price === price ? results : null)
		return results.filter(
			function(result) {


				return result.price === price;

			}
		)
		// return results.filter(result => {

		// 	return result.price === price
		// })
	}
	// const [results, setResults] = useState([]);

	// const [errorMessage, seterrorMessage] = useState('')

	// //Not actually a search screen it's kind of business logic
	// const searchApi = async (searchTerm) => {
	// 	console.log('hi there')
	// 	try {
	// 		const response = await yelp.get('/search', {

	// 			//parms will be automatically concatinated with the url
	// 			params: {
	// 				limit: 50,
	// 				term: searchTerm,
	// 				location: 'san jose'
	// 			}


	// 		}); // route will be concatenated on baseURL in yelp.js
	// 		setResults(response.data.businesses);
	// 		seterrorMessage('')
	// 	} catch (err) {
	// 		seterrorMessage('Something went wrong')
	// 	}
	// };

	// // Bad code
	// //call searchApi when component first rendered
	// // searchApi('pasta')

	// //Correct aproach
	// useEffect(() => {
	// 	searchApi('pasta')
	// }, []);
	return (
		<>
		<SearchBar term={term} 
		onTermChange={
			function(newTerm)
			{
				setTerm(newTerm)
			}
		}
		onTermSubmit={ () => searchApi(term) }

		/>
		{<Text> {(errorMessage ? <Text>"Something Went wrong"</Text> :null)} </Text> }

		<ScrollView>
		<ResultsList results={filterResulysByPrice('$')} title="CostEffective" />
		<ResultsList results={filterResulysByPrice('$$')} title="Bit Pricier" />
		<ResultsList results={filterResulysByPrice('$$$')} title="Big Spender" />
		</ScrollView>

		</>

	)
};



export default SearchScreen;