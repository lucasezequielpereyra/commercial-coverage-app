import React, { Fragment, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { getDataByCliente } from '../../../api';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Styles } from './style';

const Coverages = () => {
  const [data, setData] = useState([]);

  const getCoverage = async cliente => {
    try {
      const myData = await getDataByCliente(cliente);
      setData(myData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChangeClient = inputValue => {
    const cliente = Number(inputValue);
    setData(cliente);
  };

  const handleOnPress = () => {
    getCoverage(data);
    console.log(JSON.stringify(data.clients));
  };

  return (
    <Fragment>
      <View style={Styles.container}>
        <TextInput
          style={Styles.input}
          onChangeText={handleOnChangeClient}
          placeholder="Ingrese cliente"
        />
        <TouchableOpacity style={Styles.customBtnBG} onPress={handleOnPress}>
          <Text style={Styles.customBtnText}>
            <Ionicons name="enter-outline" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Coverages;
