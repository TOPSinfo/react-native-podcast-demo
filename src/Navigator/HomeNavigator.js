import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import Settings from '../Screens/Settings/Settings';
import Downloads from '../Screens/Settings/Downloads';
import BottomTabs from '../Components/BottomTabs';

const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const HomeScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name="HomeScreen" component={Home} />
        </HomeStack.Navigator>

    );
}

const SettingsScreen = () => {
    return (
        <SettingsStack.Navigator initialRouteName='SettingsScreen' screenOptions={{ headerShown: false }}>
            <SettingsStack.Screen name="SettingsScreen" component={Settings} />
            <SettingsStack.Screen name="Downloads" component={Downloads} />
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}
            tabBar={(props) => <BottomTabs {...props} />}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default HomeNavigator