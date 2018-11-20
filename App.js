
import React, { Component } from 'react';

import MainScreen from './src/screens/MainScreen';

export default class App extends Component {
  render() {
    return (
      <MainScreen />
    );
  }
}


// const RootStack = createStackNavigator({
//   Main:{
//     screen: MainScreen
//   },
//   MyModel:{
//     screen:ModalScreen
//   },
//   about:{
//     screen:AboutCukeTest
//   }
// },{
//   mode: 'modal',
//   headerMode: 'none'
// })