import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../Utils/colors'
import { FontSize } from '../Utils/util'
import { useSelector } from 'react-redux'
import MiniTrackPlayer from './MiniTrackPlayer'

const BottomTabs = ({ state, descriptors, navigation }) => {

    const selectedTrack = useSelector(store => store.playerReducer.selectedTrack)

    return (
        <SafeAreaView>
            {selectedTrack && <MiniTrackPlayer url={selectedTrack} />}
            <View style={styles.container}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;
                    const selectedColor = isFocused ? colors.darkBlue : colors.grey1
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            // The `merge: true` option makes sure that the params inside the tab screen are preserved
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, alignItems: 'center' }}
                        >
                            {label === 'Home' ? <MaterialCommunityIcons name={'home'} size={25} color={selectedColor} /> : <SimpleLineIcons name={'settings'} size={22} color={selectedColor} />}
                            <Text style={{ color: selectedColor }}>{label}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lable: {
        fontSize: FontSize.small
    }
})

export default BottomTabs