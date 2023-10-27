import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

import User from "./User"

export default function App(props) {
    let temp = props.route.params.users
    // let users = JSON.parse({ users: props.route.params.users })
    let users = JSON.parse(temp)
    console.log("PARSED USERS: ", users)
    return (
        <View style={styles.container}>
            <FlatList
                data={users.users}

                renderItem={({ item, index }) => <User
                    id={index}
                    login={item.login}
                />}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'left',
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
