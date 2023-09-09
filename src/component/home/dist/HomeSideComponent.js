"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../../pages/home/dist/HomePage.css");
var SideBarItem_1 = require("data/SideBarItem");
// 사이드 네비게이션 컴포넌트
function HomeSideComponent() {
    var sideList = [{ name: '품목' }, { name: '브랜드' }];
    var _a = react_1.useState(0), sideIndex = _a[0], setSideIndex = _a[1];
    var sideClickHandler = function (idx) {
        setSideIndex(idx);
    };
    return (react_1["default"].createElement("aside", { className: "homePage-side" },
        react_1["default"].createElement("ul", null, sideList.map(function (item, idx) {
            return (react_1["default"].createElement("li", { key: idx, className: sideIndex === idx
                    ? 'homePage-side__head-item__action'
                    : 'homePage-side__head-item', style: sideIndex === 0
                    ? { borderLeft: '1px solid var(--subblue-light)' }
                    : { borderRight: '1px solid var(--subblue-light)' }, onClick: function () { return sideClickHandler(idx); }, onKeyDown: function (e) {
                    if (e.key === 'Enter') {
                        sideClickHandler(idx);
                    }
                } }, item.name));
        })),
        sideIndex === 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null, SideBarItem_1.itemList.map(function (item, idx) {
            return (react_1["default"].createElement("div", { className: "homePage-side__item", key: idx },
                react_1["default"].createElement("span", null, item.name),
                react_1["default"].createElement("span", null, item.sub)));
        }))) : (react_1["default"].createElement(react_1["default"].Fragment, null, SideBarItem_1.brandList.map(function (item, idx) {
            return (react_1["default"].createElement("div", { className: "homePage-side__brand", key: idx },
                react_1["default"].createElement("span", null, item.name),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", null, item.sub)));
        })))));
}
exports["default"] = HomeSideComponent;
