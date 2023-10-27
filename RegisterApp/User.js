import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function User(props) {
    return (
        <View style={styles.user}>
            <Image
                style={styles.tinyLogo}
                src={'https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'}
            />

            <Text>{props.id} {props.login}</Text>
            <Text>{props.test}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    user: {
        flex: 1,
        flexDirection: 'row',
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