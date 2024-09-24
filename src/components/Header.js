import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container} >
            <View style={styles.innerContainer}>
                <Image
                    source={require('../images/profile.png')}
                    style={styles.profileIcon}
                    resizeMode="contain"
                />
                <View style={styles.textSection}>
                    <Text style={styles.title}>Hello!</Text>
                    <Text style={styles.description}>View body transformation</Text>

                </View>
                <Image
                    source={require('../images/star.png')}
                    style={styles.starIcon}
                    resizeMode="contain"
                />
                <View style={styles.questionContainer}>
                    <Image
                        source={require('../images/questionMark.png')}
                        style={styles.helpIcon}
                        resizeMode="contain"
                    />
                </View>

            </View>

        </View>
    );


};
const styles = StyleSheet.create({
    container: {
        height: '10%',
        width: '100%',
        backgroundColor: '#F6F9F7',
        marginTop:'2%'
    },
    innerContainer: {
        width: '95%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    profileIcon: {
        height: 51,
        width: 51,
    },
    textSection: {
        width: '50%',
    },
    title: {
        color: '#0D2114',
        fontSize: 20,
        fontWeight: '700'
    },
    description: {
        color: '#99A69D',
        fontSize: 12,
        fontWeight: '400'
    },
    starIcon: {
        height: 51,
        width: 51,
    },
    questionContainer: {
        backgroundColor: '#E4EDE7',
        borderRadius: 30,
        height: 51,
        width: 51,
        justifyContent: 'center',
        alignItems: 'center'
    },
    helpIcon: {
        height: 21,
        width: 21,

    },

});
export default Header;