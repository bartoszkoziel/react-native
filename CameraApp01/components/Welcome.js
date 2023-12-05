import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Welcome(props) {
    return (
        <View style={styles.container}>
            <Text>Camera App</Text>
            <Text>show gallery pictures take pictures from camera ...</Text>
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
});