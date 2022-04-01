import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoverageScreen from '../../views/coverage/index';

const Stack = createNativeStackNavigator();

const CoverageNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRouteName="CoverageScreen"
        name="CoverageScreen"
        component={CoverageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CoverageNavigation;
