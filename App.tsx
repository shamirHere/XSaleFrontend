/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View , Text
} from 'react-native';
import { Home } from './src/screens/home';
import { List } from './src/screens/chats';
import { AddNewListing } from './src/screens/addNewListing';
import { MyAds} from './src/screens/myAds';

const App = () => {

  return (
    // <Home />
    // <List />
    // <AddNewListing />
    <MyAds />
  )
}; 
export default App;