import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";// import CheckBox from 'react-native-check-box';

const CustomHeader = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.indexHeder}>
				<Text style={styles.indexesText}>{title}</Text>
				<View style={styles.todayView}>
					<Text style={styles.TodayText}>{subtitle}</Text>
					<Image 
				source={require('../../assets/Vector.png')} 
				style={styles.image} 
				/>
				
				</View>


			</View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
		backgroundColor:'white',
        // height:"10%"
	}, 
	indexHeder:{
		flexDirection:'row',
		width:'90%',
		justifyContent:'space-between',
		alignSelf:'center',
		marginTop:'1%'
	},
	indexesText: { 
		fontWeight: "bold", 
		fontSize:RFValue(24),
		font:'SF pro',
		color:'#121212'
	}, 
	todayView: { 
		borderWidth:1,
		borderColor:'#D4D4D4',
		flexDirection:'row',
		borderRadius:30,
		width:"23%",
		justifyContent:'space-around'
	}, 
	TodayText:{
		fontSize:RFValue(12),
		alignSelf:'center',

		color:'#121212'
	},
	image:{
		alignSelf:'center'
	}
	
});

export default CustomHeader;
