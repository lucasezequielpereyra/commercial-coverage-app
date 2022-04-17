import React from 'react';
import { View, TextInput, Image, Text, ScrollView } from 'react-native';
import SubHeader from '../../atoms/subheader';
import imagen from './logo.png';
import { colors } from '../../../utils/colors';
import { Styles } from './style';
import { Button } from '../../atoms/button';

const Login = ({
  handleOnChangeUser,
  handleOnChangePassword,
  handleOnPress,
  inputUser,
  inputPassowrd,
}) => {
  return (
    <ScrollView>
      <SubHeader title="LOGIN" />
      <View style={Styles.container}>
        <Image source={imagen} style={Styles.logo} />
        <TextInput
          style={Styles.input}
          placeholder="Usuario"
          onChangeText={handleOnChangeUser}
          placeholderTextColor={colors.grey}
          keyboardType="default"
          onSubmitEditing={() => inputPassowrd.current.focus()}
          returnKeyType="next"
          ref={inputUser}
        />
        <TextInput
          style={Styles.input}
          placeholder="Contraseña"
          onChangeText={handleOnChangePassword}
          secureTextEntry={true}
          placeholderTextColor={colors.grey}
          keyboardType="default"
          onSubmitEditing={handleOnPress}
          returnKeyType="done"
          ref={inputPassowrd}
        />
        <Button styles={Styles.customBtnBG} onPress={handleOnPress}>
          <Text style={Styles.customBtnText}>INGRESAR</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Login;
