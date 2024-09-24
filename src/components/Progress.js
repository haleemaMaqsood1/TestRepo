import React from 'react';
import { View, Text, FlatList, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const Progress = () => {
    const nutritionData = [
        {
            id: 1,
            image: require('../images/notes.png'),
            title: 'Notes',
            description: 'Notes to your progress'
        },
        {
            id: 2,
            image: require('../images/ketone.png'),
            title: 'Ketone levels',
            description: '5 (0.5) ±'
        },


    ];
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode='contain' />
            <Text style={styles.value}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>




        </View>
    );
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Progress</Text>
            <FlatList
                data={nutritionData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />

        </View>
    );


};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#0D2114',
        textAlign: 'center',
        fontFamily: 'Ubuntu',
        marginTop: '5%',
        marginBottom: '3%'
    },
    card: {
        backgroundColor: 'white',
        width: '45%',
        height: 155,
        marginBottom: 10,
        borderRadius: 30,
        justifyContent: 'center',

        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E4EDE7',
        margin: '2.5%'

    },
    image: {
        height: 44,
        width: 44,
    },
    value: {
        color: '#0D2114',
        fontSize: 16,
        fontWeight: '700',
        marginTop: '5%'
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
export default Progress;