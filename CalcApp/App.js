import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
    let [numArr, setNumArr] = useState([])

    const addNum = (num) => {
        let temp = numArr
        temp.push(num)
        setNumArr(temp)
        console.log("NEW ARRAY: ", temp)
    }

    return (
        <View style={styles.container}>
            {/* GREENBOX */}

            <View style={styles.greenbox} >
                <Text style={[styles.textAlignRight, styles.text]}>OBLICZENIA</Text>
                <Text style={[styles.textAlignRight, styles.text]}>WYNIK</Text>
            </View>

            {/* GRAYBOXES */}
            <View style={styles.grayboxContainer}>

                {/* GRAYBOX1 */}
                <View style={styles.graybox1}>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(1) }} ><Text style={[styles.text, styles.center]}>1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(2) }} ><Text style={[styles.text, styles.center]}>2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(3) }} ><Text style={[styles.text, styles.center]}>3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(4) }} ><Text style={[styles.text, styles.center]}>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(5) }} ><Text style={[styles.text, styles.center]}>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(6) }} ><Text style={[styles.text, styles.center]}>6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(7) }} ><Text style={[styles.text, styles.center]}>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(8) }} ><Text style={[styles.text, styles.center]}>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(9) }} ><Text style={[styles.text, styles.center]}>9</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }} ><Text style={[styles.text, styles.center]}>.</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { addNum(0) }} ><Text style={[styles.text, styles.center]}>0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }} ><Text style={[styles.text, styles.center]}>=</Text></TouchableOpacity>
                </View>

                {/* GRAYBOX2 */}
                <View style={styles.graybox2}>
                    <TouchableOpacity style={styles.button2} ><Text style={[styles.text, styles.center]}>C</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2} ><Text style={[styles.text, styles.center]}>C</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2} ><Text style={[styles.text, styles.center]}>C</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2} ><Text style={[styles.text, styles.center]}>C</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button2} ><Text style={[styles.text, styles.center]}>C</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    greenbox: {
        backgroundColor: '#00FF00',
        width: '100%',
        gap: 20,
        padding: 10,
        paddingBottom: 50,
        paddingTop: 50,
    },
    textAlignRight: {
        textAlign: 'right',
    },
    grayboxContainer: {
        flex: 8,
        flexDirection: 'row',
    },
    graybox1: {
        flex: 3,
        backgroundColor: '#555555',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    graybox2: {
        flex: 1,
        backgroundColor: '#666666',
        flexDirection: 'column',
    },
    text: {
        fontSize: 50,
        color: '#EEEEEE',
    },
    button: {
        flex: 1,
        flexBasis: '33%',
        height: '25%',
    },
    center: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center'
    },
    button2: {
        flex: 1,
        height: '20%',
    }
});
