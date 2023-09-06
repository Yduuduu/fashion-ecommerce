"use strict";
exports.__esModule = true;
var storage_1 = require("redux-persist/lib/storage");
var toolkit_1 = require("@reduxjs/toolkit");
var redux_persist_1 = require("redux-persist");
var userInfoSlice_1 = require("./userInfoSlice");
var reducers = toolkit_1.combineReducers({
    userInfoFilter: userInfoSlice_1["default"].reducer
});
var persistConfig = {
    key: 'root',
    storage: storage_1["default"],
    whitelist: ['userInfoFilter']
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, reducers);
var store = toolkit_1.configureStore({
    reducer: persistedReducer,
    middleware: function (getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [redux_persist_1.PERSIST]
            }
        });
    }
});
exports["default"] = store;
