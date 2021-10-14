import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import LogoutAuth from '../api/ApiTokenStore'



const Profile = ({navigation}) =>{
    
    const handleLogout = () =>{
        LogoutAuth.removeToken()
        navigation.navigate("LogIn")
    }

    return(
        <View style={styles.ProfileContainer}>
            <Text>Profile Page</Text>
            <Button onPress={handleLogout} title="Logout" />
            
        </View>
    )
}


const styles = StyleSheet.create({
    ProfileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }

})


export default Profile;