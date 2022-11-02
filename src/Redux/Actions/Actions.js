const loading = (isLoading) => {
    return {
        type: 'LOADING',
        isLoading
    }
}

const connection = (isConnected) => {
    return {
        type: 'CONNECTION',
        isConnected
    }
}

const setTrack = (track) => {
    return {
        type: 'SET TRACK',
        track
    }
}

export {
    loading,
    connection,
    setTrack
}