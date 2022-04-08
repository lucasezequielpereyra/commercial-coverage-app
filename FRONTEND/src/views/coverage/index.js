import React, { useState, useRef } from 'react';
import { View, Alert } from 'react-native';
import { getDataByCliente, getCoveragesByClient } from '../../api';
import { useSelector } from 'react-redux';

import Coverages from '../../components/molecules/coverages/index';
import SubHeader from '../../components/atoms/subheader';

const CovarageScreen = ({ navigation }) => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [clientNro, setClientNro] = useState('');
  const [coverages, setCoverages] = useState([]);
  const [render, setRender] = useState(false);
  const inputClientRef = useRef();

  const { userToken } = useSelector(state => state.user);

  const getClient = async client => {
    try {
      const myData = await getDataByCliente(client, userToken);
      if (myData.data.client != null) {
        setData(myData.data.client);
        setRender(true);
      } else if (myData.status === 403 || myData.status === 401) {
        Alert.alert('Error', 'No tiene permisos para ver esta información');
        setRender(false);
      } else {
        setRender(false);
        Alert.alert('Error', 'El cliente ingresado no es valido', [
          { text: 'OK', onPress: () => inputClientRef.current.focus() },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCoverages = async (client, option) => {
    try {
      const myData = await getCoveragesByClient(client, userToken);
      setCoverages(myData.data.coverages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChangeClient = inputValue => {
    const cliente = Number(inputValue);
    setInput(cliente);
  };

  const handleOnPress = () => {
    getClient(input);
    setClientNro(input);
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
        inputClientRef={inputClientRef}
        getCoverages={getCoverages}
        coverages={coverages}
        clientNro={clientNro}
      />
    </View>
  );
};

export default CovarageScreen;
