import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import * as features from '../features';

const BottomTab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeFeature"
      defaultScreenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#BFBEBF',
        tabBarHideOnKeyboard: true,
      }}>
      <BottomTab.Screen
        name="HomeFeature"
        component={features.HomeFeature.Screens.HomeScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Feather name="home" color={color} size={18} />;
          },
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Libraries"
        component={features.LibrariesFeature.Libraries}
        options={{
          tabBarIcon: ({color}) => {
            return <Feather name="book" color={color} size={18} />;
          },
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={features.ProfileFeature.Profile}
        options={{
          tabBarIcon: ({color}) => {
            return <Feather name="user" color={color} size={18} />;
          },
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};
