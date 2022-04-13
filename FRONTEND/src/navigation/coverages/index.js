import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoverageScreen from '../../views/coverage/index';
import AllCoveragesScreen from '../../views/coverage/coverages';
import KofreScreen from '../../views/coverage/covKofre.js';
import IceScreen from '../../views/coverage/covIce';
import SalarialScreen from '../../views/coverage/covSalarial';

import { colors } from '../../utils/colors';

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
      <Stack.Screen
        initialRouteName="AllCoveragesScreen"
        name="AllCoveragesScreen"
        component={AllCoveragesScreen}
        options={{
          title: 'Cobertura',
          headerStyle: {
            backgroundColor: colors.primaryVariant,
          },
          headerTintColor: colors.white,
        }}
      />
      <Stack.Screen
        initialRouteName="KofreScreen"
        name="KofreScreen"
        component={KofreScreen}
        options={{
          title: 'Cobertura Kofre',
          headerStyle: {
            backgroundColor: colors.primaryVariant,
          },
          headerTintColor: colors.white,
        }}
      />
      <Stack.Screen
        initialRouteName="IceScreen"
        name="IceScreen"
        component={IceScreen}
        options={{
          title: 'Cobertura Ice',
          headerStyle: {
            backgroundColor: colors.primaryVariant,
          },
          headerTintColor: colors.white,
        }}
      />
      <Stack.Screen
        initialRouteName="SalarialScreen"
        name="SalarialScreen"
        component={SalarialScreen}
        options={{
          title: 'Cobertura Salarial',
          headerStyle: {
            backgroundColor: colors.primaryVariant,
          },
          headerTintColor: colors.white,
        }}
      />
    </Stack.Navigator>
  );
};

export default CoverageNavigation;
