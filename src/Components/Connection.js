import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import { colors } from '../Utils/colors';
import { useDispatch, useSelector } from 'react-redux'
import { connection } from '../Redux/Actions/Actions'
import { FontSize } from '../Utils/util';


const Connection = () => {

    const dispatch = useDispatch()
    const isConnected = useSelector(state => state.connection.isConnected)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            dispatch(connection(state.isConnected))
        });

        // Unsubscribe
        return unsubscribe();
    }, [])

    if (isConnected) return null

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text style={styles.title}>Please check your network</Text>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.red1,
        padding: 4,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: FontSize.tiny
    }
})

export default Connection