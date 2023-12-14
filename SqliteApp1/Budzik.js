import React, { useState, useEffect, useCallback } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Text,
  ScrollView
} from 'react-native'
import { Dimensions } from 'react-native'

export default function Budzik (props) {
  let sheight = Dimensions.get('window').height

  return (
    <View style={styles.container} height={sheight / 5}>
      <Text style={{ fontSize: 30 }}>{props.time}</Text>
    </View>
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
    borderRadius: 20
  }
})
