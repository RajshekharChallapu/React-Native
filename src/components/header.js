//Import libraries for making a Component
import React from 'react';
import { Text } from 'react-native';


//Make a Component
const Header = () =>{
  const { textStyle }= styles;

  return <Text style={ textStyle }>Albums!</Text>;
};

//styling
const styles={
textStyle: {
  fontSize: 20
}

}
//Make the Component available to other parts of the App
export default Header;
