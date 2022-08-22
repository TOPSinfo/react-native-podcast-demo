import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Platform, SafeAreaView } from 'react-native'
import { colors } from '../Utils/colors';
import { FontSize } from '../Utils/util';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
let headerHeight = Platform.OS == 'android' ? 40 : 30

const getStatusBarHeight = () => {
    if (Platform.OS == 'android')
        return StatusBar.currentHeight
    return 30
}

const Header = ({ back, title, onPress, right, textStyle, navigation }) => {
    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', height: headerHeight + getStatusBarHeight() }}>
                {back && <TouchableOpacity hitSlop={{ left: 10, right: 10, bottom: 10, top: 10 }} style={[styles.left,]} onPress={onBack}>
                    <MaterialIcons name={'arrow-back'} color={colors.white} size={30} />
                </TouchableOpacity>}
                {title && <View style={[styles.middle,]}>
                    <Text style={[styles.title, textStyle]}>{title}</Text>
                </View>}
                {right && <TouchableOpacity hitSlop={{ left: 10, right: 10, bottom: 10, top: 10 }} style={[styles.right,]} onPress={onPress}>
                    <Text style={[styles.title, textStyle]}>{title}</Text>
                </TouchableOpacity>}
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    left: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    middle: {
        width: '70%',
        height: '100%',
        justifyContent: 'center',
    },
    right: {
        width: '15%'
    },
    title: {
        fontSize: FontSize.extraLarge,
        color: colors.white,
        marginLeft: 10
    },
})

export default Header;