import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./Login"
import List from "./List"
import Admin from "./Admin"

const Stack = createNativeStackNavigator();

function App({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="register" component={Login} />
                <Stack.Screen name="list" component={List} />
                <Stack.Screen name="admin" component={Admin} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;