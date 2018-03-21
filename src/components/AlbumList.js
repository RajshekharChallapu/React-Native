
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


class AlbumList extends Component{
  //STATE//used to update internal data of component..when event triggers and record and respond
   //state we used only in class based component
  state = { albums: [] };
  
  ComponentWillMount(){
  //class component, it knows when to fetch data and get data to serve to UI by using
  //lifecycle methods  ComponentWillMount,
  // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line

    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(data => this.setState({ albums: data }));
        }

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }
//render method ..we write class base components when  to fetch data and any helper method needed for componennt
render() {
  console.log(this.state);
  return (
    <View>
    {this.renderAlbums()}
  </View>
);
}
}

export default AlbumList;
