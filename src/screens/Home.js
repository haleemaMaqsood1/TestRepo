import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Nutrition from '../components/Nutrition';
import Activity from '../components/Activity';
import Weight from '../components/Weight';
import Progress from '../components/Progress';
import KetQuiz from '../components/KetQuiz';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
            >

                <SubHeader />
                <Nutrition />
                <Activity />
                <Progress />
                <Weight />
                <KetQuiz />



            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F9F7',

    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        paddingBottom: 100,
    },


});

export default Home;
