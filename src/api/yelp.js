import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer H9T3PMCr7bA1jkP6hnv3bxubs5Qgvkxf6jzrZi4zpRSfPko8Geo2R-Aca2YOKeqAMfBnmkJN5l_G0b5q29qUHrTpSIRfQVFPkxo9dLU3AnHSkA0UZ2YXYPaXQcKfYHYx'

	}
})