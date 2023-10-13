import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
    let [strCalc, setStrCalc] = useState("")
    let [answer, setAnswer] = useState(0)

    const isPortrait = () => {
        let dim = Dimensions.get('screen')
        return dim.height >= dim.width
    }
    let [orientation, setOrientation] = useState(isPortrait())

    Dimensions.addEventListener("change", () => {
        console.log("ORIENTATION IS PORTRAIT: ", isPortrait())
        setOrientation(isPortrait())
    })

    const addStr = (s) => {
        let operators = "/*-+"

        console.log("S: ", s)
        console.log("STRCALC: ", strCalc)
        console.log("STRCALC.LENGTH: ", strCalc.length)

        if (strCalc.length == 0 && operators.includes(s)) {
            console.log("1st char cant be an operator")
            return
        }
        let lc = strCalc[strCalc.length - 1]
        console.log("LC: ", lc)
        console.log(operators.includes(lc))

        if (operators.includes(lc) && operators.includes(s)) { // lc is an operator
            console.log("cant place operator after operator")
            return
        }

        let temp = strCalc + s
        setStrCalc(temp)
        console.log("NEW STRING: ", temp)
        console.log("======")
    }

    const btnC = () => {
        let temp = strCalc.slice(0, -1)
        setStrCalc(temp)
        setAnswer(0)
    }

    const btnD = () => {
        setStrCalc("")
        setAnswer(0)
    }

    const calculate = () => {
        setAnswer(eval(strCalc))
    }

    const advCalc = (op) => {
        let input = eval(strCalc)
        if (op == "sqrt" && input >= 0) setAnswer(Math.sqrt(input))
        if (op == "pow") setAnswer(Math.pow(input))
        if (op == "sin" && input >= 0) setAnswer(Math.sin(input))
        if (op == "cos" && input >= 0) setAnswer(Math.cos(input))
    }

    if (orientation == 1) {

        return (
            <View style={styles.container}>
                {/* GREENBOX */}

                <View style={styles.greenbox} >
                    <Text style={[styles.textAlignRight, styles.text]}>{strCalc}</Text>
                    <Text style={[styles.textAlignRight, styles.text]}>{answer}</Text>
                </View>

                {/* GRAYBOXES */}
                <View style={styles.grayboxContainer}>

                    {/* GRAYBOX1 */}
                    <View style={styles.graybox1}>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(1) }} ><Text style={[styles.text, styles.center]}>1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(2) }} ><Text style={[styles.text, styles.center]}>2</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(3) }} ><Text style={[styles.text, styles.center]}>3</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(4) }} ><Text style={[styles.text, styles.center]}>4</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(5) }} ><Text style={[styles.text, styles.center]}>5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(6) }} ><Text style={[styles.text, styles.center]}>6</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(7) }} ><Text style={[styles.text, styles.center]}>7</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(8) }} ><Text style={[styles.text, styles.center]}>8</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(9) }} ><Text style={[styles.text, styles.center]}>9</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(".") }} ><Text style={[styles.text, styles.center]}>.</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { addStr(0) }} ><Text style={[styles.text, styles.center]}>0</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { calculate() }} ><Text style={[styles.text, styles.center]}>=</Text></TouchableOpacity>
                    </View>

                    {/* GRAYBOX2 */}
                    <View style={styles.graybox2}>
                        <TouchableOpacity style={styles.button2} onPress={() => { btnC() }} ><Text style={[styles.text, styles.center]}>D</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={() => { btnD() }} ><Text style={[styles.text, styles.center]}>C</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={() => { addStr("/") }} ><Text style={[styles.text, styles.center]}>/</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={() => { addStr("*") }} ><Text style={[styles.text, styles.center]}>*</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={() => { addStr("-") }} ><Text style={[styles.text, styles.center]}>-</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button2} onPress={() => { addStr("+") }} ><Text style={[styles.text, styles.center]}>+</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles2.container}>
                {/* GREENBOX */}

                <View style={styles2.greenbox} >
                    <Text style={[styles2.textAlignRight, styles2.text]}>{strCalc}</Text>
                    <Text style={[styles2.textAlignRight, styles2.text]}>{answer}</Text>
                </View>

                {/* GRAYBOXES */}
                <View style={styles2.grayboxContainer}>

                    {/* GRAYBOX1 */}
                    <View style={styles2.graybox1}>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(1) }} ><Text style={[styles2.text, styles2.center]}>1</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(2) }} ><Text style={[styles2.text, styles2.center]}>2</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(3) }} ><Text style={[styles2.text, styles2.center]}>3</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(4) }} ><Text style={[styles2.text, styles2.center]}>4</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(5) }} ><Text style={[styles2.text, styles2.center]}>5</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(6) }} ><Text style={[styles2.text, styles2.center]}>6</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(7) }} ><Text style={[styles2.text, styles2.center]}>7</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(8) }} ><Text style={[styles2.text, styles2.center]}>8</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(9) }} ><Text style={[styles2.text, styles2.center]}>9</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(".") }} ><Text style={[styles2.text, styles2.center]}>.</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { addStr(0) }} ><Text style={[styles2.text, styles2.center]}>0</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button} onPress={() => { calculate() }} ><Text style={[styles2.text, styles2.center]}>=</Text></TouchableOpacity>
                    </View>

                    {/* GRAYBOX2 */}
                    <View style={styles2.graybox2}>
                        <TouchableOpacity style={styles2.button2} onPress={() => { btnC() }} ><Text style={[styles2.text, styles2.center]}>D</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button2} onPress={() => { btnD() }} ><Text style={[styles2.text, styles2.center]}>C</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button2} onPress={() => { addStr("/") }} ><Text style={[styles2.text, styles2.center]}>/</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button2} onPress={() => { addStr("*") }} ><Text style={[styles2.text, styles2.center]}>*</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button2} onPress={() => { addStr("-") }} ><Text style={[styles2.text, styles2.center]}>-</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button2} onPress={() => { addStr("+") }} ><Text style={[styles2.text, styles2.center]}>+</Text></TouchableOpacity>
                    </View>

                    {/* GRAYBOX2 */}
                    <View style={styles2.graybox2}>
                        <TouchableOpacity style={styles2.button2} onPress={() => { advCalc("sqrt") }} ><Text style={[styles2.text, styles2.center]}>sqrt</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button2} onPress={() => { advCalc("pow") }} ><Text style={[styles2.text, styles2.center]}>pow</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button2} onPress={() => { advCalc("sin") }} ><Text style={[styles2.text, styles2.center]}>sin</Text></TouchableOpacity>
                        <TouchableOpacity style={styles2.button2} onPress={() => { advCalc("cos") }} ><Text style={[styles2.text, styles2.center]}>cos</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

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

const styles2 = StyleSheet.create({
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
        flex: 0.5,
        backgroundColor: '#666666',
        flexDirection: 'column',
    },
    text: {
        fontSize: 20,
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