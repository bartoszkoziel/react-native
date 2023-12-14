import React, { useState, useEffect, useCallback } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
  Text
} from 'react-native'

export default function Welcome (props) {
  const [rippleColor, setRippleColor] = useState('#f4511e')
  const [rippleOverflow, setRippleOverflow] = useState(true)

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        style={styles.container}
        onPress={() => {
          props.navigation.navigate('main')
        }}
        background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)}
      >
        <View style={styles.touchable}>
          <Text style={{ fontFamily: 'sans-serif', fontSize: 30 }}>
            MYSQLITE APP
          </Text>
          <Text style={{ fontSize: 20 }}>My sqlite app</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
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
