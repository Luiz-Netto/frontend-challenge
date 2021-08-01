import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import * as features from '../features';

const BottomTab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#BFBEBF',
        keyboardHidesTabBar: true,
      }}>
      <BottomTab.Screen
        name="Home"
        component={features.HomeFeature.Screens.HomeScreen}
        options={{
          tabBarIcon: ({color}) => {
            return <Feather name="home" color={color} size={18} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Libraries"
        component={features.LibrariesFeature.Libraries}
        options={{
          tabBarIcon: ({color}) => {
            return <Feather name="home" color={color} size={18} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={features.ProfileFeature.Profile}
        options={{
          tabBarIcon: ({color}) => {
            return <Feather name="home" color={color} size={18} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
