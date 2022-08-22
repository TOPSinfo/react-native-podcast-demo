import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../Utils/colors';
import { FontSize } from '../Utils/util';
const Button = ({ title, onPress, disabled, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.container, buttonStyle]} onPress={onPress}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkBlue2
    },
    title: {
        fontSize: FontSize.extraLarge,
        color: colors.white
    },
})

export default Button;