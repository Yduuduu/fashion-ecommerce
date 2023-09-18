"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../../pages/home/dist/HomePage.css");
var SideBarItem_1 = require("data/SideBarItem");
var icon_arrow_right_svg_1 = require("../../assets/img/icon_arrow_right.svg");
var icon_call_svg_1 = require("../../assets/img/icon_call.svg");
var icon_heart_svg_1 = require("../../assets/img/icon_heart.svg");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
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
                react_1["default"].createElement("span", null, item.sub),
                react_1["default"].createElement("img", { src: icon_arrow_right_svg_1["default"], alt: "arrow-right" })));
        }))) : (react_1["default"].createElement(react_1["default"].Fragment, null, SideBarItem_1.brandList.map(function (item, idx) {
            return (react_1["default"].createElement("div", { className: "homePage-side__brand", key: idx },
                react_1["default"].createElement("div", { className: "homePage-side__brand__wrap" },
                    react_1["default"].createElement("span", null, item.name),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("span", null, item.sub)),
                react_1["default"].createElement("img", { src: icon_heart_svg_1["default"], alt: "img" })));
        }))),
        react_1["default"].createElement("div", { className: "homePage-side__bottom" },
            react_1["default"].createElement("div", { className: "homePage-side__bottom__call" },
                react_1["default"].createElement("h4", null,
                    react_1["default"].createElement("img", { src: icon_call_svg_1["default"], alt: "img" }),
                    "1500-1234"),
                react_1["default"].createElement("span", null, "\uC624\uC8049\uC2DC~\uC624\uD6C46\uC2DC \uC6B4\uC601 / \uD1A0,\uC77C,\uD734\uC77C \uD734\uBB34")),
            react_1["default"].createElement("p", { className: "homePage-side__bottom__text" },
                react_1["default"].createElement("span", null,
                    "- \uC804\uD654 \uC804 ",
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38"),
                    "\uC744 \uD655\uC778\uD558\uC138\uC694."),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", null,
                    "- ",
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "1:1\uBB38\uC758"),
                    "\uB97C \uD1B5\uD574\uC11C\uB3C4 \uC0C1\uB2F4\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", null, "- \uC0C1\uD488 \uBB38\uC758\uB294 \uAC01 \uC0C1\uD488 Q&A\uB97C \uC774\uC6A9\uD558\uC138\uC694.")),
            react_1["default"].createElement("ul", { className: "homePage-side__bottom__button" },
                react_1["default"].createElement(material_1.Grid, { item: true, xs: 12 },
                    react_1["default"].createElement(material_1.Grid, { container: true, spacing: 1 },
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 4 },
                            react_1["default"].createElement("li", null, "\uD68C\uC6D0\uD6C4\uAE30")),
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 4 },
                            react_1["default"].createElement("li", null, "\uD68C\uC6D0\uD61C\uD0DD")),
                        react_1["default"].createElement(material_1.Grid, { item: true, xs: 4 },
                            react_1["default"].createElement("li", null, "\uACF5\uC9C0\uC0AC\uD56D"))))))));
}
exports["default"] = HomeSideComponent;
