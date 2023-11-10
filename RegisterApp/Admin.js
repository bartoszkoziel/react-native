import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function User(props) {
    let data = JSON.parse(props.route.params)
    console.log(data)
    console.log(typeof (data))
    return (
        <View style={styles.user}>
            <Text>ID: {data.id}</Text>
            <Text>LOGIN: {data.body.login}</Text>
            <Text>PASSWORD: {data.body.password}</Text>
            <Text>CREATED: {data.body.created}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    user: {
        flex: 1,
        flexDirection: 'column',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
})