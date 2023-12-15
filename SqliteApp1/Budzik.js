import React, { useState, useEffect, useCallback, useRef } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Text,
  ScrollView,
  LogBox
} from 'react-native'
import { Dimensions } from 'react-native'
import { Animated } from 'react-native';
import MyButton from './MyButton';

export default function Budzik(props) {
  let sheight = Dimensions.get('window').height
  const [aheight, setAHeight] = useState(new Animated.Value(0))
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedDays, setSelectedDays] = useState(props.selectedDays)

  const menu = <View style={{ flex: 1, flexDirection: 'row' }} >
    <TouchableOpacity onPress={() => { addDay("PON") }} ><Text> PON</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { addDay("WTO") }} ><Text> WTO</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { addDay("SRO") }} ><Text> SRO</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { addDay("CZW") }} ><Text> CZW</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { addDay("PIA") }} ><Text> PIA</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { addDay("SOB") }} ><Text> SOB</Text></TouchableOpacity>
    <TouchableOpacity onPress={() => { addDay("NIE") }} ><Text> NIE</Text></TouchableOpacity>
  </View>

  const expand = () => {
    console.log("EXPAND", aheight);
    Animated.spring(aheight, {
      toValue: 25,
      useNativeDriver: false,
    }).start();
    setIsExpanded(true)
  }

  const contract = () => {
    console.log("CONTRACT: ", aheight)
    Animated.spring(aheight, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
    setIsExpanded(false)
  }

  const toggleMenu = () => {
    if (isExpanded) contract()
    else expand()
  }

  const addDay = (day) => {
    if (selectedDays.indexOf(day) != -1) {
      console.log("FOUND DAY, REMOVING")
      let index = selectedDays.indexOf(day)
      let temp = selectedDays.splice(index, 1)
      setSelectedDays(temp)
    } else {
      console.log("DIDNT FIND DAY, ADDING")
      selectedDays.push(day)
      setSelectedDays(selectedDays)
    }
    console.log("SELECTED DAYS ", selectedDays)
  }

  return (
    <Animated.View style={styles.container} height={(sheight / 5) + aheight}>
      <Text style={{ fontSize: 30 }}>{props.id} | {props.time}</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }} >
        <MyButton content="DELETE" handleClick={() => { props.rmAlarm(props.id) }} />
        <MyButton content="TOGGLE" handleClick={toggleMenu} />
      </View>
      <Animated.View style={{ height: aheight }} >
        {
          isExpanded
            ? menu
            : <></>
        }
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBBBBB',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 2,
    borderRadius: 20,
    flexDirection: 'column'
  }
})
