import React, { Fragment } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import SubHeader from '../../atoms/subheader';
import imagen from './logo.png';
import { colors } from '../../../utils/colors';
import { Styles } from './style';

const Login = ({
  handleOnChangeUser,
  handleOnChangePassword,
  handleOnPress,
}) => {
  return (
    <Fragment>
      <SubHeader title="LOGIN" />
      <View style={Styles.container}>
        <Image source={imagen} style={Styles.logo} />
        <TextInput
          style={Styles.input}
          placeholder="Usuario"
          onChangeText={handleOnChangeUser}
          placeholderTextColor={colors.grey}
        />
        <TextInput
          style={Styles.input}
          placeholder="Contraseña"
          onChangeText={handleOnChangePassword}
          secureTextEntry={true}
          placeholderTextColor={colors.grey}
        />
        <TouchableOpacity style={Styles.customBtnBG} onPress={handleOnPress}>
          <Text style={Styles.customBtnText}>INGRESAR</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Login;
