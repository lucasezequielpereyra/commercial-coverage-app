import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CoverageNavigation from './coverages/index';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Coberturas"
        screenOptions={{ headerShown: false }}>
        <BottomTabs.Screen name="Coberturas" component={CoverageNavigation} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
