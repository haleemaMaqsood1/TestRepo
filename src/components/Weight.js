import React from 'react';
import { View, Text,FlatList, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const Weight = () => {
    const nutritionData=[
        {
            id:1,
            image:require('../images/week.png'),
            value:'Weight',
            unit:'Re-measure',
            description:'75 of 70 Kg'
        },
       
    ];
    const renderItem = ({ item }) => (
        <View style={styles.card}>
                      <Image source={item.image} style={styles.image} resizeMode='contain' />
                      <View style={{width:'55%'}}>
                        <Text style={styles.value}>{item.value}</Text>
                        <Text style={styles.unitstyle}>{item.unit}</Text>

                      </View>
                      <Text style={styles.description}>{item.description}</Text>

         
    
        </View>
      );
    return (
        <View style={styles.container} >
           <FlatList
            data={nutritionData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
           />

        </View>
    );


};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: '#F6F9F7',
        // backgroundColor: 'red',
    },
    title:{
        fontSize:24,
        fontWeight:'700',
        color:'#0D2114',
        textAlign:'center',
        fontFamily:'Ubuntu',
        marginTop:'10%',
        marginBottom:'3%'
    },
    card: {
        backgroundColor: 'white',
        width: '95%',
        height:99,
        marginBottom:10,
        borderRadius:30,
        justifyContent:'space-evenly',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#E4EDE7'
    
      },
    image:{
        height:49,
        width:49,
    },
    value:{
        color:'#0D2114',
        fontSize:16,
        fontWeight:'700'
    },
    unitstyle:{
        color:'#99A69D',
        fontSize:12,
        fontWeight:'400',
       
    },
    description:{
        color:'#99A69D',
        fontSize:12,
        fontWeight:'400'
    }

});
export default Weight;