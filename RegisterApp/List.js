import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App(props) {

    console.log("PROPS: ", props)

    return (
        <View style={styles.container}>
            <FlatList></FlatList>
            <Text>SCREEN 2 LIST, {props.route.params.users}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 100,
        margin: 1,
        borderBottomColor: "#666666",
        borderBottomWidth: 1,
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
