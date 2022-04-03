import React, { Fragment } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ClientItem from '../../atoms/clientItem';

import { Styles } from './style';

const Coverages = ({ data, render, handleOnChangeClient, handleOnPress }) => {
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
      {render && <ClientItem data={data} />}
      <View style={Styles.containerButton}>
        <TouchableOpacity style={Styles.customBtnCov}>
          <Text style={Styles.customTextCov}>TODAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.customBtnCov}>
          <Text style={Styles.customTextCov}>KOFRE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.customBtnCov}>
          <Text style={Styles.customTextCov}>SALARIAL</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Coverages;
