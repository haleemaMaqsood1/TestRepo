import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
TextInput,
TouchableOpacity,
Alert
} from 'react-native';
import {
Colors,
DebugInstructions,
Header,
LearnMoreLinks,
ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from '../component/CustomComponent';
import { auth } from '../../FirebaseConfig';
const Login =  () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

const onPressLogin = async() => {
    console.log("login click",email)
    if(email && password){
        try {
            // await createUserWithEmailAndPassword(auth,email,password);
            await signInWithEmailAndPassword(auth,email,password);
            alert(JSON.stringify("Login app successfully"))
        } catch (error) {
            console.log("got error,",error.message);
            alert(JSON.stringify(error.message))

        }
    }
// Do something about login operation
};

const onPressSignUp =async () => {
    console.log("signup click",email);
    if(email && password){
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            alert(JSON.stringify(" Account created successfully"))


        } catch (error) {
            console.log("got error,",error.message);
            alert(JSON.stringify(error.message))

        }
    }
};
return (
<View style={styles.container}>
<Text style={styles.title}> Login Screen</Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Email"
value={email}
placeholderTextColor="#003f5c"
onChangeText={value => setEmail(value)}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
value={password}
placeholderTextColor="#003f5c"
onChangeText={value => setPassword(value)}/>
</View>
<TouchableOpacity
onPress = {onPressForgotPassword}>
<Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
</TouchableOpacity>
     <CustomButton onPress={onPressLogin} text="LOGIN" style={styles.loginBtn} />
     <CustomButton onPress={onPressSignUp} text="SignUp" style={styles.signUpBtn} />
 
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
// backgroundColor: '#4FD3DA',
alignItems: 'center',
justifyContent: 'center',
},
title:{
fontWeight: "bold",
fontSize:50,
color:"#fb5b5a",
marginBottom: 40,
},
inputView:{
width:"80%",
backgroundColor:"#3AB4BA",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20
},
inputText:{
height:50,
color:"white"
},
forgotAndSignUpText:{
color:"white",
fontSize:11
},
loginBtn:{
width:"40%",
backgroundColor:"#fb5b5a",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10,
},
signUpBtn:{
    width:"40%",
    backgroundColor:"green",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
    marginBottom:10
    },
    loginText:{
        color:'white'
    }
});
export default Login;