import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'
import { colors } from '../Utils/colors'
import { FontSize } from '../Utils/util'

const Snackbar = (_props, ref) => {
    const [message, setMessage] = useState('')
    const animatedValue = useRef(new Animated.Value(0)).current

    useImperativeHandle(ref, () => ({
        showSnackbar
    }))

    const showSnackbar = (msg) => {
        setMessage(msg)
        Animated.timing(animatedValue, {
            duration: 200,
            toValue: 1,
            useNativeDriver: true
        }).start(() => {
            setTimeout(() => {
                hideSnackbar()
            }, 2000)
        })
    }

    const hideSnackbar = () => {
        animatedValue.setValue(0)
    }

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0]
    })

    return (
        <Animated.View style={[style.container, { transform: [{ translateY }] }]}>
            <Text style={style.message}>{message}</Text>
        </Animated.View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#1C1917',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        justifyContent: 'center',
        position: 'absolute',
        bottom: '5%',
        borderRadius: 5
    },
    message: {
        fontSize: FontSize.medium,
        color: colors.white1
    }
})

export default forwardRef(Snackbar)