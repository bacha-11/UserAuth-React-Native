import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthRoutes from './src/Navigations/AuthRoutes';
import MainRoutes from './src/Navigations/MainRousts';
import LoginToken from './src/api/ApiTokenStore';


export default function App() {
  const [isVisible, setisVisible] = useState(false)
  const [userToken, setUserToken] = useState(null)

  const isVisibleHandler = () =>{
    setisVisible(true)
  }

  const disableVisiblty = () =>{
    setisVisible(false)
  }

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
      
        {userToken === null ? <AuthRoutes /> : <MainRoutes />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
