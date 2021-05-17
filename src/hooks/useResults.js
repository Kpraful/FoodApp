// for extracting hook we wrote in searchScreen

import {
	useEffect,
	useState
} from 'react'

import yelp from '../api/yelp'

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, seterrorMessage] = useState('')

	//Not actually a serach screen it's kind of business logic
	const searchApi = async (searchTerm) => {
		console.log('hi there')
		try {
			const response = await yelp.get('/search', {

				//parms will be automatically concatinated with the url
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose'
				}


			}); // route will be concatenated on baseURL in yelp.js
			setResults(response.data.businesses);
			seterrorMessage('')
		} catch (err) {
			seterrorMessage('Something went wrong')
		}
	};

	// Bad code
	//call searchApi when component first rendered
	// searchApi('pasta')

	//Correct aproach
	useEffect(() => {
		searchApi('samosa')
	}, []);

	return [searchApi, results, errorMessage];
};