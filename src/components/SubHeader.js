import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';

const SubHeader = () => {
    const [selected, setSelected] = useState('daily'); // Default to daily

    return (
        <View style={styles.container} >
            <View style={styles.calendarStyle}>
                <Image
                    source={require('../images/leftArrow.png')}
                    style={styles.arrow}
                    resizeMode="contain"
                />
                <Image
                    source={require('../images/calendar.png')}
                    style={styles.calendarIcon}
                    resizeMode="contain"
                />
                <Text style={styles.date}>Apr 28, 2023.</Text>


                <Image
                    source={require('../images/rightArrow.png')}
                    style={styles.arrow}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.switchSection}>
                <View style={styles.switchContainer}>
                    <TouchableOpacity
                        style={[styles.switchButton, selected === 'daily' && styles.selectedSwitch]}
                        onPress={() => setSelected('daily')}
                    >
                        <Text style={styles.dailyText}>Daily</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.switchButton, selected === 'weekly' && styles.selectedSwitch]}
                        onPress={() => setSelected('weekly')}
                    >
                        <Text style={styles.weeklyText}>Weekly</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    );


};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '8%',
        backgroundColor: '#F6F9F7',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    calendarStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '45%',
        justifyContent: 'space-around'


    },
    arrow: {
        height: 17,
        width: 17
    },
    calendarIcon: {
        height: 26,
        width: 26,
    },
    date: {
        color: '#50C878',
        fontSize: 12,
        fontWeight: '700'
    },
    switchSection: {
        width: '45%',
        justifyContent: 'center'

    },
    switchContainer: {
        borderWidth: 1,
        borderColor: '#E4EDE7',
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50%'
    },
    selectedSwitch: {
        backgroundColor: '#50C878',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
        borderRadius: 50,
        color: 'white',

    },
    weeklyText: {
        color: '#99A69D',
        fontSize: 16,
        fontWeight: '700'
    },
    dailyText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    }

});
export default SubHeader;