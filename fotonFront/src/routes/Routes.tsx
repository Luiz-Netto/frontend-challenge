import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import * as features from '../features';

const BottomTab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={features.HomeFeature.Screens.HomeScreen}
        options={{
          tabBarIcon: () => {
            return <Feather name="home" color="#000000" size={18} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Libraries"
        component={features.LibrariesFeature.Libraries}
        options={{
          tabBarIcon: () => {
            return <Feather name="book" color="#000000" size={18} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={features.ProfileFeature.Profile}
        options={{
          tabBarIcon: () => {
            return <Feather name="user" color="#000000" size={18} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
