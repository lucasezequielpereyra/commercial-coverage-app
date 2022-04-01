import React, { Fragment, useState } from 'react';
import Login from '../../components/molecules/login/index';
import AppNavigation from '../../navigation/index';

const LoginScreen = () => {
  const [user, setUser] = useState('');
  const [password, setPassowrd] = useState('');
  const [login, setLogin] = useState(false);

  const handleOnChangeUser = inputValue => {
    setUser(inputValue);
  };

  const handleOnChangePassword = inputValue => {
    setPassowrd(inputValue);
  };

  const handleOnPress = () => {
    if (user && password) {
      setLogin(true);
    }
  };

  let content = !login ? (
    <Login
      handleOnChangeUser={handleOnChangeUser}
      handleOnChangePassword={handleOnChangePassword}
      handleOnPress={handleOnPress}
    />
  ) : (
    <AppNavigation />
  );

  return <Fragment>{content}</Fragment>;
};

export default LoginScreen;
