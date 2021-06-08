console.log("App");
import React from "react"; // everytime we write jsx we need to import react
import { createStackNavigator } from "react-navigation-stack";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import { createAppContainer } from "react-navigation";

import SearchScreen from "./src/screens/SearchScreen";
const navigator = createStackNavigator(
	{
		SearchScreen: SearchScreen,
		ResultsShow: ResultsShowScreen,
	},
	{
		intialRouteName: "SearchScreen",
		defaultNavigationOptions: {
			title: "Business Search",
		},
	}
);

const App = createAppContainer(navigator); //create react component

export default () => {
	return <App />;
};
