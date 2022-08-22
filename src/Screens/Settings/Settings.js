import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native';
import { colors } from '../../Utils/colors';
import { FontSize } from '../../Utils/util';

const Settings = ({ navigation }) => {

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container1}>
                    <Text style={styles.title}>Settings Screen</Text>
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
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        flex: 0.2,
        padding: 15,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: FontSize.giant,
        color: colors.white
    }
});

export default Settings;
