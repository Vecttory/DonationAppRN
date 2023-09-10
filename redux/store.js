import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer, persistStore } from 'redux-persist'
import User from './reducers/User'
import { logger } from 'redux-logger'

const rootReducer = combineReducers({
  user: User
})

const configuraton = {
  key: 'root',
  storage: AsyncStorage,
  version: 1
}
const persistedReducer = persistReducer(configuraton, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(logger)
  }
})

export default store

export const persistor = persistStore(store)
