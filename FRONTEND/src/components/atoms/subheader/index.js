import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './style';

const SubHeader = ({ title }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{title}</Text>
    </View>
  );
};

export default SubHeader;
