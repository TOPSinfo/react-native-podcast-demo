import { Dimensions, PixelRatio, Platform } from 'react-native'
const { height, width } = Dimensions.get('window')

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

let h = (height / 100).toFixed(2)
let w = (width / 100).toFixed(2)
const Height = (value) => {
    if (value)
        return h * value
    return height
}

const Width = (value) => {
    if (value)
        return w * value
    return width
}

const normalize = (size) => {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

const FontSize = {
    tiny: normalize(10),          // 10
    small: normalize(12),         // 12
    medium: normalize(14),        // 16
    large: normalize(16),         // 18
    extraLarge: normalize(18),    // 22
    huge: normalize(22),          // 26
    extraHuge: normalize(24),     // 30
    giant: normalize(26),         // 32
    extraGiant: normalize(28)     // 34
}

let isIphoneX = (Platform.OS == 'ios' && height >= 812) ? true : false;


export {
    Height, Width, FontSize, normalize, isIphoneX
}