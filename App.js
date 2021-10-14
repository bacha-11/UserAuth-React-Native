import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthRoutes from './src/Navigations/AuthRoutes';
import MainRoutes from './src/Navigations/MainRousts';
import LoginToken from './src/api/ApiTokenStore';


export default function App() {
  const [userToken, setUserToken] = useState(null)


  const fetchToken = async () => {
    let result = await LoginToken.getToken();
    setUserToken(result)
    console.log('@@@Last Stored Token--', result)
  }
 

  useEffect(()=>{
    fetchToken()
  },[])


  return (
    <View style={styles.container}>
      
        {/* {userToken?
        <Home />
        :
        <LogIn visible={isVisibleHandler}/>
        } */}
        {/* <SingUp visible={isVisible} disable={disableVisiblty}/> */}
        {/* <NavigationContainer> */}
          {/* {userToken === null ? <AuthRoutes /> : <MainRoutes />} */}
        {/* </NavigationContainer> */}


        <AuthRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
