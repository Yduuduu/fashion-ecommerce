"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/HomePage.css");
var react_redux_1 = require("react-redux");
var userInfoSlice_1 = require("../../store/userInfoSlice");
var react_router_dom_1 = require("react-router-dom");
function HomePage() {
    var _nickname = react_redux_1.useSelector(userInfoSlice_1.nickname);
    var _level = react_redux_1.useSelector(userInfoSlice_1.level);
    return (react_1["default"].createElement("div", { className: "homePage" },
        react_1["default"].createElement("div", { className: "homePage__menu" },
            react_1["default"].createElement("ul", null,
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/mypage" },
                        "Lv.",
                        _level,
                        " ",
                        _nickname)),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uBC14\uB85C\uC811\uC18D ON")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uC54C\uB9BC")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/mypage" }, "\uB9C8\uC774\uD398\uC774\uC9C0")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uCD5C\uADFC \uBCF8 \uC0C1\uD488")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uC88B\uC544\uC694")),
                react_1["default"].createElement("li", null, "\uC7A5\uBC14\uAD6C\uB2C8"),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uC8FC\uBB38\uBC30\uC1A1\uC870\uD68C")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uACE0\uAC1D\uC13C\uD130")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uB798\uD50C")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uBE0C\uB79C\uB4DC \uAD6C\uC778")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uB85C\uADF8\uC544\uC6C3")),
                react_1["default"].createElement("li", null,
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uCE5C\uAD6C\uCD08\uB300 EVENT. \uCE5C\uAD6C \uCD08\uB300\uD558\uBA74 5,000\uC6D0 \uC801\uB9BD\uAE08 \uC9C0\uAE09!"))))));
}
exports["default"] = HomePage;
