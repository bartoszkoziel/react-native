import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    const onPress2 = () => setCount(prevCount => prevCount - 1);

    return (
        <View style={[styles.container, styles.body]}>
            <View style={styles.countContainer}>
                <Text style={styles.countContainer}>Count: {count}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text>Press Here +</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPress2}>
                <Text>Press Here -</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
});

export default App;