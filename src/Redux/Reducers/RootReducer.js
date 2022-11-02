import { combineReducers } from 'redux'

let initialState = {
    userData: {}
}

let podcastState = {
    podcast: []
}


const loading = (state = { isLoading: false }, action) => {
    switch (action.type) {
        case 'LOADING':
            return { ...state, isLoading: action.isLoading }
        default:
            return state
    }
}

const connection = (state = { isConnected: true }, action) => {
    switch (action.type) {
        case 'CONNECTION':
            return { ...state, isConnected: action.isConnected }
        default:
            return state
    }
}

const userReducer = (state = initialState, action) => {
    return state
}

const podcastReducer = (state = podcastState, action) => {
    return state
}

const playerReducer = (state = { selectedTrack: '' }, action) => {
    switch (action.type) {
        case 'SET TRACK':
            return { ...state, selectedTrack: action.track }
        default:
            return state
    }
}

const RootReducer = combineReducers({
    loading,
    connection,
    userReducer,
    podcastReducer,
    playerReducer
})

export default RootReducer