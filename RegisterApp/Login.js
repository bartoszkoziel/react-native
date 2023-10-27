import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App(props) {
    let [login, onChangeLogin] = useState("")
    let [password, onChangePassword] = useState("")
    let [status, setStatus] = useState("")

    const register = async () => {
        let response = await fetch('http://192.168.119.117:3000/api/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login: login,
                password: password,
                created: Date.now()
            })
        })
        let users = await (await fetch('http://192.168.119.117:3000/api/users')).json()

        let temp = await response.text()
        if (temp == "REGISTER SUCCESSFUL") {
            props.navigation.navigate("list", { users: JSON.stringify(users) })
        }

        setStatus(temp)
    }

    return (
        <View style={styles.container}>
            <View><Text>REGISTER APP</Text></View>
            <View style={styles.center}>
                <TextInput
                    style={[styles.input, styles.center]}
                    onChangeText={onChangeLogin}
                    value={login}
                />

                <TextInput
                    style={[styles.input, styles.center]}
                    onChangeText={onChangePassword}
                    value={password}
                />

                <TouchableOpacity onPress={register}>
                    <Text>REGISTER</Text>
                </TouchableOpacity>

                <Text>
                    {status}
                </Text>
            </View>
        </View>
    );
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
