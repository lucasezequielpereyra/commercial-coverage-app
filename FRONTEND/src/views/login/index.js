import React, { Fragment, useState, useRef } from 'react';
import { Alert } from 'react-native';
import Login from '../../components/molecules/login/index';
import AppNavigation from '../../navigation/index';
import { signIn } from '../../api';
// redux
import { dataUser } from '../../store/slices/user';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
  const [user, setUserState] = useState('');
  const [password, setPassowrd] = useState('');
  const [login, setLogin] = useState(false);
  const inputUser = useRef();
  const inputPassowrd = useRef();
  const dispatch = useDispatch();

  const handleOnChangeUser = inputValue => {
    setUserState(inputValue);
  };

  const handleOnChangePassword = inputValue => {
    setPassowrd(inputValue);
  };

  const handleOnPress = () => {
    signIn(user, password)
      .then(res => {
        if (res.status === 200) {
          setLogin(true);
          dispatch(dataUser(res.token.token));
        } else {
          Alert.alert('Error', 'Verifique los datos de usuario', [
            { text: 'OK', onPress: () => inputUser.current.focus() },
          ]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  let content = !login ? (
    <Login
      handleOnChangeUser={handleOnChangeUser}
      handleOnChangePassword={handleOnChangePassword}
      handleOnPress={handleOnPress}
      inputUser={inputUser}
      inputPassowrd={inputPassowrd}
    />
  ) : (
    <AppNavigation />
  );

  return <Fragment>{content}</Fragment>;
};

export default LoginScreen;
