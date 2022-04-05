import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { colors } from './src/utils/colors';
import { Provider } from 'react-redux';
import store from './src/store';

import Header from './src/components/atoms/header/index';
import Login from './src/views/login/index';

const App = () => {
  SystemNavigationBar.setNavigationColor(colors.primaryColor);
  SystemNavigationBar.setNavigationBarContrastEnforced(true);

  return (
    <Provider store={store}>
      <SafeAreaView style={Styles.container}>
        <StatusBar
          backgroundColor={colors.primaryColor}
          barStyle="light-content"
        />
        <Header />
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;
