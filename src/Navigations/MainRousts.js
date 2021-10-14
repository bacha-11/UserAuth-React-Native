import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationString from './NavigationString';
import Home from '../../components/Home';

const Stack = createNativeStackNavigator();

function MainRoutes() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={NavigationString.HOME}>
          <Stack.Screen name={NavigationString.HOME} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default MainRoutes;