import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function List(props) {
    return (
        <View>
            <TouchableOpacity><Text>pobierz i zapisz pozycje</Text></TouchableOpacity>
            <TouchableOpacity><Text>usun wszystkie dane</Text></TouchableOpacity>
            <TouchableOpacity><Text>przejdz do mapy</Text></TouchableOpacity>
        </View>
    )
}
