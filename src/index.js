import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Navigator/AuthNavigator';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Redux/Store/Store'
import Loading from './Components/Loading';
import Connection from './Components/Connection';
import HomeNavigator from './Navigator/HomeNavigator';
const App = () => {
    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    {/* <AuthNavigator /> */}
                    <HomeNavigator />
                </NavigationContainer>
                <Loading />
                <Connection />
            </PersistGate>
        </Provider>
    );
}

export default App;