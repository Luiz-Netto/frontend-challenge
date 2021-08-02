import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export const HomeFeatureRoute = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen
        name="Detail"
        component={features.HomeFeature.Screens.DetailScreen}
      /> */}
    </Stack.Navigator>
  );
};
