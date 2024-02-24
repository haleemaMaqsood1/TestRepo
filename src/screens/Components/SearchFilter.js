import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput, Modal, Button } from 'react-native';
import React, { useState } from "react";

export default function SearchFilter({ search, setSearch, handleSearch }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sortingOrder, setSortingOrder] = useState('ascending');

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const handleSortingOrder = (order) => {
    setSortingOrder(order);
    toggleModal();
  };

  const handleSort = () => {
   
    if (sortingOrder === 'ascending') {
      // Sort data in ascending order
    } else {
      // Sort data in descending order
    }
  };


  return (
    <View style={styles.container}>
        <View style={styles.filterContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder=""
          value={search}
          onChangeText={text => setSearch(text)}
        />
         <TouchableOpacity style={styles.filterInner}
         onPress={handleSearch}
         
         >

        <Image
                source={require('.././../assets/search.png')}            
                resizeMode="stretch"
                style={{backgroundColor:'#49B0AB',height:30,marginTop:'20%',marginLeft:'25%'}}
              />
    </TouchableOpacity>
    <TouchableOpacity style={{ marginTop: '1%', paddingLeft: '3%' }} onPress={toggleModal}>
    <Image
                source={require('../../assets/sort.png')}            
                resizeMode="stretch"
                style={styles.imageStyle}
              />    
    </TouchableOpacity>
    </View>
 {/* Modal for sorting options */}
 <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort By</Text>
            <Button title="Ascending Order" onPress={() => handleSortingOrder('ascending')} />
            <Button title="Descending Order" onPress={() => handleSortingOrder('descending')} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
//   backgroundColor:'grey',
  width:'90%',
  justifyContent:'center',
  height:'10%',
  marginLeft:'5%',
  borderTopWidth:1,
  borderTopColor:'grey',
  marginTop:'3%'
},
filterContainer:{
    flexDirection:'row',
    width:'85%',
    marginTop:'5%',
},
filterInner:{backgroundColor:'#49B0AB',width:'15%'},
textInputStyle:{backgroundColor:'white',borderWidth:1,width:"85%"},
imageStyle:{
    backgroundColor:'white', 
 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
