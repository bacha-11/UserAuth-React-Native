import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity , ScrollView, Alert, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup';
import auth from "../src/api/user";
import authToken from '../src/api/ApiTokenStore';




const LogIn = ({navigation ,...props}) =>{
    const [isFocued, setisFocused] = useState(false)
    
    const onFocusedHandler = () =>{
        setisFocused(true)
    }

    const apiSubmitHandler = async ({username, password}) =>{
        console.log('username-password',username,password);
        let  result = await auth.signIn( username, password)
        console.log("result---", result)
{
    result.status == 200?
    navigation.navigate("Home")
    :
    alert("Something went wrong...")
}

        // if (result.data.message == "User Not found."){
        //     console.log('User Does Not Exist')
        //     Alert.alert(
        //         "User Not found",
        //         "User Does Not Exist ",
        //         [
        //           {
        //             text: "Cancel",
        //             onPress: () => console.log("Cancel Pressed"),
        //             style: "cancel"
        //           },
        //           { text: "OK", onPress: () => console.log("OK Pressed") }
        //         ]
        //       );
          
            
        // }
        // else if (!result.data.accessToken){
            
        //     console.log('Invalid Email or Password')
        //     Alert.alert(
        //         "Invalid Credentials",
        //         "User Does Not Exist ",
        //         [
        //           {
        //             text: "Cancel",
        //             onPress: () => console.log("Cancel Pressed"),
        //             style: "cancel"
        //           },
        //           { text: "OK", onPress: () => console.log("OK Pressed") }
        //         ]
        //       );
        // }
        // else{
        //     console.log("user------Loggedin")
        //     authToken.storeToken(result.data.accessToken)
        //     Alert.alert(
        //         "LoggedIn",
        //         "User Successfully LoggedIn",
        //         [
                  
        //           { text: "OK", onPress: () => navigation.navigate("Home") }
        //         ]
        //       );
        // }
       
    }
    
    const logInSchema = yup.object({
        username: yup.string().required('*Required'),
        password: yup.string().required('*Required')
    })

    return(
        <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                
                
                    <View style={styles.TextContainer}>
                        <Text style={styles.TextContainerTitle}>Welcome Back</Text>
                        <Text style={styles.TextContainerSubTitle}>Login to your existant account</Text>
                    </View>

                    <Formik 
                        initialValues={{username:"", password:""}}
                        validationSchema={logInSchema}
                        onSubmit={(values, actions) =>{
                            actions.resetForm()
                            console.log('simpleeeee',values)
                            apiSubmitHandler(values)
                        }}
                        >
                        {
                            (props)=>(
                                <View style={styles.InputContainer}>
                                    <TextInput style={[styles.InputFields, {borderColor: isFocued ? '#0779ef': '#eee', marginVertical:5}]}
                                    placeholder="Enter Username"
                                    onFocus={onFocusedHandler}
                                    onChangeText={props.handleChange('username')}
                                    value={props.values.username} 
                                    onBlur={props.handleBlur('username')} />
                                    <Text style={styles.InputError}>{ props.touched.username && props.errors.username }</Text>

                                    <TextInput style={[styles.InputFields, {borderColor: isFocued ? '#0779ef': '#eee'}]}
                                    placeholder="Enter Password" 
                                    onFocus={onFocusedHandler} 
                                    secureTextEntry={true}
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password} 
                                    onBlur={ props.handleBlur('password')} />
                                    <Text style={styles.InputError}>{ props.touched.password && props.errors.password }</Text>


                                    <TouchableOpacity onPress={props.handleSubmit}>
                                        <View style={[styles.Button, {backgroundColor:"#34eb4f"}]}>
                                            <Text style={styles.ButtonText}>LogIn</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        </Formik>
                    

                    <View style={styles.SignUpContainer}>
                            <View>
                                <Text > Don't have an account? 
                                    <Text style={{color:"blue"}} onPress={()=>navigation.navigate('SignUp')}> SignUp </Text> 
                                </Text>
                            </View>
                    </View>
                    
            </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        color:"#fff",
        justifyContent:"center",
        alignItems:"center"
    },

    TextContainer:{
        width:"90%",
        marginTop:"20%",
        marginBottom:30
    },

    TextContainerTitle:{
        textAlign:"center",
        fontSize:40
    },

    TextContainerSubTitle:{
        textAlign:"center",
        fontSize:12,
        marginVertical:3
    },

    InputContainer:{
        width:"90%",
    },

    InputFields:{
        borderWidth:1,
        borderRadius:50,
        padding:10,
        paddingLeft:15

    },

    InputError:{
        color:"red",
        marginLeft:10,
        paddingBottom:10
    },

    SignUpContainer:{
        width:"90%",
        alignItems:"flex-end",
        marginVertical:10
    },

    Button:{
        borderRadius:50,
        paddingHorizontal:"40%",
        paddingVertical:"4%",
        marginVertical:20,
        alignSelf:"center"
    },

    ButtonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold",
        textTransform:"uppercase"
    }


})


export default LogIn;


