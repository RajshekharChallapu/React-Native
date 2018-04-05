
import React from 'react';
import { View } from 'react-native';

const CardSection = () => {
  return (
    <View style={styles.containerStyle} />
    {props.children}
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: '#ddd',
    position: 'relative'

  }
};
