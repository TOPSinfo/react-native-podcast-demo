import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import Reducers from '../Reducers/RootReducer'
import logger from 'redux-logger'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    timeout: 10000,
    blacklist: ['loading']
}

const persistedReducer = persistReducer(persistConfig, Reducers)
export const store = createStore(persistedReducer, applyMiddleware(logger))
export const persistor = persistStore(store)


