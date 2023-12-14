import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, TouchableOpacity, View, Button } from 'react-native'

import Welcome from './Welcome'
import Main from './Main'

const Stack = createNativeStackNavigator()

export default function App ({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='welcome'
          component={Welcome}
          options={{
            title: 'Sqlite app',
            headerStyle: { backgroundColor: '#f4511e' }
          }}
        />
        <Stack.Screen
          name='main'
          component={Main}
          options={{
            title: 'Sqlite app',
            headerStyle: { backgroundColor: '#f4511e' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
