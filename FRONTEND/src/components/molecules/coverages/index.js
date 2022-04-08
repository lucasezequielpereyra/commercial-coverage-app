import React, { Fragment } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ClientItem from '../clientItem';

import { colors } from '../../../utils/colors';
import { Styles } from './style';

const Coverages = ({
  data,
  render,
  handleOnChangeClient,
  handleOnPress,
  navigation,
  inputClientRef,
  getCoverages,
  coverages,
  clientNro,
}) => {
  const handleOnPressCov = button => {
    if (render) {
      switch (button) {
        case 'cov':
          getCoverages(clientNro);
          navigation.navigate('AllCoveragesScreen', { data: coverages });
          break;
        case 'kofre':
          navigation.navigate('KofreScreen', { data: data });
          break;
        case 'salarial':
          navigation.navigate('SalarialScreen', { data: data });
          break;
        default:
          break;
      }
      return;
    } else {
      Alert.alert('Error', 'No se ha seleccionado ningún cliente', [
        { text: 'OK', onPress: () => inputClientRef.current.focus() },
      ]);
    }
  };

  return (
    <Fragment>
      <View style={Styles.container}>
        <TextInput
          style={Styles.input}
          onChangeText={handleOnChangeClient}
          placeholder="Ingrese cliente"
          placeholderTextColor={colors.grey}
          keyboardType="numeric"
          onSubmitEditing={handleOnPress}
          returnKeyType="search"
          ref={inputClientRef}
        />
        <TouchableOpacity style={Styles.customBtnBG} onPress={handleOnPress}>
          <Text style={Styles.customBtnText}>
            <Ionicons name="search-sharp" size={20} />
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
