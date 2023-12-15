import React, { useState, useEffect, useCallback } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Text,
  ScrollView
} from 'react-native'
import * as Database from './Database'
import Budzik from './Budzik'
import MyButton from './MyButton'

export default function Welcome(props) {
  const [alarms, setAlarms] = useState([])
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    getAlarms()
    renderAlarms(alarms)
  }, [])

  const renderAlarms = tab => {
    let itemlist = []
    tab.forEach(el => {
      let temp = (
        <Budzik
          key={el.id}
          id={el.id}
          isSelected={el.isSelected}
          selectedDays={el.selectedDays}
          rmAlarm={rmAlarm}
          mvAlarm={mvAlarm}
          time={el.time}
        />
      )
      itemlist.push(temp)
    })
    return itemlist
  }

  const getAlarms = () => {
    setIsReady(false)
    Database.getAll()
      .then(el => {
        const alarmsTemp = el.rows._array.map(e => {
          const data = JSON.parse(e.alarm)
          return {
            ...data,
            id: e.id
          }
        })
        setIsReady(true)
        console.log('ADDING THIS: ', alarmsTemp)
        setAlarms(alarmsTemp)
      })
      .catch(e => {
        console.log('ERROR LOG: ', e)
      })
  }

  const addAlarm = () => {
    const newAlarm = {
      time: '00:00',
      isSelected: false,
      selectedDays: []
    }
    Database.add(JSON.stringify(newAlarm))
    console.log('SHOULD ADDED ALARM')
    getAlarms()
  }

  const rmAlarm = (id) => {
    let tempAlarms = alarms.filter((e) => e.id !== id)
    console.log("tempAlarms: ", tempAlarms)
    setAlarms(tempAlarms)
    Database.remove(id)
  }

  const mvAlarm = (id, days) => {
    let temp = alarms.find(el => el.id === id)
    console.log("FIND: ", temp);
    console.log("DAYS: ", days);
  }

  return (
    <ScrollView>
      {/* ITEM: ID, TIME, ISSELECTED, SELECTEDDAYS */}
      {renderAlarms(alarms)}
      <MyButton handleClick={addAlarm} content='+' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
