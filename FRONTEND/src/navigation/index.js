import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CoverageNavigation from './coverages/index';
import PriceNavigation from './prices/index';

const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Coberturas"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.primaryColor,
            borderTopColor: 'transparent',
          },
        }}>
        <BottomTabs.Screen
          name="Coberturas"
          component={CoverageNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="home-sharp" size={20} color={'#fff'} />
            ),
            title: 'Coberturas',
            tabBarActiveTintColor: '#fff',
          }}
        />
        <BottomTabs.Screen
          name="Precios"
          component={PriceNavigation}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="logo-usd" size={22} color={'#fff'} />
            ),
            title: 'Precios',
            tabBarActiveTintColor: '#fff',
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
