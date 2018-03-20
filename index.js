// Import a library to help create a Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';


// Create a Component

const App = () => (
  //if no text intended to write in import component ..that must be self closing ...eslint
    <Header/>
);



//Render it to the device
AppRegistry.registerComponent('albums', () => App);
