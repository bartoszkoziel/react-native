import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Dimensions } from "react-native";

export default function GalleryItem(props) {
    let assets = props.assets

    let hight = Dimensions.get("window").height
    let width = Dimensions.get("window").width

    return (
        <TouchableOpacity style={styles.container} >
            <Image height={width / 3} width={width / 3} source={{ uri: assets.uri }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1,
        backgroundColor: '#b00b69',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});