"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/HomePage.css");
var react_redux_1 = require("react-redux");
var userInfoSlice_1 = require("../../store/userInfoSlice");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var Product_1 = require("data/Product");
var Util_1 = require("module/Util");
function HomePage() {
    var _nickname = react_redux_1.useSelector(userInfoSlice_1.nickname);
    var _level = react_redux_1.useSelector(userInfoSlice_1.level);
    // 상단 메뉴 컴포넌트
    function HomeMenuComponent() {
        return (react_1["default"].createElement("div", { className: "homePage-menu" },
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
                react_1["default"].createElement("li", { className: "homePage-menu__invite" },
                    react_1["default"].createElement(react_router_dom_1.Link, { to: "/" }, "\uCE5C\uAD6C\uCD08\uB300 EVENT. \uCE5C\uAD6C \uCD08\uB300\uD558\uBA74 5,000\uC6D0 \uC801\uB9BD\uAE08 \uC9C0\uAE09!")))));
    }
    // 사이드 네비게이션 컴포넌트
    function HomeSideComponent() {
        return react_1["default"].createElement("div", { className: "homePage-side" });
    }
    // 상품 컴포넌트
    function HomeProductComponent() {
        return (react_1["default"].createElement("div", { className: "homePage-product" },
            react_1["default"].createElement(material_1.Grid, { item: true, xs: 12 },
                react_1["default"].createElement(material_1.Grid, { container: true }, Product_1.products
                    .slice()
                    .sort(function (a, b) { return a.product_no - b.product_no; })
                    .map(function (item, idx) {
                    return (react_1["default"].createElement(material_1.Grid, { item: true, xs: 2.4, key: idx },
                        react_1["default"].createElement("div", { className: "homePage-product__card" },
                            react_1["default"].createElement("div", { className: "homePage-product__card__img" },
                                react_1["default"].createElement("img", { src: item.main_image_url, alt: "img" })),
                            react_1["default"].createElement("p", { className: "homePage-product__card__text" },
                                react_1["default"].createElement("span", null, item.product_name),
                                react_1["default"].createElement("br", null),
                                item.available_coupon === false ? (react_1["default"].createElement("span", null,
                                    Util_1.getEraseFourDigits(item.price),
                                    "\uC6D0")) : (react_1["default"].createElement("del", null,
                                    Util_1.getEraseFourDigits(item.price),
                                    "\uC6D0")),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("span", null, Util_1.calculateAverageDeliveryTime(item.prev_delivery_times)),
                                item.available_coupon !== false && (react_1["default"].createElement("span", null, "\uCFE0\uD3F0\uC0AC\uC6A9\uAC00\uB2A5"))))));
                })))));
    }
    return (react_1["default"].createElement("div", { className: "homePage" },
        react_1["default"].createElement(HomeMenuComponent, null),
        react_1["default"].createElement(HomeSideComponent, null),
        react_1["default"].createElement(HomeProductComponent, null)));
}
exports["default"] = HomePage;
