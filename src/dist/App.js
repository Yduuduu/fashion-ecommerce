"use strict";
exports.__esModule = true;
var NavBar_1 = require("component/inc/NavBar");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function App() {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(react_1["default"].StrictMode, null,
            react_1["default"].createElement(react_router_dom_1.Routes, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", caseSensitive: true, element: react_1["default"].createElement(NavBar_1["default"], null) })))));
}
exports["default"] = App;
