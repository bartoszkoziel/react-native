import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

import User from "./User"

export default function App(props) {
    let [users, setUsers] = useState(props.route.params.users)
    console.log("PARSED USERS: ", users)

    return (
        <View style={styles.container}>
            <FlatList
                data={users}

                renderItem={({ item }) => <User
                    obj={JSON.stringify(item)}
                    id={item.id}
                    login={item.body.login}
                    navigation={props.navigation}
                    setUsers={setUsers}
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
