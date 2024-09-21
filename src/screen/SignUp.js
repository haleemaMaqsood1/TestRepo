import React, { useState } from "react"; 
import { 
	View, 
	Text, 
	TextInput, 
	Button,
	StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    Platform,
	Alert
} from "react-native"; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from "@react-native-community/checkbox";

const SignUp = () => { 
    const navigation = useNavigation();

	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
    const [password,setPassword]= useState('');
	const [phone,setPhone]= useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const [cpassword,setcPassword]= useState('');
	const [isSelected, setSelection] = useState(false);

	const [date, setDate] = useState(new Date());
	const [show, setShow] = useState(false);
  
	const onChange = (event, selectedDate) => {
	  const currentDate = selectedDate || date;
	  setShow(Platform.OS === 'ios');
	  setDate(currentDate);
	};
	const handleLoginPress = () => {
        // if (isButtonDisabled) {
        //   Alert.alert("Error", "Email and password fields cannot be empty");
        // } else {
          Alert.alert("Success", "Sign in successfully");
          navigation.navigate('Home');

        // }
      };
	const showDatepicker = () => {
	  setShow(true);
	};
      
	return (
        <KeyboardAvoidingView
		behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		style={styles.container}
		> 
			<Text style={styles.heading}>Welcome to Dummy Section!</Text>
			<Text style={styles.subHeading}>Personal Information</Text>

			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Full Name"
					value={name}
					placeholderTextColor="#5E6368"
					onChangeText={value => setName(value)}
				/>
			</View>

            <View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Date of Birth"
					value={date.toDateString()}
					placeholderTextColor="#5E6368"
					editable={false}
				/>
				<TouchableOpacity onPress={showDatepicker} style={styles.iconContainer}>
					<Image
						source={require('../assets/calendar.png')} // Replace with your calendar icon
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Phone Number"
					value={phone}
					placeholderTextColor="#5E6368"
					onChangeText={value => setPhone(value)}
				/>
			</View>
			<Text style={styles.subHeading}>Create Account</Text>
			<View style={styles.inputView}>
				<TextInput
					style={styles.inputText}
					placeholder="Email Address"
					value={email}
					placeholderTextColor="#5E6368"
					onChangeText={value => setEmail(value)}
				/>
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
			<View style={styles.inputView}>
			<TextInput
			style={styles.inputText}
			secureTextEntry
			placeholder="Confirm Password"
			value={cpassword}
			placeholderTextColor="#5E6368"
			onChangeText={value => setcPassword(value)}/>
			</View>
			<View style={{flexDirection:'row'}}>
			<CheckBox
				value={isSelected}
				onValueChange={setSelection}
                tintColors={{ true: '#95B6EF', false: 'grey' }}
                tintColor="black"

				/>
				<View>
					<Text >By signing up you're indicating that you</Text>
					<Text>accept our Terms of Use and our Privacy </Text>
					<Text>policy</Text>
				</View>
			</View>
			<View style={styles.loginView}>
				<TouchableOpacity 
                onPress={handleLoginPress}
                >
                <Text style={styles.LogInText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: '5%',
		backgroundColor: 'white',
	}, 
	heading: { 
		fontSize: RFValue(32), 
		fontWeight: "bold", 
		color: '#333333',
        marginTop: '5%',
	}, 
	subHeading: { 
		fontSize: RFValue(24),
		color: '#5C5C5C',
		marginBottom:'5%',
	},
	loginView:{
		width:"55%",
		backgroundColor:"#95B6EF",
		borderRadius:25,
		height:50,
		marginTop:'5%',
		marginBottom:'12%',
		justifyContent:"center",
		alignSelf:'center'
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
	inputView: {
		width: "100%",
		backgroundColor: "white",
		borderRadius: 5,
		borderColor: "#9C9C9C",
		borderWidth: 0.5,
		height: 50,
		marginBottom: 10,
		justifyContent: "center",
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
	}, 
	inputText: {
		flex: 1,
		height: 50,
		fontSize: RFValue(14), 
		color: '#9C9C9C',
	},
	iconContainer: {
		padding: 10,
	},
	icon: {
		width: 15,
		height: 17,
	},
	dateText: {
		fontSize: RFValue(14),
		color: '#333',
		marginTop: 10,
	},
}); 

export default SignUp;
