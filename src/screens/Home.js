import React, {useState,useEffect} from 'react';
import { StyleSheet,Text,Switch, View,KeyboardAvoidingView, TouchableOpacity,Image,FlatList,Alert,ImageBackground } from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from '../redux/actions/countActions';
import Header from './Header';
import SearchFilter from './Components/SearchFilter';
import { GetRoutine } from '../redux/endpoint';
import axios from 'axios';
export default function Home(){
     const [data,setData] = useState([
    {
      id: 1,
      name: "Mayo Clinic",
      location: "200 First St, MN",
      ratingCount: 4.5,
      image: "https://picsum.photos/800/800",
      expense:'$ 100.00',
    },
    {
      id: 2,
      name: "Kuwait Medical Laboratory",
      location: "200 First St, MN",
      ratingCount: 3.5,
      image: "https://picsum.photos/800/800",
      expense:'$ 100.00',

    },
    {
      id: 3,
      name: "Jinnah Hospital",
      location: "200 First St, MN",
      ratingCount: 4.5,
      image: "https://picsum.photos/800/800",
      expense:'$ 100.00',

    },
    {
      id: 4,
      name: "Kuwait Medical Laboratory",
      location: "200 First St, MN",
      ratingCount: 3,
      image: "https://picsum.photos/800/800",
      expense:'$ 100.00',

    },
    {
      id: 5,
      name: "Kuwait Medical Laboratory",
      location: "200 First St, MN",
      ratingCount: 4,
      image: "https://picsum.photos/800/800",
      expense:'$ 100.00',

    },
    {
      id: 6,
      name: "General Hospital",
      location: "200 First St, MN",
      ratingCount: 4,
      image: "https://picsum.photos/800/800",
      expense:'$ 100.00',

    },
    {
      id: 7,
      name: "General Hospital",
      location: "200 First St, MN",
      ratingCount: 4,
      image: "https://picsum.photos/800/800",
      expense:'$ 100.00',

    }, {
      id: 8,
      name: "General Hospital",
      location: "200 First St, MN",
      ratingCount: 4,
      image: "https://picsum.photos/800/800",
      expense:'$ 100.00',

    },
  ]);
  const [search, setSearch] = useState('');

  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const [isEnabled, setIsEnabled] = useState(false);
  var axios = require('axios');

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 
  const routineList = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "ddc58e6a-2e69-4f44-97e8-1454eb352069");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://devapi.getgoally.com/v1/api/reminders/all", requestOptions)
    .then(data => {
      console.log(Object.keys(data._bodyBlob));
      // alert()
      // Now you can access the properties of the response object
      const totalDocs = data.totalDocs;
      const offset = data.offset;
      const limit = data.limit;
    })
      .catch(error => {
        console.log('error', error);
        setIsLoading(false); // Set loading to false if there's an error
      });
   
  }
  const handleSearch = () => {
    console.log(">>>",search)
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log("data need to be filterer",search)
    setData(filteredData);
  };
  useEffect(() => {
    routineList();
  },[]);

  const renderItem = ({ item }) => {
    // console.log(item.visualAidUrl);
    return (
  <View style={styles.flatListContainer}>
          <View style={styles.flatlistRow}>
              <Image
                source={{ uri: item.image }}             
                resizeMode="stretch"
                style={styles.flatlistImageStyle}
              />
              <View style={{flexDirection:'column',paddingLeft:'5%', width:'60%'}}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemName}>{item.name}</Text>

              </View>
          <Image
                source={require('../assets/arrow.png')}            
                resizeMode="stretch"
                style={{...styles.flatlistImageStyle,height:"40%",marginLeft:'10%'}}
              />
          {/* <Text style={styles.itemExpense}>{item.expense}</Text> */}
          </View>
    </View>      
    );
  };
