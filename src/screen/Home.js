import React, { useState,useEffect } from "react"; 
import {KeyboardAvoidingView, } from "react-native";
import Header from "./component/Header";
import { 
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	FlatList, 
	StyleSheet,
	Image,
} from "react-native"; 
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";// import CheckBox from 'react-native-check-box';
import CustomHeader from "./component/CustomHaeder";

const Home = () => { 

	const data = [
		{
		  id: 1,
		  title: "Pulse",
		  count: 80,
		  unit: "BPM",
		  icon: require('../assets/pulse.png'),
		},
		{
		  id: 2,
		  title: "Activities",
		  count: "1.2K",
		  unit: "steps",
		  icon: require('../assets/footsteps.png'),
		},
		{
		  id: 3,
		  title: "Water",
		  count: "0.8",
		  unit: "liters",
		  icon: require('../assets/droplet.png'),
		},
		{
		  id: 4,
		  title: "Calories",
		  count: 35,
		  unit: "kcal",
		  icon: require('../assets/calorie.png'),
		},
	  ];
	  
  const renderItem = ({ item }) => (
	<View style={styles.card}>
		<View style={styles.cardTitle}>
			<Text style={styles.title}>{item.title}</Text>

			<Image source={item.icon} style={styles.icon} />
		</View>	


	  <View style={styles.details}>
		<Text style={styles.count}>{item.count}</Text>
		<Text style={{...styles.count,fontSize:RFValue(14),paddingTop:23}}>{item.unit}</Text>

	  </View>
	</View>
  );

	return ( 
		<KeyboardAvoidingView
		behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		style={styles.container}
		>
			<Header/>
			<CustomHeader title="Indexes" subtitle="Today"/>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				numColumns={2}
				/>
			<CustomHeader title="Pedometer" subtitle="Today"/>

		

		</KeyboardAvoidingView>
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		// flex: 1, 
		backgroundColor:'white'

	}, 
	
	card: {
		// alignItems: 'center',
		padding: 20,
		marginLeft:'3.5%',
		width: '43%',
		margin:'3%',
		borderRadius:10,
		backgroundColor:'#FFFFFF', 

		shadowColor: '#000',
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		// backgroundColor:'grey', // Adjusted width to show two cards in a row

	  },
	  cardTitle:{
       flexDirection:'row',
	   width:'100%',
	//    padding:'5%',
	   justifyContent:'space-between',
	   color:'#121212'
	
	  },
	  icon: {
		width: 27,
		height: 27,
		// marginRight: 5,
	  },
	  details: {
		flexDirection:'row',
		textAlign:'left',
		color:'black'

	  },
	  title: {
		fontSize: RFValue(14),
		color:'#121212'

	  },
	  count: {
		fontSize: RFValue(32),
		fontWeight: 'bold',

	  },
	  separator: {
		height: 1,
		backgroundColor: '#ccc',
	  },
	
}); 

export default Home;
