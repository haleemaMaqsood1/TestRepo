import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

const KetQuiz = () => {


    return (
        <View style={styles.quizSection}>
            <Image
                source={require('../images/quiz.png')}
                style={styles.quiz}
                resizeMode="contain"
            />
            <TouchableOpacity>
                <Text style={styles.basicText}>
                    Get to know the basics ->
                </Text>
            </TouchableOpacity>


        </View>
    );


};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'space-between'
    },
    quizSection: {
        alignItems: 'center',
        backgroundColor: '#F6F9F7',
    },
    quiz: {
        width: 223,
        height: 187,
    },
    basicText: {
        color: '#50C878',
        fontSize: 12,
        fontweight: '400',
        textAlign: 'center'
    }
});
export default KetQuiz;