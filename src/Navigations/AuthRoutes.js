import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationString from './NavigationString';
import LogIn from '../../components/Login';
import SingUp from '../../components/SignUp';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={NavigationString.LOGIN}>
          <Stack.Screen name={NavigationString.LOGIN} component={LogIn} />
          <Stack.Screen name={NavigationString.LOGOUT} component={SingUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AuthRoutes;