import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login'
import WelcomeScreen from '../Screens/WelcomeScreen/WelcomeScreen';
import Signup from '../Screens/Signup/Signup';
import CategorySelection from '../Screens/Signup/CategorySelection';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='CategorySelection' screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="CategorySelection" component={CategorySelection} />
        </Stack.Navigator>
    )
}

export default AuthNavigator