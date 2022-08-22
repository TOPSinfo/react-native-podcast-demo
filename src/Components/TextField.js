import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { colors } from '../Utils/colors';
import { FontSize } from '../Utils/util';
const TextField = ({ onChange, placeholder, secure = false, errorMessage, inputStyle }) => {
    return (
        <View style={{ width: '100%' }}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChange}
                secureTextEntry={secure}
                style={[styles.input, inputStyle]}
                placeholderTextColor={colors.white2}
            />
            {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: colors.white2,
        color: colors.white1,
        fontSize: FontSize.medium,
        width: '100%',
        paddingLeft: 10
    },
    error: {
        color: colors.red1,
        fontSize: FontSize.tiny,
        marginTop: 2,
        marginLeft: 5
    }

})

export default TextField;