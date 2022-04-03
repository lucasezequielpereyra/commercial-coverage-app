import React, { Fragment, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ClientItem from '../clientItem';

import { Styles } from './style';

const Coverages = ({
  data,
  render,
  handleOnChangeClient,
  handleOnPress,
  navigation,
}) => {
  const [buttonCov, setButtonCov] = useState(false);
  const [buttonKofre, setButtonKofre] = useState(false);
  const [buttonSalarial, setButtonSalarial] = useState(false);

  const handleOnPressCov = button => {
    if (render) {
      switch (button) {
        case 'cov':
          setButtonCov(!buttonCov);
          setButtonKofre(false);
          setButtonSalarial(false);
          navigation.navigate('AllCoveragesScreen', { data: data });
          break;
        case 'kofre':
          setButtonCov(false);
          setButtonKofre(!buttonKofre);
          setButtonSalarial(false);
          navigation.navigate('KofreScreen', { data: data });
          break;
        case 'salarial':
          setButtonCov(false);
          setButtonKofre(false);
          setButtonSalarial(!buttonSalarial);
          navigation.navigate('SalarialScreen', { data: data });
          break;
        default:
          break;
      }
      return;
    }
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
      {render && <ClientItem data={data} />}
      <View style={Styles.containerButton}>
        <TouchableOpacity
          style={Styles.customBtnCov}
          onPress={() => handleOnPressCov('cov')}>
          <Text style={Styles.customTextCov}>TODAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.customBtnCov}
          onPress={() => handleOnPressCov('kofre')}>
          <Text style={Styles.customTextCov}>KOFRE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.customBtnCov}
          onPress={() => handleOnPressCov('salarial')}>
          <Text style={Styles.customTextCov}>SALARIAL</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Coverages;
