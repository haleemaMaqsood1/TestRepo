import React from 'react';
import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const PostSuccessScreen = ({ navigation }) => {
  const job = useSelector(state => state.job);

  return (
    <View style={styles.container}>
        <Image
            source={require('../src/assets/2Image.png')}
            style={styles.profileIcon}
            resizeMode="contain"

          />
        <View style={styles.textContainer}>
            <Text style={styles.title}>Your Job is Posted!</Text>
            <Text style={styles.textStyle}>Congratulations! Your job has been </Text>
            <Text style={styles.textStyle}>successfully posted and is now visible to</Text>
            <Text style={styles.textStyle}>potential candidates. Good luck in your</Text>
            <Text style={styles.textStyle}> recruitment process!</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Manage Jobs</Text>
            </TouchableOpacity>

        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
    backgroundColor:'#01c96c',

  },
  textContainer:{
    width:'80%',
    alignItems:'center',
    
  },
  title: {
   color:'white',
   fontSize:24,
   fontWeight:'500',
   textAlign:'center',

  },
  textStyle:{
    fontSize:14,
    color:'white',

  },
  button:{
    marginTop:'10%',
    backgroundColor:'white',
    height:'20%',
    width:'60%',
    borderRadius:10,
    justifyContent: 'center', // Center the text vertically
        alignItems: 'center',
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#01C96C'
  }
});

export default PostSuccessScreen;
