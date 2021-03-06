//Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';


//Make a Component
//props are used to communicate btw  parent to child component..it doesn't have access to state component
const Header = (props) =>{
  const { textStyle, viewStyle }= styles;

  return (
    <View style={viewStyle}>
    <Text style={ textStyle }>{props.headerText}</Text>
</View>
);
};
//styling
const styles={
  viewStyle:{
    backgroundColor: '#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity:0.9,
    elevation: 2,
    position:'relative'
  },
textStyle: {
  fontSize: 20
}
}
//Make the Component available to other parts of the App
export default Header;
