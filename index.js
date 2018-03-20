// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Create a Component
const App = () => (
  //if no text intended to write in import component ..that must be self closing ...eslint

<View>
    <Header headerText= {'Albums'}/>
  <AlbumList />
</View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
