import {
  createStackNavigator
} from 'react-navigation-stack';

import {
  createAppContainer
} from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
const navigator = createStackNavigator({

  SearchScreen: SearchScreen,

}, {
  intialRouteName: 'SearchScreen',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator) //create react component