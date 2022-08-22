import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { colors } from '../Utils/colors';
import { useSelector } from 'react-redux'
const Loading = () => {
    let isLoading = useSelector(state => state.loading.isLoading)
    if (isLoading)
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={isLoading} size={'large'} color={colors.white} />
            </View>
        );

    return null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})

export default Loading;