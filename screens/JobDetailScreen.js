import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Header from './Components/Headers';
import Progressbar from './Components/Progressbar';

const JobDetailScreen = ({ navigation }) => {
    const job = useSelector(state => state.job);
    const description = job.description && job.description.trim() !== '' ? job.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt risus. Vestibulum commodo tincidunt interdum. Quisque porta odio eu urna maximus dapibus. Praesent ut fringilla arcu. Nam sed imperdiet diam.';
    let requirement = 'Suspendisse dignissim neque sed lorem mattis tristique. Cras viverra elit quis dolor sagittis, sed bibendum nisl consectetur. Pellentesque at imperdiet ante. Phasellus id felis eget leo scelerisque posuere quis sed est. Nam maximus dui vel quam vehicula, eget scelerisque velit lacinia. Quisque sodales eleifend urna. Fusce eu efficitur lectus, et fermentum dui.';
    let jobTitle = job.jobTitle && job.jobTitle.trim() !== '' ? job.title : 'Jr. Front-End Designer';
    console.log("job title", Object.values(job))
    const handleSubmit = () => {

        navigation.navigate('PostSuccessScreen');
    };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.label}>Job Title: {job.jobTitle}</Text>
      <Text style={styles.label}>Description: {job.description}</Text>
      <Text style={styles.label}>Skills: {job.skills}</Text>
      <Text style={styles.label}>Job Type: {job.jobType}</Text>
      <Text style={styles.label}>Education: {job.education}</Text>
      <Text style={styles.label}>Experience Level: {job.experienceLevel}</Text> */}
            <Header />
            <ScrollView contentContainerStyle={styles.scrollView}>

                <Progressbar />
                <View style={styles.innerContainer}>
                    <Text>This is a preview of what your job post will look like to job seekers.</Text>
                    <View style={styles.formInner}>
                        {/* /Job title */}
                        <View style={styles.jobHeader}>

                            <Image
                                source={require('../src/assets/jobImage.png')}
                                style={styles.profileIcon}
                                resizeMode="contain"

                            />
                            <View style={styles.jobHeaderInner}>
                                <Text style={styles.fieldName}>{jobTitle}</Text>
                                <Text style={{ fontWeight: '500' }}>Kickstarter<Text style={styles.postedText}>,in Manchester</Text></Text>
                                <View style={styles.formHederRiht}>
                                    <Text style={styles.tag}>React</Text>
                                    <Text style={styles.tag}>Mongo Db</Text>
                                    <Text style={styles.postedText}>posted 6 hours ago</Text>
                                </View>
                                {/* <Image
                                source={require('../src/assets/starIcon.png')}
                                style={styles.profileIcon}
                                resizeMode="contain"
                            /> */}

                            </View>


                        </View>





                        <Text style={styles.fieldName}>Job Description</Text>
                        <Text style={styles.detailText}>{description} </Text>
                        <Text style={styles.fieldName}>Job Requirement</Text>
                        <Text style={styles.detailText}>{requirement}</Text>

                    </View>
                    <Text>_________________________________________________</Text>

                    <TouchableOpacity onPress={handleSubmit} style={styles.submitButton} >
                        <Text style={styles.submitText}>Payment</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    scrollView: {
        flexGrow: 1,
    },
    jobHeader: {
        marginTop: '3%',
        flexDirection: 'row'
    },
    jobHeaderInner: {
        justifyContent: 'space-between',
        width: '70%',
        marginLeft: '3%'
    },
    formHederRiht: {
        flexDirection: 'row',
        marginTop: '3%'
    },
    innerContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    label: {
        fontSize: 18,
        marginBottom: 12,
        paddingLeft: 30,
    },
    fieldName: {
        color: '#222741',
        fontSize: 14,
        fontWeight: '600',
        paddingTop: '3%',
        paddingBottom: '3%',


    },
    submitButton: {
        // flex:1,
        backgroundColor: '#01C96C',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center', // Center the text vertically
        alignItems: 'center',
        width: '100%',
        marginTop: '3%',
        // marginBottom:'20%',
    },
    submitText: {
        // flex:1,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    detailText: {
        paddingBottom: '5%'
    },
    formInner: {
        borderWidth: 0.2,
        borderRadius: 10,
        marginBottom: '3%',
        paddingLeft: '3%',
        marginTop: '3%',
    },
    tag: {
        backgroundColor: '#EBF8FD',
        width: '30%',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '500',
        color: '#62636A'
    },
    postedText: {
        fontSize: 10,
        color: '#75788D',
        fontWeight: '400',
        paddingLeft: '3%'
    },
    underline: {
        borderBottomColor: 'grey',
        borderWidth: '0.5'
    },
});

export default JobDetailScreen;
