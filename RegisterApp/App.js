import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./Login"
import List from "./List"

const Stack = createNativeStackNavigator();

function App({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="register" component={Login} />
                <Stack.Screen name="list" component={List} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;