"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./dist/NavBar.css");
var logo_text_white_svg_1 = require("../../assets/img/logo_text_white.svg");
// NavBar 컴포넌트 정의
function NavBar() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("header", null,
            react_1["default"].createElement("div", { className: "navBar" },
                react_1["default"].createElement("div", { className: "navBar__top-menu" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                        react_1["default"].createElement("img", { className: "navBar__top-menu__logo", src: logo_text_white_svg_1["default"], alt: "logo" })),
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null, "\uC2A4\uC6E8\uD2B8 \uD398\uC2A4\uD2F0\uBC8C"),
                        react_1["default"].createElement("li", null, "F/W \uC2E0\uC0C1"),
                        react_1["default"].createElement("li", null, "\uB7AD\uD0B9"),
                        react_1["default"].createElement("li", null, "\uC5C5\uB370\uC774\uD2B8"),
                        react_1["default"].createElement("li", null, "\uCF54\uB514"),
                        react_1["default"].createElement("li", null, "\uC138\uC77C"),
                        react_1["default"].createElement("li", null, "\uC2A4\uD398\uC15C"),
                        react_1["default"].createElement("li", null, "\uB9E4\uAC70\uC9C4"),
                        react_1["default"].createElement("li", null, "TV"),
                        react_1["default"].createElement("li", null, "\uC774\uBCA4\uD2B8"),
                        react_1["default"].createElement("li", null, "\uBE0C\uB79C\uB4DC"))))),
        react_1["default"].createElement("main", null,
            react_1["default"].createElement(react_router_dom_1.Outlet, null))));
}
exports["default"] = NavBar;
