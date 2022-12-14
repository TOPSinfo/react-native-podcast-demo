import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Camera, useFrameProcessor, useCameraDevices } from 'react-native-vision-camera'
import { labelImage } from "vision-camera-image-labeler";
import { runOnJS } from 'react-native-reanimated'

const AICamera = ({ cameraProps }) => {
    const [value, setValue] = useState('')

    const getPermission = async () => {
        const cameraPermission = await Camera.requestCameraPermission()
    }

    useEffect(() => {
        getPermission()
    }, [])

    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back
    const frameProcessor = useFrameProcessor(
        (frame) => {
            'worklet';
            const labels = labelImage(frame);
            runOnJS(setValue)(labels[0]?.label)
            console.log('Labels:', labels[0]?.label);
        },
        [value]
    );

    if (device == null) return null
    return (
        <>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                frameProcessor={frameProcessor}
                frameProcessorFps={3}
            />
            <Text style={{ backgroundColor: 'black', fontSize: 20, color: 'white' }}>{value}</Text>
        </>
    )
}

export default AICamera