import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Modal } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../Utils/colors'

import Video from 'react-native-video';
import { isIphoneX } from '../Utils/util';

const MiniTrackPlayer = ({ url }) => {
    const [paused, setPaused] = useState(false)
    const [progress, setProgress] = useState(null)
    const [isFullScreen, setFullScreen] = useState(false)

    useEffect(() => {
        setPaused(false)
        setProgress(null)
    }, [url])

    let playerRef = useRef(null)

    const onBuffer = (res) => {
        console.log('On Buffer', res)
    }

    const videoError = (e) => {
        console.log('On Error', e)
    }

    const onEnd = () => {
        console.log('On End')
        setPaused(!paused)
        playerRef.current.seek(0)
    }

    const progressIndicator = () => {
        let progressWidth = progress ? Math.round(progress.currentTime / progress.playableDuration * 100) : 0
        return (
            <View style={styles.progressContainer}>
                <View style={{ borderWidth: 0.8, borderColor: colors.grey1 }} />
                <View style={{ borderWidth: 0.8, borderColor: colors.red, position: 'absolute', width: `${progressWidth}%` }} />
            </View>
        )
    }

    const player = () => {
        return (
            <Video
                source={{ uri: url }}   // Can be a URL or a local file.
                ref={(ref) => playerRef.current = ref}
                onBuffer={onBuffer}                // Callback when remote video is buffering
                onError={videoError}               // Callback when video cannot be loaded
                style={isFullScreen ? styles.fullScreenPlayer : styles.player}
                onLoad={() => {
                    if (progress) {
                        console.log('onLoad ', progress.currentTime)
                        playerRef.current.seek(progress.currentTime)
                    }
                }}
                onPlaybackRateChange={(e) => {
                    setPaused(e.playbackRate == 0 ? true : false)
                }}
                controls={isFullScreen}
                fullscreen={isFullScreen}
                paused={paused}
                onEnd={onEnd}
                onProgress={(e) => setProgress(e)}
            />
        )
    }

    const toggleFullScreen = (value) => {
        setFullScreen(value)
    }

    if (isFullScreen)
        return (
            <Modal visible={isFullScreen} onRequestClose={() => toggleFullScreen(false)} transparent>
                <View style={{ flex: 1, backgroundColor: colors.black, justifyContent: 'center', alignItems: 'center' }}>
                    {player()}
                    <TouchableOpacity onPress={() => toggleFullScreen(false)} style={{ position: 'absolute', top: isIphoneX ? 50 : 30, right: 10 }} >
                        <MaterialCommunityIcons name={'close'} size={28} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </Modal>
        )

    return (
        <TouchableOpacity onPress={() => toggleFullScreen(true)} style={styles.container}>
            {player()}
            {progressIndicator()}
            <TouchableOpacity onPress={() => setPaused(!paused)} style={styles.button}>
                <MaterialCommunityIcons name={paused ? 'play' : 'pause'} size={22} color={colors.darkBlue} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.black,
        paddingHorizontal: 10
    },
    player: {
        height: 50,
        width: 90
    },
    fullScreenPlayer: {
        height: 250,
        width: '100%'
    },
    progressContainer: {
        flex: 1,
        marginHorizontal: 15
    },
    button: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    }
})

export default MiniTrackPlayer