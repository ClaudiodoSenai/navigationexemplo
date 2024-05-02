

import React from 'react';
import { StyleSheet } from 'react-native';
import PesquisaProduto from './src/screens/PesquisaProduto';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';

function App(): React.JSX.Element {
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = {'Home'} component={Home} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
