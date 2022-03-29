import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './style';

const Header = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>MyKOF</Text>
    </View>
  );
};

export default Header;
