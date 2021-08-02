import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import * as features from '../features';
import {TabRoutes} from './TabRoutes';

const Stack = createStackNavigator();

export const MainRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="TabRoutes">
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={features.HomeFeature.Screens.DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
