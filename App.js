import React, { useState } from 'react';
import {
SafeAreaView,
ScrollView,
StatusBar,
StyleSheet,
Text,
useColorScheme,
View,
TextInput,
TouchableOpacity,
} from 'react-native';
import {
Colors,
DebugInstructions,
Header,
LearnMoreLinks,
ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Weather from './src/screen/Weather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
// import useAuth from './hooks/useAuth';
const Stack = createNativeStackNavigator();

const App =  () => {



{
    return (
        <Provider store={store}>

        <NavigationContainer>
             <Stack.Navigator initialRouteName='Weather' >
                <Stack.Screen name="Weather" component={Weather} />
    
            </Stack.Navigator>
    
        </NavigationContainer>
        </Provider>
    );
}

}
const styles = StyleSheet.create({
container: {
flex: 1,
// backgroundColor: '#4FD3DA',
alignItems: 'center',
justifyContent: 'center',
},
title:{
fontWeight: "bold",
fontSize:50,
color:"#fb5b5a",
marginBottom: 40,
},
inputView:{
width:"80%",
backgroundColor:"#3AB4BA",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20
},
inputText:{
height:50,
color:"white"
},
forgotAndSignUpText:{
color:"white",
fontSize:11
},
loginBtn:{
width:"80%",
backgroundColor:"#fb5b5a",
borderRadius:25,
height:50,
alignItems:"center",
justifyContent:"center",
marginTop:40,
marginBottom:10
},
});
export default App;