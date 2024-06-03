import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";// import CheckBox from 'react-native-check-box';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.ProfileContainer}>
            <Image
            source={require('../../assets/Profile.png')}
            style={styles.profileIcon}
            />
        </View>
        <View style={styles.userName}>
            <Text style={styles.usernameText}>Hello, </Text>
            <Text style={{...styles.usernameText,fontWeight:'bold'}}>Little Foot </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.rightContainer}>
        <Image
          source={require('../../assets/more.png')}
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    paddingVertical:'3%',
    // borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    // backgroundColor:'red'
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProfileContainer:{
    backgroundColor:'#EEF2F3',
    width:'27%',
    marginRight:'5%',
    height:45,
    borderRadius:30
  },
  profileIcon: {
    width: "87%",
    // height:29,
    backgroundColor:"#EEF2F3 ",
    paddingTop:45,
    alignSelf:'center'
  },
  usernameText: {
    fontSize: RFValue(16),
    color:"#1E1E1E",
  },
  rightContainer: {
    padding: 5,
  },
  dropdownIcon: {
    width: 24,
    height: 29,
  },
  userName:{
  }
});

export default Header;
