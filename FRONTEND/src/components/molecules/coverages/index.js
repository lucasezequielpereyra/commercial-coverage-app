import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import data from '../../../DB/db.json';

import { Styles } from './style';

const Coverages = () => {
  return (
    <View style={Styles.container}>
      <Text>Cliente: </Text>
      <TextInput style={Styles.input}>asd</TextInput>
      <TouchableOpacity style={Styles.customBtnBG}>
        <Text style={Styles.customBtnText}>ok</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Coverages;
