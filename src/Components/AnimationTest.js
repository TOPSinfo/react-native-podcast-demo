import React from 'react'
import { Button, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

function Box() {
    const offset = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withSpring(offset.value * 255) }],
        };
    });

    return (
        <>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Button onPress={() => (offset.value = Math.random())} title="Move" />
        </>
    );
}

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 100,
        backgroundColor: "blue"
    }
})

export default Box