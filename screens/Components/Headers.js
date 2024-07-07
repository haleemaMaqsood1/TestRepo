import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>

      <View style={styles.rightContainer}>

        <TouchableOpacity onPress={goBack}>
          <Image
            source={require('../../src/assets/arrowLeft.png')}
            style={styles.profileIcon}
            resizeMode="contain"

          />
        </TouchableOpacity>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.usernameText}>Post a Job</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '3%',
    paddingVertical: '3%',
    borderBottomColor: '#ccc',
    backgroundColor:'white',
    width:'100%',
  },
  profileIcon: {
   
    alignSelf: 'center',
    width: 100,
  },

  ProfileContainer: {
    padding: 5,
    borderColor: 'white',
    borderWidth: 0.25,
    width: '11%',
    height: 35,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameText: {
    fontSize: 17,
    color:'black',
    textAlign: 'center',
    fontWeight:'500',
  },
  rightContainer: {
    padding: 5,
    width: '12.5%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

 
});

export default Header;
