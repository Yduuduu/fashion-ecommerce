"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var redux_persist_1 = require("redux-persist");
var react_2 = require("redux-persist/integration/react");
var store_1 = require("./store/store");
var persistor = redux_persist_1.persistStore(store_1["default"]);
var rootElement = document.getElementById('root');
if (!rootElement)
    throw new Error('Failed to find the root element');
var root = client_1["default"].createRoot(rootElement);
root.render(
// <React.StrictMode>
react_1["default"].createElement(react_redux_1.Provider, { store: store_1["default"] },
    react_1["default"].createElement(react_2.PersistGate, { loading: null, persistor: persistor },
        react_1["default"].createElement(App_1["default"], null))));
