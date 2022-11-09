import { configureStore } from "@reduxjs/toolkit";
import userName from './Slices/UserName.Slice'

export default configureStore({
    reducer:{
        userName
    }
})