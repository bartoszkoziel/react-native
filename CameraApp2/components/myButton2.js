import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function MyButton(props) {
    return (
        <TouchableOpacity style={styles.container} onPress={props.handleClick} >
            <Text style={styles.button} >{props.content}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: '#b00b69',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 40,
        margin: 10,
    },
    button: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center', 
        color: '#ffffff',

    }
});