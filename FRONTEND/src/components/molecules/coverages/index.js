import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { getDataByCliente, getData } from '../../../api';
import { useIsFocused } from '@react-navigation/native';

import { Styles } from './style';

const Coverages = () => {
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  const getCoverages = async () => {
    const cliente = 300012046;
    try {
      const myData = await getDataByCliente(cliente);
      setData(myData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnPress = () => {
    console.log(JSON.stringify(data.clients));
  };

  /*
    useEffect(() => {
    getCoverages();
  }, [isFocused]);
  */

  return (
    <View style={Styles.container}>
      <Text>Cliente: </Text>
      <TextInput style={Styles.input}>asd</TextInput>
      <TouchableOpacity style={Styles.customBtnBG} onPress={handleOnPress}>
        <Text style={Styles.customBtnText}>ok</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Coverages;
