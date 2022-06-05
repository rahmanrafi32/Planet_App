import {StyleSheet, Text, View} from 'react-native';
import {useFonts, Antonio_500Medium, Spartan_700Bold, Spartan_400Regular} from "@expo-google-fonts/dev";
import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from "./App/theme/colors";
import Homescreen from "./App/screens/Homescreen";
import React from "react";
import DetailsScreen from "./App/screens/DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontLoaded] = useFonts({
        "Antonio-Medium": Antonio_500Medium,
        "Spartan-Bold": Spartan_700Bold,
        "Spartan-Regular": Spartan_400Regular
    });

    if (!fontLoaded) {
        return <Text>Font is loading</Text>
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name={"Home"} component={Homescreen} options={{headerShown: false}}/>
                <Stack.Screen name={"Details"} component={DetailsScreen} options={{headerShown: false, animation:"slide_from_left"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};