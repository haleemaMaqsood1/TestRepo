import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const ProductDetail = ({ navigation }) => {

    const product = [
        {
            id: 1,
            name: 'Test Product 1',
            image: require('../images/Notification.png'),
            price: '$ 30',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('../images/Notification.png')}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.textContainer}>
                <Text style={styles.productName}>  {product[0].name} </Text>
                <Text style={styles.productPrice}>Price:  {product[0].price} </Text>
                <Text style={styles.productDetail}>{product[0].description}</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>BUY</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'

    },
    image: {
        height: '50%',
        width: '90%'
    },
    textContainer: {
        width: '80%',
        alignItems: 'center',

    },
    productName: {
        color: 'purple',
        fontWeight: '900',
        fontSize: 22,
    },
    productPrice: {
        color: 'purple',
        fontWeight: '700',
        fontSize: 16,
    },
    productDetail: {
        color: 'purple',
        fontWeight: '400',
        fontSize: 16,
        textAlign: 'center'
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

export default ProductDetail;
