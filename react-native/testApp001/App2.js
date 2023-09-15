import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {

    return (
        <View>
            <Text style={StyleSheet.testStyle}>APP2</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        testStyle: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 10,
        },
    }
);

export default App;