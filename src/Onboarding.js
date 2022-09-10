//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Onboarding = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>
                Welcome to
                <Text style={styles.innerText}> Chatterbox</Text>
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{color:'white'}}>Continue to login</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        padding: 30,
        paddingTop: 130,

    },
    baseText: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    innerText: {
        color: 'red',
        fontSize: 28,
    },
    button:{
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        margin:30,
        borderRadius:10,
        position:'absolute',
        bottom:0,
        width: '100%',
    },
});

//make this component available to the app
export default Onboarding;