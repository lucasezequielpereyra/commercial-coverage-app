import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Provider } from 'react-redux';
import store from './src/store';

import Header from './src/components/atoms/header/index';
import Login from './src/views/login/index';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={Styles.container}>
        <KeyboardAvoidingView behavior="width" style={Styles.container}>
          <StatusBar
            backgroundColor={colors.primaryColor}
            barStyle="light-content"
          />
          <Header />
          <Login />
        </KeyboardAvoidingView>
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
