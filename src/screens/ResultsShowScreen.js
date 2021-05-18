import React, {useState,useEffect} from 'react'
import {View,Text,StyleSheet,Image,FlatList} from 'react-native'
import yelp from '../api/yelp'
const ResultsShowScreen = function({navigation}){

	const[idResult,setIdResult]=useState(null) // not yet data is fetched
	const id=navigation.getParam('id')
	// console.log(id)
	// console.log(idResult)

	const getIdResult=async (id) => {
		
		const response=await yelp.get(`/${id}`)
		setIdResult(response.data);
	}

	useEffect( ()=> {
		getIdResult(id);
	},[])

	if(!idResult){
		return null;
	}
	return(
		<View>
	
	<FlatList

		data={idResult.photos}
		keyExtractor={(photoUrl) => photoUrl}
		renderItem={
			function({item})
			{
				console.log(item)
				return(
					<>
						<Image style={Styles.image} source={{uri:item}}/>
					</>
					)
			}
		}


	/>
	</View>
	)
}
const Styles=StyleSheet.create({

	image:{
		height: 200,
		width: 200,
		margin: 20,
		marginLeft:0,
	}
})


export default ResultsShowScreen;