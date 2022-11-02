import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
import Header from '../../Components/Header';
import { colors } from '../../Utils/colors';
import { convertBytes, FontSize } from '../../Utils/util';
import { useDispatch } from 'react-redux'
import { setTrack } from '../../Redux/Actions/Actions';
import moment from 'moment'
let RNFS = require('react-native-fs');
let absolutePath = RNFS.DocumentDirectoryPath;

const Downloads = ({ navigation }) => {

    const [downloads, setDownloads] = useState([])
    const dispatch = useDispatch()
    const readDocumentDirectory = () => {
        RNFS.readDir(absolutePath).then((res) => {
            console.log('Directory Response', res)
            setDownloads(res)
        })
    }

    useEffect(() => {
        readDocumentDirectory()
    }, [])

    const fileSizeToMB = (size) => {
        return convertBytes(size)
    }

    const onClick = (track) => {
        console.log('Track', track)
        dispatch(setTrack(track.path))
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => onClick(item)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.subtitle}>{moment(item.ctime).format('DD MMM YYYY')}</Text>
                </View>
                <Text style={styles.subtitle}>{fileSizeToMB(item.size)}</Text>
            </TouchableOpacity>
        )
    }

    const emptyComponent = () => {
        return <View style={styles.noDataContainer}>
            <Text style={[styles.subtitle, { fontSize: FontSize.small }]}>No Downloads Available</Text>
        </View>
    }

    return (
        <View style={styles.mainContainer}>
            <Header title={'Downloads'} back navigation={navigation} />
            <View style={styles.container1}>
                <FlatList
                    data={downloads}
                    renderItem={renderItem}
                    keyExtractor={(_item, index) => index.toString()}
                    ListEmptyComponent={emptyComponent}
                />
            </View>
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
        paddingHorizontal: 10
    },
    option: {
        borderBottomWidth: 0.5,
        borderColor: colors.white1,
        padding: 15
    },
    title: {
        fontSize: FontSize.medium,
        color: colors.white,
        width: '70%'
    },
    subtitle: {
        fontSize: FontSize.tiny,
        lineHeight: FontSize.medium,
        color: colors.white2
    },
    noDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: colors.white1
    }
});

export default Downloads;
