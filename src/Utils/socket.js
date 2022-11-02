import socketIO from 'socket.io-client';
// Initialize Socket IO:
export const socket = socketIO('https://socket-app-test-node.herokuapp.com/', { transports: ['websocket'] });

// export the function to connect and use socket IO:
export const startSocketIO = () => {
    console.log('ON Start')
    console.log('Socket', socket)
    socket.on('connect', () => {
        console.log('On connect')
    })
    socket.on('disconnect', () => {
        console.log('connection to server lost.');
    });

    socket.on('onMessage', (message) => {
        console.log('on message', message)
    });

    socket.on("error", (error) => {
        console.log('Error', error)
    });

    socket.on("connect_error", (error) => {
        console.log('Connect error', error)
    });
}
