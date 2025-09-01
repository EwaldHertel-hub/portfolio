import {configureStore} from '@reduxjs/toolkit';
import DataReducer from './reducer';


export const Store = () => {
    return configureStore({
        reducer: {
            data: DataReducer,
        }
    })
}

export type AppStore = ReturnType<typeof Store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
