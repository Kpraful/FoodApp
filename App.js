import {
  createStackNavigator
} from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import {
  createAppContainer
} from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
const navigator = createStackNavigator({

  SearchScreen: SearchScreen,
  ResultsShow : ResultsShowScreen

}, {
  intialRouteName: 'SearchScreen',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator) //create react component