import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import Settings from '../Screens/Settings/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../Utils/colors'

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
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return <MaterialCommunityIcons name={'home'} size={size} color={color} />;
                    } else if (route.name === 'Settings') {
                        return <SimpleLineIcons name={'settings'} size={size} color={color} />;

                    }
                },
                tabBarActiveTintColor: colors.darkBlue,
                tabBarInactiveTintColor: colors.grey1,
            })}

        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default HomeNavigator