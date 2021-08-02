import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {MainRoutes} from './routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
