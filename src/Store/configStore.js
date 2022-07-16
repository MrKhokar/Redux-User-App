import { configureStore } from "@reduxjs/toolkit";
import bugReducer from "./user";
 const configStore=()=>{

    return configureStore({reducer:bugReducer})
}
export default configStore