import React, { Component,useState } from 'react';
import { View, TextInput, Text, Button,TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import {
    setJobTitle,
    setDescription,
    setSkills,
    setJobType,
    setEducation,
    setExperienceLevel,
} from '../redux/jobSlice';
import Header from './Components/Headers';
import Progressbar from './Components/Progressbar';

const JobFormScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [jobTitle, setJobTitleInput] = useState('');
    const [description, setDescriptionInput] = useState('');
    const [skills, setSkillsInput] = useState('');
    const [jobType, setJobTypeInput] = useState('');
    const [education, setEducationInput] = useState('');
    const [experienceLevel, setExperienceLevelInput] = useState('');

    const handleSubmit = () => {
        dispatch(setJobTitle(jobTitle));
        dispatch(setDescription(description));
        dispatch(setSkills(skills));
        dispatch(setJobType(jobType));
        dispatch(setEducation(education));
        dispatch(setExperienceLevel(experienceLevel));
        navigation.navigate('JobDetail');
    };

    const countWords = (text) => {
        return text ? text.trim().split(/\s+/).length : 0;
    };

    return (
        <View
            style={styles.container}
            // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Header/>
            {/* <Progressbar/> */}
            <ScrollView contentContainerStyle={styles.scrollView}>
            <Progressbar/>

                <View style={styles.formContainer}>
                   
                    <Text style={styles.fieldName}>Job Title</Text>
                    <TextInput
                        placeholder="Enter Job Title"
                        value={jobTitle}
                        onChangeText={setJobTitleInput}
                        style={styles.input}
                    />
                    <Text style={styles.fieldName}>Description</Text>
                    <View style={styles.inputWrapper}>
                        {description === '' && (
                            <Text style={styles.placeholder}>
                                Your job description
                            </Text>
                        )}
                        <TextInput
                            placeholder=""
                            value={description}
                            onChangeText={setDescriptionInput}
                            style={[styles.input, styles.descriptionInput]}
                            multiline
                            textAlignVertical="top"
                        />
                        <Text style={styles.wordCount}>
                            {countWords(description)}/1500
                        </Text>
                    </View>
                    <Text style={styles.fieldName}>Skills</Text>
                    <TextInput
                        placeholder="Type Skills"
                        value={skills}
                        onChangeText={setSkillsInput}
                        style={styles.input}
                    />
                    <Text style={styles.fieldName}>Job Type</Text>
                    <TextInput
                        placeholder="Select Job Type"
                        value={jobType}
                        onChangeText={setJobTypeInput}
                        style={styles.input}
                    />
                    <Text style={styles.fieldName}>Education</Text>
                    <TextInput
                        placeholder="Enter Education"
                        value={education}
                        onChangeText={setEducationInput}
                        style={styles.input}
                    />
                    <Text style={styles.fieldName}>Experience Level</Text>
                    <TextInput
                        placeholder="Enter Experience Level"
                        value={experienceLevel}
                        onChangeText={setExperienceLevelInput}
                        style={styles.input}
                    />
                    <View style={{paddingTop:'8%'}} ></View>
                    <TouchableOpacity onPress={handleSubmit} style={styles.submitButton} >
                        <Text style={styles.submitText}>Get Started</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    formContainer: {
        width: '90%',
        alignSelf: 'center',
        // marginTop:'20%'
    },
    inputWrapper: {
        position: 'relative',
        marginBottom: 12,
    },
    input: {
        backgroundColor: '#F2F2F3',
        height: '8%',
        borderRadius: 10,
        paddingLeft: 10,
    },
    descriptionInput: {
        height: 100,
        textAlignVertical: 'top',
    },
    placeholder: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: '#888',
    },
    wordCount: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: '#888',
    },
    fieldName: {
        color: '#040607',
        fontWeight: '500',
        fontSize: 14,
        marginBottom: '3%',
    },
    submitButton:{
        // flex:1,
        backgroundColor:'#01C96C',
        height:60,
        borderRadius:10,
        justifyContent: 'center', // Center the text vertically
        alignItems: 'center',
        // marginBottom:'10%',
    },
    submitText:{
        // flex:1,
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'500',
        alignSelf:'center',
        justifyContent:'center'
    },
});

export default JobFormScreen;
