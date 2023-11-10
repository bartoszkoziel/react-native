import { useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Main(props) {

    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/myfont.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <TouchableOpacity><Text style={{ fontFamily: 'Inter-Black', fontSize: 60 }} onPress={() => { props.navigation.navigate("List") }} >GEO APP</Text></TouchableOpacity>
            <Text style={{ fontFamily: 'Inter-Black', fontSize: 30, textAlign: 'center' }}>Find and save your position using google maps</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});