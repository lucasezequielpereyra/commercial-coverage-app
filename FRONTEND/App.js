import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { colors } from './src/utils/colors';

import Header from './src/components/atoms/header/index';
import AppNavigation from './src/navigation/index';

const App = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAvoidingView behavior="width" style={Styles.container}>
        <StatusBar
          backgroundColor={colors.primaryColor}
          barStyle="light-content"
        />
        <Header />
        <AppNavigation />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
