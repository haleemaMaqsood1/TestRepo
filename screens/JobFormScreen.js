import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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
import { Dropdown } from 'react-native-element-dropdown';

const JobFormScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [jobTitle, setJobTitleInput] = useState('');
    const [description, setDescriptionInput] = useState('');
    const [skills, setSkillsInput] = useState('');
    const [jobType, setJobTypeInput] = useState('');
    const [education, setEducationInput] = useState('');
    const [experienceLevel, setExperienceLevelInput] = useState('');

    const skillsData = [
        { label: 'JavaScript', value: '1' },
        { label: 'React', value: '2' },
        { label: 'Node.js', value: '3' },
        { label: 'Python', value: '4' },
        { label: 'Django', value: '5' },
        { label: 'Java', value: '6' },
        { label: 'Spring', value: '7' },
        { label: 'Ruby on Rails', value: '8' },
    ];

    const jobTypeData = [
        { label: 'Full Time', value: '1' },
        { label: 'Part Time', value: '2' },
    ];

    const educationData = [
        { label: 'Bachelors', value: '1' },
        { label: 'Masters', value: '2' },
    ];

    const experienceData = [
        { label: '1-3 years', value: '1' },
        { label: '3-5 years', value: '2' },
        { label: '5-10 years', value: '3' },
    ];

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
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Progressbar />

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
                            placeholder="Enter job Description"
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
                    <Dropdown
                        style={styles.dropdown}
                        data={skillsData}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Skills"
                        value={skills}
                        onChange={item => {
                            setSkillsInput(item.label);
                        }}
                    />

                    <Text style={styles.fieldName}>Job Type</Text>
                    <Dropdown
                        style={styles.dropdown}
                        data={jobTypeData}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Job Type"
                        value={jobType}
                        onChange={item => {
                            setJobTypeInput(item.label);
                        }}
                    />

                    <Text style={styles.fieldName}>Education</Text>
                    <Dropdown
                        style={styles.dropdown}
                        data={educationData}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Education"
                        value={education}
                        onChange={item => {
                            setEducationInput(item.label);
                        }}
                    />

                    <Text style={styles.fieldName}>Experience Level</Text>
                    <Dropdown
                        style={styles.dropdown}
                        data={experienceData}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Experience Level"
                        value={experienceLevel}
                        onChange={item => {
                            setExperienceLevelInput(item.label);
                        }}
                    />

                    <View style={{ paddingTop: '8%' }} ></View>
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
    },
    inputWrapper: {
        position: 'relative',
        marginBottom: 12,
    },
    dropdown: {
        backgroundColor: '#F2F2F3',
        height: 60,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 12,
    },
    input: {
        backgroundColor: '#F2F2F3',
        height: 60,
        borderRadius: 10,
        paddingLeft: 10,
    },
    descriptionInput: {
        height: 250,
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
        marginTop: '2%',
    },
    submitButton: {
        backgroundColor: '#01C96C',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center',
        justifyContent: 'center'
    },
});

export default JobFormScreen;
