import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import LogoutAuth from '../src/api/ApiTokenStore'


const Home = (props) =>{

    const handleLogout = () =>{
        LogoutAuth.removeToken()
    }

    return(
        <View style={styles.HomeContainer}>
            <Text>Home Page</Text>
            <Button onPress={handleLogout} title="Logout" />
        </View>
    )
}


const styles = StyleSheet.create({
    HomeContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }

})


export default Home;