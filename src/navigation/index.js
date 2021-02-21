
import React from 'react';
import {StatusBar} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from '../container/login';
import Home from '../container/home';
import AddIncident from '../container/addincident';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  }
})
const AppStack = createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      header:null
    }
  },
  AddIncident:{
    screen:AddIncident,
    navigationOptions:{
      header:null
    }
  }
//   List: {
//     screen: List,
//     navigationOptions: {
//       header: null
//     }
//   },
//   AddAccident: {
//     screen: AddAccident,
//     navigationOptions: {
//       header: null
//     }
//   },
//   AccidentDetails: {
//     screen: AccidentDetails,
//     navigationOptions: {
//       header: null
//     }
//   },
//   MicrosoftLoginScreen: {
//     screen: MicrosoftLoginScreen,
//     navigationOptions: {
//       header: null
//     }
//   },
})
const App = createAppContainer(
    createSwitchNavigator(
      {
        AuthStack:AuthStack,
        AppStack:AppStack
     
      },
      {
        initialRouteName: 'AuthStack',
      },
    ),
  );
  
class Navigation extends React.Component {
    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
    }
  render() {
    return (
     <>
      <App/>
    </>
    );
  }
}


export default Navigation;
