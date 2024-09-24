import React from 'react';
import { View, Text, FlatList, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const Activity = () => {
    const nutritionData = [
        {
            id: 1,
            image: require('../images/steps.png'),
            value: 709,
            unit: 'Steps',
            description: 'of >2500'
        },

    ];
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode='contain' />
            <View style={{ flexDirection: 'row', width: '55%' }}>
                <Text style={styles.value}>{item.value}</Text>
                <Text style={styles.unitstyle}>{item.unit}</Text>

            </View>
            <Text style={styles.description}>{item.description}</Text>



        </View>
    );
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Activity</Text>
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
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#0D2114',
        textAlign: 'center',
        fontFamily: 'Ubuntu',
        marginTop: '10%',
        marginBottom: '3%'
    },
    card: {
        backgroundColor: 'white',
        width: '95%',
        height: 99,
        marginBottom: 10,
        borderRadius: 30,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E4EDE7'

    },
    image: {
        height: 49,
        width: 49,
    },
    value: {
        color: '#0D2114',
        fontSize: 36,
        fontWeight: '700'
    },
    unitstyle: {
        color: '#0D2114',
        fontSize: 14,
        fontWeight: '400',
        marginTop: '15%',
        marginLeft: '5%'
    },
    description: {
        color: '#99A69D',
        fontSize: 12,
        fontWeight: '400'
    }

});
export default Activity;