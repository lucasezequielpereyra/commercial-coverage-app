import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PriceScreen from '../../views/price/index';

const Stack = createNativeStackNavigator();

const PricesNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRouteName="PriceScreen"
        name="PriceScreen"
        component={PriceScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PricesNavigation;
