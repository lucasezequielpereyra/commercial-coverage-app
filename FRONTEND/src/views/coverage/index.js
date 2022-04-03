import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { getDataByCliente } from '../../api';
import { useSelector } from 'react-redux';

import Coverages from '../../components/molecules/coverages/index';
import SubHeader from '../../components/atoms/subheader';

const CovarageScreen = ({ navigation }) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [render, setRender] = useState(false);

  const { userToken } = useSelector(state => state.user);

  const getCoverage = async cliente => {
    try {
      const myData = await getDataByCliente(cliente, userToken);
      if (myData.data.clients != null) {
        setData(myData.data);
        setRender(true);
      } else if (myData.status === 403 || myData.status === 401) {
        Alert.alert('Error', 'No tiene permisos para ver esta información');
        setRender(false);
      } else {
        Alert.alert('Error', 'El cliente ingresado no es valido');
        setRender(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChangeClient = inputValue => {
    const cliente = Number(inputValue);
    setInput(cliente);
  };

  const handleOnPress = () => {
    getCoverage(input);
  };

  return (
    <View>
      <SubHeader title="COBERTURAS" />
      <Coverages
        data={data}
        render={render}
        handleOnChangeClient={handleOnChangeClient}
        handleOnPress={handleOnPress}
        navigation={navigation}
      />
    </View>
  );
};

export default CovarageScreen;
