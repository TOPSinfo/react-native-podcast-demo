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

export {
    loading,
    connection
}