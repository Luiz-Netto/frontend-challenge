import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as features from '../features';

const BottomTab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={features.HomeFeature.Home} />
      <BottomTab.Screen
        name="Libraries"
        component={features.LibrariesFeature.Libraries}
      />
      <BottomTab.Screen
        name="Profile"
        component={features.ProfileFeature.Profile}
      />
    </BottomTab.Navigator>
  );
};