return(
  // <View style={{flex:1,height:'100%'}}>
  
  <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">

  <Header/>
  <View style={{height:'100%',flex:1}}>
 
  <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
    <Text style={{...styles.routineName,color:'black'}}>Morning Routine</Text>
    <Text style={{...styles.routineName,color:'black'}} >Night Routine</Text>
  </View>
  
  <View style={styles.cardSeprator}>

  <View style={styles.greenMiniCard}>
    <View style={{flexDirection:'row'}}>
      <View>
          <Text style={{...styles.cardFont,color:'black'}}>Weekdays</Text>
          <Text style={{...styles.cardFont1,color:'black'}}>7:00 am </Text>
        </View >  
        <View style={{alignItems:'flex-end',width:'45%'}}>
        <Image
                source={require('../assets/cloudmoon.png')}            
                resizeMode="stretch"
                style={{...styles.imageStyle,backgroundColor:'white'}}
              />
        
        </View>  

    </View>
    <View style={{flexDirection:'row'}}>
      <View>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
      </View> 
      <View style={{flex:1,alignItems:'flex-end'}}>
             <Image
                source={require('../assets/arrow.png')}            
                resizeMode="center"
                style={styles.imageStyle1}
              />
      </View>          
      </View>


  </View>
  <View style={styles.yelloMiniCard}>
    <View style={{flexDirection:'row'}}>
      <View>
          <Text style={styles.cardFont}>EveryDay</Text>
          <Text style={styles.cardFont1}>9:00pm </Text>
      </View> 
      <View style={{alignItems:'flex-end',width:'45%'}}>
      <Image
                source={require('../assets/moon.png')}            
                resizeMode="stretch"
                style={styles.imageStyle}
              />
        </View>   
    </View>
    <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
</View>



  </View>
  <SearchFilter search={search} setSearch={setSearch} handleSearch={handleSearch} />

   
   <View>
   {isLoading ? (
          <Text>Loading...</Text> // Show loading indicator while fetching data
        ) : (
  // <ImageBackground source={require('../assets/cloud.png')}  style={styles.backgroundImage}>

   <FlatList
        data={data}
        // horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
      // </ImageBackground>
        )}
  </View>
  </View>

  
  </KeyboardAvoidingView>
)
}
const styles = StyleSheet.create({
  mainCard:{backgroundColor:'#1860f8'
  ,height:'25%',
  width:'92%',
  alignContent:'center',
  alignSelf:'center',
  borderRadius:20,
  marginTop:'5%',
},
routineName:{
  color:'black',
  fontSize:20,
  marginTop:'5%',
  textAlign:'left',
  fontWeight:'700',
},
allocatedText:{
  color:'white',marginTop:'3%',
  textAlign:'center'
},
cardSeprator:{
  height:'15%',
  backgroundColor:'white',
  marginTop:'5%',
  flexDirection:'row',
  justifyContent:'space-evenly',
  width:'92%',
  alignSelf:'center'
},
imageStyle:{
  marginTop:'10%',
  marginLeft:'5%',
  backgroundColor:'#103C58',
  borderRadius:20,
  height:35,
  width:30,
  borderWidth:1,
},
imageStyle1:{
  marginLeft:'5%',
  backgroundColor:'#CFE4FF',
  borderRadius:20,
  height:43,
  width:40,
  borderWidth:1,
},
sunImageStyle:{
  marginTop:'10%',
  marginLeft:'5%',
  backgroundColor:'white',
  borderRadius:20,
  height:22,
  width:30,
  borderWidth:1,
},
cardFont:{
  color:'white',
  fontSize:15,
  marginTop:'10%',
  textAlign:'left',
  fontWeight:'500',
  paddingLeft:'5%'
},
itemName:{color:'black',fontSize:15,fontWeight:'400',alignItems:'flex-start'},
itemExpense:{color:'black',fontSize:15,fontWeight:'300'},

cardFont1:{
  color:'white',
  fontSize:15,
  marginTop:'5%',
  textAlign:'left',
  fontWeight:'500',
  paddingLeft:'10%'

},
greenMiniCard:{
  width:'46%',
  backgroundColor:'#CFE4FF',
  borderRadius:10,
  alignItems:'flex-start'

},
flatListContainer:{
  borderBottomWidth:0.25,
  borderColor:'grey',
  width:'90%',
  alignSelf:'center',
  backgroundColor:'white',
  marginTop:'5%'
},
  yelloMiniCard:{
    width:'46%',
    backgroundColor:'#103C58',
    borderRadius:10,
    alignItems:'flex-start'
  },
  flatlistRow:{ 
    flexDirection: "row",
  height:50,
  // justifyContent:'space-between'
 },
recentExpenseSection:{
  marginTop:'2%',
  alignSelf:'center',
  width:'90%',
  justifyContent:'space-between',
  flexDirection:'row',
  color:'black',
},
totalAmount:{
  color:'white',
  fontSize:25,fontWeight:'700',
  marginTop:'3%',
  textAlign:'center'
},
backgroundImage: {
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
},

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'column',
      padding: 50,
    },
    title_text: {
      fontSize: 40,
      fontWeight: '900',
      marginBottom: 55,
    },
    counter_text: {
      fontSize: 35,
      fontWeight: '900',
      margin: 15,
    },
    btn: {
      backgroundColor: '#086972',
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    btn_text: {
      fontSize: 23,
      color: '#fff',
    },
    flatlistImageStyle:{
      // backgroundColor:'black',
    borderRadius:15,
    height:45,
    width:'15%',
    // backgroundColor:'red'
    },
  });