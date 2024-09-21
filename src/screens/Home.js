import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const Home = ({ navigation }) => {

    function moveNext() {
        navigation.navigate('ProductList');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../images/Notification.png')}
                style={styles.profileIcon}
                resizeMode="contain"
            />
            <View style={styles.textContainer}>
                <TouchableOpacity style={styles.button} onPress={moveNext}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // height:'100%',
        backgroundColor: 'white',

    },
    textContainer: {
        width: '80%',
        alignItems: 'center',

    },
    button: {
        marginTop: '10%',
        backgroundColor: 'purple',
        height: '20%',
        width: '60%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    }
});

export default Home;
