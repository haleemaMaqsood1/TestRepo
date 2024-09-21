import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

const ProductList = ({ navigation }) => {
  const product = [
    {
      id: 1,
      name: 'Test Product 1',
      image: require('../images/Notification.png'),
      price: '$ 30'
    },
    {
      id: 2,
      name: 'Test Product 1',
      image: require('../images/Notification.png'),
      price: '$ 30'
    },
    {
      id: 3,
      name: 'Test Product 1',
      image: require('../images/Notification.png'),
      price: '$ 30'
    },
    {
      id: 4,
      name: 'Test Product 1',
      image: require('../images/Notification.png'),
      price: '$ 30'
    },
    {
      id: 5,
      name: 'Test Product 1',
      image: require('../images/Notification.png'),
      price: '$ 30'
    },
    {
      id: 6,
      name: 'Test Product 1',
      image: require('../images/Notification.png'),
      price: '$ 30'
    },
    {
      id: 7,
      name: 'Test Product 1',
      image: require('../images/Notification.png'),
      price: '$ 30'
    },
    {
      id: 8,
      name: 'Test Product 1',
      image: require('../images/Notification.png'),
      price: '$ 30'
    },

  ]

  function moveNext() {
    navigation.navigate('ProductDetail');
  }
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={moveNext}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode='contain' />
        </View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productName}>{item.price}</Text>


      </TouchableOpacity>

    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          Product List
        </Text>
      </View>


      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}

      />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  textContainer: {
    backgroundColor: 'purple',
    height: '7%',
    justifyContent: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '900',
    paddingLeft: '3%',
  },
  card: {
    backgroundColor: 'white',
    width: '40%',
    margin: '5%'

  },
  image: {
    width: '100%',
  },
  productName: {
    color: 'purple',
    fontWeight: '700',
    fontSize: 16,
    paddingLeft: '5%'
  }

});

export default ProductList;
