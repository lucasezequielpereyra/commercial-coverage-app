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
  clientNro,
}) => {
  const handleOnPressCov = button => {
    if (render) {
      switch (button) {
        case 'cov':
          navigation.navigate('AllCoveragesScreen', {
            client: clientNro,
          });
          break;
        case 'kofre':
          navigation.navigate('KofreScreen', {
            client: clientNro,
          });
          break;
        case 'ice':
          navigation.navigate('IceScreen', {
            client: clientNro,
          });
          break;
        case 'salarial':
          navigation.navigate('SalarialScreen', {
            client: clientNro,
          });
          break;
        default:
          break;
      }
      return;
    } else {
      Alert.alert('Error', 'No se ha seleccionado ningún cliente', [
        { text: 'OK' },
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
          onPress={() => handleOnPressCov('ice')}>
          <Text style={Styles.customTextCov}>ICE</Text>
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
