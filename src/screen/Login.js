import React, { useState,useEffect } from "react"; 
import { 
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	FlatList, 
	StyleSheet,
	Image,
    Alert,
    KeyboardAvoidingView
} from "react-native"; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';
import CheckBox from "@react-native-community/checkbox";
// import CheckBox from 'react-native-check-box';

const Login = () => { 
    const navigation = useNavigation();

	const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
	const [isSelected, setSelection] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const handleLoginPress = () => {
        if (isButtonDisabled) {
          Alert.alert("Error", "Email and password fields cannot be empty");
        } else {
          Alert.alert("Success", "Logged in successfully");
          navigation.navigate('Home');

        }
      };
    useEffect(() => {
        // Validate email and password fields
        if (email === '' || password === '') {
          setIsButtonDisabled(true);
          setErrorMessage('Email and password fields cannot be empty');
        } else {
          setIsButtonDisabled(false);
          setErrorMessage('');
        }
      }, [email, password]);
	return (
        <KeyboardAvoidingView
		behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		style={styles.container}
		> 
		<View style={styles.container}> 
			<Text style={styles.heading}>Log In to your account</Text> 
			<View style={styles.inputView}>
			<TextInput
			style={styles.inputText}
			placeholder="Email Address"
			value={email}
			placeholderTextColor="#5E6368"
			onChangeText={value => setEmail(value)}/>
			</View>
			<View style={styles.inputView}>
			<TextInput
			style={styles.inputText}
			secureTextEntry
			placeholder="Password"
			value={password}
			placeholderTextColor="#5E6368"
			onChangeText={value => setPassword(value)}/>
			</View>
			<View style={{flexDirection:'row'}}>
			<CheckBox
				value={isSelected}
				onValueChange={setSelection}
                tintColors={{ true: '#95B6EF', false: 'grey' }}
                tintColor="black"

				/>
				<Text style={styles.RememberMe}>Remember Me?</Text>
			</View>
            {/* {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
            ) : null} */}
			<View style={styles.loginView}>
				<TouchableOpacity disabled={isButtonDisabled}
                onPress={handleLoginPress}
                >
                <Text style={[styles.LogInText, isButtonDisabled && styles.disabledText]}>Log In</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.signupStyle}>
				<Text style={styles.dontText}>Don't have an account?</Text>
				<Text style={styles.SignUpText}>Sign Up</Text>

			</View>

			<View style={styles.otherAccountStyle}>
				<Text style={{...styles.dontText,color:'#9C9C9C'}}>____________</Text>
				<Text style={styles.dontText}>Sign In With</Text>

				<Text style={{...styles.dontText,color:'#9C9C9C'}}>____________</Text>


			</View>
			<View style={styles.otherAccountListStyle}>
				<Image 
				source={require('../assets/facebok.png')} 
				style={styles.image} 
				/>
				<Image 
				source={require('../assets/linkedIn.png')} 
				style={styles.image} 
				/>
				<Image 
				source={require('../assets/google.png')} 
				style={styles.image} 
				/>
			</View>
			
		</View> 
    </KeyboardAvoidingView>
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: '2%',
		backgroundColor:'white'
	}, 
	 
	heading: { 

		fontSize:RFValue(24), 
		textAlign:'center',
		fontWeight: "bold", 
		marginBottom: '10%', 
		color:'#95B6EF',
        marginTop:'15%',
	}, 
	inputView:{
		width:"100%",
		backgroundColor:"white",
		borderRadius:5,
		borderColor:"#5E6368",
		borderWidth:0.5,
		height:50,
		marginBottom:20,
		justifyContent:"center",
		padding:20
		}, 
        RememberMe:{
            paddingTop:'2%'
        },
		loginView:{
			width:"70%",
			backgroundColor:"#95B6EF",
			borderRadius:25,
			height:50,
			marginTop:'12%',
			marginBottom:'12%',
			justifyContent:"center",
			padding:20,
			alignSelf:'center'
		},
       
		inputText:{
			height:50,
			fontSize:RFValue(16), 

			color:'#5E6368',
			},
			LogInText:{
				height:50,
				fontSize:RFValue(16), 
				color:'#000000',
				font:'SF pro',
				fontWeight: "bold", 
				marginTop:'15%',
				textAlign:'center'
				},
			dontText:{
				height:50,
			fontSize:RFValue(14), 
			color:'#000000',
		},
		SignUpText:{
			height:50,
		fontSize:RFValue(14), 
		color:"#95B6EF",
		fontWeight:"bold"
	},
	signupStyle:{
		flex:1,
		flexDirection:"row",
		alignSelf:'center',
	},
	otherAccountStyle:{
		// flex:1,
        height:'10%',
		flexDirection:"row",
		alignSelf:'center',
        // backgroundColor:'red'

	},
	otherAccountListStyle:{
		flex:1,
		flexDirection:"row",
		width:'70%',
		alignSelf:'center',
		justifyContent:'space-around',
        // backgroundColor:'black'

	},
    errorText:{
        color:'red',
        fontSize:RFValue(14),
        fontWeight:'bold'
    }
}); 

export default Login;
