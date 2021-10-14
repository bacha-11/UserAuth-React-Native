import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../../components/Login';
import SingUp from '../../components/SignUp';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SingUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AuthRoutes;