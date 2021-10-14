import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import NavigationString from "../src/Navigations/NavigationString";
import LogoutAuth from '../src/api/ApiTokenStore'
import LogIn from "./Login";


const Home = ({navigation,...props}) =>{
    
    const handleLogout = () =>{
        LogoutAuth.removeToken()
        navigation.navigate("LogIn")
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