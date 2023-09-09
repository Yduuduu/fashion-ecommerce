"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/HomePage.css");
var HomeMenuComponent_1 = require("component/home/HomeMenuComponent");
var HomeSideComponent_1 = require("component/home/HomeSideComponent");
var HomeProductComponent_1 = require("component/home/HomeProductComponent");
function HomePage() {
    return (react_1["default"].createElement("div", { className: "homePage" },
        react_1["default"].createElement(HomeMenuComponent_1["default"], null),
        react_1["default"].createElement(HomeSideComponent_1["default"], null),
        react_1["default"].createElement(HomeProductComponent_1["default"], null)));
}
exports["default"] = HomePage;
