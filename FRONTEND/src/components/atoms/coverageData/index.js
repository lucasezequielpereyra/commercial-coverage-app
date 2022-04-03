import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './style';

const CoverageData = ({ data }) => {
  const renderData = () => {
    return data.map((item, index) => {
      return (
        <View key={index} style={Styles.container}>
          <Text style={Styles.label}>{Object.keys(item)}: </Text>
          <Text style={Styles.value}>{Object.values(item)}</Text>
        </View>
      );
    });
  };

  return renderData();
};

export default CoverageData;
