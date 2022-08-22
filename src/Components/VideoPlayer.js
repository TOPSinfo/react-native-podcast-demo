import React, { useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import Video from 'react-native-video';

const VideoPlayer = ({url}) => {
    const [paused,setPaused] = useState(false)
    const playerRef = useRef().current

    const onBuffer = (res) => {
        console.log('On Buffer', res)
    }

    const videoError = (e) => {
        console.log('On Error', e)
    }


    return (
        <Video
            source={{
                //uri: "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/04/file_example_MP4_1280_10MG.mp4" // Remote video uri
                // uri: "https://us4.internet-radio.com/proxy/douglassinclair?mp=/stream" //Live audio uri 
                uri:url
            }}   // Can be a URL or a local file.
            ref={playerRef}
            //resizeMode='cover'                                    // Store reference
            onBuffer={onBuffer}                // Callback when remote video is buffering
            onError={videoError}               // Callback when video cannot be loaded
            style={styles.backgroundVideo}
            onLoad={()=>{
                console.log('On Load')
                setPaused(true)
            }}
            paused={paused}
            controls={true}
            onEnd={() => console.log('OnEnd')}
            // onProgress={(e) => console.log('On Progress', e)}
        />
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // bottom: 0,
        // right: 0,
        width: '100%',
        height: 250
    },
})

export default VideoPlayer