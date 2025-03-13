import { configureStore } from "@reduxjs/toolkit"
import {ApiClientFile} from "../apiClise/api"

export const store = configureStore({
    reducer:{
      [ApiClientFile.reducerPath]:ApiClientFile.reducer
    },
    middleware:(getDefautMiddleware)=>getDefautMiddleware().concat(ApiClientFile.middleware)

})
export const RootState = store.getState();
export const AppDispatch = store.dispatch; 