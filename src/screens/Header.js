import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
export default function Header() {
//   const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <View style={styles.imageOuter}>

         <Image
                source={require('../assets/home.png')}            
                resizeMode="stretch"
                style={styles.imageStyle}
              />
        </View>
              <View style={{flexDirection:"column",alignItems:'flex-start'}}>
              <Text style={styles.headingText}>Routines</Text>
      {/* <Text style={styles.headingText}>John Doe</Text> */}
     </View> 
     <View style={styles.imageOuter}>

      <Image
                source={require('../assets/Vector.png')}            
                resizeMode="stretch"
                style={styles.imageStyle}
              />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor:'#182545',
  flexDirection:'row',
  width:'100%',
  height:'11%',
// alignSelf:'center',
justifyContent:'space-between',
paddingLeft:'3%',
paddingRight:'3%'

},
  headingText: {
    color: 'white',
    // fontFamily: font.SemiBold,
    marginTop:'15%',
    fontSize: 25,
    fontWeight:'700',
  },
  imageOuter:{height:40,width:40,backgroundColor:'white',borderRadius:18,marginTop:'6%'},
  imageStyle:{
    marginTop:'8%',
    marginLeft:'10%',
    backgroundColor:'white',
    borderRadius:20,
    height:35,
    width:30,
    // borderColor:'#1860f8',
    borderWidth:1,
    alignItem:'center'
  },
});
