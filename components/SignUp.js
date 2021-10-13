import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, ScrollView} from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';
import auth from "../src/api/user";



const SingUp = (props) =>{

    const [isFocued, setisFocused] = useState(false)

    const onFocusedHandler = () =>{
        setisFocused(true)
    }


    const apiSubmitHandler = async ({username, email, password, confirmPassword}) =>{
        
        let  result = await auth.signUp( username, email,  password, confirmPassword)
        console.log('api-result', result)
        props.disable()
    }
  

    const signUpSchema = yup.object({
        username: yup.string().required('*Required').max('10', '*Must be 10 characters or less'),
        email: yup.string().email('Invalid Email').required('*Required'),
        password: yup.string().min(8, '*Password must be aleast 8 characters').required('*Required'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must be match').required('*Required')

    })
    
    return(
        <Modal visible={props.visible} animationType="slide">
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextContainerTitle}>Create Account</Text>
                </View>
            
            <Formik 
                initialValues={{username:'', email:'', password:'', confirmPassword:'' }}
                validationSchema={signUpSchema}
                onSubmit={(values, actions) =>
                {
                    actions.resetForm()
                    apiSubmitHandler(values)
                    console.log("@",values)   
                }}
                >
                {
                    (props)=>(
                        <View style={styles.InputContainer}>
                            <TextInput style={[styles.InputFields, {borderColor: isFocued ? '#0779ef': '#eee'}]} 
                            placeholder="Enter UserName" 
                            onFocus={onFocusedHandler} 
                            onChangeText={props.handleChange('username')} 
                            value={props.values.username} 
                            onBlur={props.handleBlur('username')} />
                            <Text style={styles.InputError}>{ props.touched.username && props.errors.username }</Text>

                            <TextInput style={[styles.InputFields, {borderColor: isFocued ? '#0779ef': '#eee'}]} 
                            placeholder="Enter Email" 
                            onFocus={onFocusedHandler} 
                            onChangeText={props.handleChange('email')} 
                            value={props.values.email}
                            onBlur={props.handleBlur('email')} />
                            <Text style={styles.InputError}>{ props.touched.email && props.errors.email }</Text>
                            
                            <TextInput style={[styles.InputFields, {borderColor: isFocued ? '#0779ef': '#eee'}]} 
                            placeholder="Enter Password" 
                            onFocus={onFocusedHandler} 
                            secureTextEntry={true} 
                            onChangeText={props.handleChange('password')} 
                            value={props.values.password} 
                            onBlur={props.handleBlur('password')} />
                            <Text style={styles.InputError}>{ props.touched.password && props.errors.password }</Text>


                            <TextInput style={[styles.InputFields, {borderColor: isFocued ? '#0779ef': '#eee'}]} 
                            placeholder="Repeat Password" 
                            onFocus={onFocusedHandler} 
                            secureTextEntry={true} 
                            onChangeText={props.handleChange('confirmPassword')} 
                            value={props.values.confirmPassword} 
                            onBlur={props.handleBlur('confirmPassword')}/>
                            <Text style={styles.InputError}>{ props.touched.confirmPassword && props.errors.confirmPassword }</Text>

                            <TouchableOpacity onPress={props.handleSubmit}>
                                <View style={[styles.Button, {backgroundColor:"#34eb4f"}]}>
                                    <Text style={styles.ButtonText}>SignUp</Text>
                                </View>
                            </TouchableOpacity> 
                        </View>
                    )
                }
                </Formik>

                

                <View style={styles.BtnContainer}>
                    

                    <TouchableOpacity onPress={props.disable}>
                        <View style={[styles.Button, {backgroundColor:"#eb7d34"}]}>
                            <Text style={styles.ButtonText}>Go Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </Modal>
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
        width:"100%",
        marginVertical:30
    },

    TextContainerTitle:{
        textAlign:"center",
        fontSize:40,
    },

    InputContainer:{
        width:"90%",
    },

    InputFields:{
        borderWidth:1,
        borderRadius:50,
        padding:10,
        paddingLeft:15,
        
    },

    InputError:{
        color:"red",
        marginLeft:10,
        paddingBottom:10
    },

    BtnContainer:{
        width:"90%",
        height:"20%",
        justifyContent:"flex-end",
        alignItems:"center"
    },

    Button:{
        borderRadius:50,
        paddingHorizontal:"40%",
        paddingVertical:"6%",
        marginBottom:20
    },

    ButtonText:{
        color:"#fff",
        fontSize:13,
        fontWeight:"bold",
        textTransform:"uppercase"
    }

})


export default SingUp;