import { configureStore } from "@reduxjs/toolkit";
import DeReducer from "./DeReducer";
import EnReducer from "./EnReducer";
import languageReducer from "./languageReducer";

const Store = configureStore({
    reducer: {
        dePack: DeReducer,
        enPack: EnReducer,
        language: languageReducer,
    },
    devTools: true,
});

export default Store;