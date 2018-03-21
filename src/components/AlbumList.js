
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


class AlbumList extends Component{

  //STATE//used to update internal data of component..when event triggers and record and respond
  state = { albums: [] };

  //class component, it knows when to fetch data and get data to serve to UI by using
  //lifecycle methods  ComponentWillMount,
  ComponentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //promise
    .then(response => this.setState({albums: response.data}));

  }
//render method ..we write class base components when  to fetch data and any helper method needed for componennt
render() {
  console.log(this.state);
  return (
    <View>
    <Text>Album List!!!</Text>
  </View>
);
}
}

export default AlbumList;
