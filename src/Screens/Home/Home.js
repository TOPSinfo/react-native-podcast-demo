import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native';
import VideoPlayer from '../../Components/VideoPlayer';
import { colors } from '../../Utils/colors';
import { FontSize } from '../../Utils/util';
let RNFS = require('react-native-fs');
let absolutePath = RNFS.DocumentDirectoryPath;
let filePath = `${absolutePath}/${Date.now()}.mp4`

const Home = ({ navigation }) => {

    const [videoUrl, setVideoUrl] = useState('')

    const downloadFile = () => {
        RNFS.downloadFile({
            //fromUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4',
            fromUrl: 'https://file-examples.com/storage/fe5467a6a163010b197fb20/2017/04/file_example_MP4_1280_10MG.mp4',
            toFile: filePath,
            begin: (res) => {
                console.log('begin', res)
            },

            progress: async (res) => {
                console.log('progress', res)
            },
        }).promise.then((res) => {
            console.log('Res', filePath)
        })
    }

    useEffect(() => {
        //downloadFile()
    }, [])
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container1}>
                    <Text style={styles.title} >Home Screen</Text>
                    {videoUrl && <VideoPlayer url={videoUrl} />}
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
    },

});

export default Home;
