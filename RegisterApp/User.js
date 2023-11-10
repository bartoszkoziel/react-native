import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function User(props) {
    let btnDetails = () => {
        props.navigation.navigate("admin", props.obj)
    }
    let btnDelete = async () => {
        let response = await fetch('http://192.168.119.117:3000/api/delete/' + props.id, {
            method: "POST"
        })

        let json = await response.json()
        console.log("RESONSE.JSON: ", json)
        props.setUsers(json.users)
    }
    return (
        <View style={styles.user}>
            <Image
                style={styles.tinyLogo}
                src={'https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg'}
            />

            <Text>{props.id} {props.login}</Text>
            {/* <Text>{props.obj}</Text> */}

            <TouchableOpacity style={styles.button} onPress={btnDetails}>
                <Text>DETAILS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={btnDelete}>
                <Text>DELETE</Text>
            </TouchableOpacity>
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
    button: {
        margin: 5,
        borderColor: 'green',
        borderWidth: 1,
    }
})