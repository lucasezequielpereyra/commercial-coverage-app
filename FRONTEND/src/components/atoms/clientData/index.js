import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './style';

const ClientData = ({ data }) => {
  const renderData = () => {
    return data.map((item, index) => {
      if (item[0] !== '_id') {
        return (
          <View key={index} style={Styles.container}>
            <Text style={Styles.label}>{item[0]}: </Text>
            <Text style={Styles.value}>{item[1]}</Text>
          </View>
        );
      }
    });
  };

  return renderData();
};

export default ClientData;
