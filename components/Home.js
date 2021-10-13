import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const Home = (props) =>{
    return(
        <View style={styles.HomeContainer}>
            <Text>Home Page</Text>
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