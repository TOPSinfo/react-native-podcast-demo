import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { colors } from '../../Utils/colors';
import { FontSize } from '../../Utils/util';

const Settings = ({ navigation }) => {

    const onLogout = () => {
        console.log('On Logout')
    }

    const onDownload = () => {
        navigation.navigate('Downloads')
    }

    const option = (label, onPress) => {
        return <TouchableOpacity onPress={onPress} style={styles.option}>
            <Text style={styles.title}>{label}</Text>
        </TouchableOpacity>
    }

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container1}>
                    {option('Downloads', onDownload)}
                    {option('Logout', onLogout)}
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.darkBlue
    },
    container1: {
        flex: 1,
        padding: 10
    },
    option: {
        borderBottomWidth: 0.5,
        borderColor: colors.white1,
        padding: 15
    },
    title: {
        fontSize: FontSize.medium,
        color: colors.white
    }
});

export default Settings;
