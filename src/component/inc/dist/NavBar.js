"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./dist/NavBar.css");
var logo_text_white_svg_1 = require("../../assets/img/logo_text_white.svg");
var react_redux_1 = require("react-redux");
var userInfoSlice_1 = require("../../store/userInfoSlice");
// NavBar 컴포넌트 정의
function NavBar() {
    var nickname = react_redux_1.useSelector(userInfoSlice_1.user_nickname);
    console.log(nickname);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("header", null,
            react_1["default"].createElement("div", { className: "navBar" },
                react_1["default"].createElement("div", { className: "navBar__top-menu" },
                    react_1["default"].createElement("img", { className: "navBar__top-menu__logo", src: logo_text_white_svg_1["default"], alt: "logo" }),
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
                        react_1["default"].createElement("li", null, "\uBE0C\uB79C\uB4DC"))),
                react_1["default"].createElement("div", { className: "navBar__menu" },
                    react_1["default"].createElement("ul", null,
                        react_1["default"].createElement("li", null,
                            "Lv.99 ",
                            nickname),
                        react_1["default"].createElement("li", null, "\uBC14\uB85C\uC811\uC18D ON"),
                        react_1["default"].createElement("li", null, "\uC54C\uB9BC"),
                        react_1["default"].createElement("li", null, "\uB9C8\uC774\uD398\uC774\uC9C0"),
                        react_1["default"].createElement("li", null, "\uCD5C\uADFC \uBCF8 \uC0C1\uD488"),
                        react_1["default"].createElement("li", null, "\uC88B\uC544\uC694"),
                        react_1["default"].createElement("li", null, "\uC7A5\uBC14\uAD6C\uB2C8"),
                        react_1["default"].createElement("li", null, "\uC8FC\uBB38\uBC30\uC1A1\uC870\uD68C"),
                        react_1["default"].createElement("li", null, "\uACE0\uAC1D\uC13C\uD130"),
                        react_1["default"].createElement("li", null, "\uB798\uD50C"),
                        react_1["default"].createElement("li", null, "\uBE0C\uB79C\uB4DC \uAD6C\uC778"),
                        react_1["default"].createElement("li", null, "\uB85C\uADF8\uC544\uC6C3"),
                        react_1["default"].createElement("li", null, "\uCE5C\uAD6C\uCD08\uB300 EVENT. \uCE5C\uAD6C \uCD08\uB300\uD558\uBA74 5,000\uC6D0 \uC801\uB9BD\uAE08 \uC9C0\uAE09!"))))),
        react_1["default"].createElement("main", null,
            react_1["default"].createElement(react_router_dom_1.Outlet, null))));
}
exports["default"] = NavBar;
