import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './style';

const CoverageHeader = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Coberturas</Text>
    </View>
  );
};

export default CoverageHeader;
