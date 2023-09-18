"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../../pages/home/dist/HomePage.css");
var material_1 = require("@mui/material");
var Product_1 = require("data/Product");
var Util_1 = require("module/Util");
var icon_cart_svg_1 = require("../../assets/img/icon_cart.svg");
// 상품 컴포넌트
function HomeProductComponent() {
    var cartClickHandler = function (idx) {
        console.log(idx);
        console.log('클릭');
    };
    return (react_1["default"].createElement("div", { className: "homePage-product" },
        react_1["default"].createElement(material_1.Grid, { item: true, xs: 12 },
            react_1["default"].createElement(material_1.Grid, { container: true }, Product_1.products
                .slice()
                .sort(function (a, b) { return a.product_no - b.product_no; })
                .map(function (item, idx) {
                return (react_1["default"].createElement(material_1.Grid, { item: true, xs: 2.4, key: idx },
                    react_1["default"].createElement("div", { className: "homePage-product__card" },
                        react_1["default"].createElement("div", { className: "homePage-product__card__img" },
                            react_1["default"].createElement("img", { src: item.main_image_url, alt: "img" }),
                            item.available_coupon !== false && (react_1["default"].createElement("span", null, "\uCFE0\uD3F0\uC0AC\uC6A9\uAC00\uB2A5"))),
                        react_1["default"].createElement("div", { className: "homePage-product__card__info-wrap" },
                            react_1["default"].createElement("p", { className: "homePage-product__card__text" },
                                react_1["default"].createElement("span", null, item.product_name),
                                react_1["default"].createElement("br", null),
                                item.available_coupon === false ? (react_1["default"].createElement("span", null,
                                    Util_1.getEraseFourDigits(item.price),
                                    "\uC6D0")) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                                    react_1["default"].createElement("del", null,
                                        Util_1.getEraseFourDigits(item.price),
                                        "\uC6D0"),
                                    react_1["default"].createElement("span", null,
                                        Util_1.getEraseFourDigits(Util_1.applyBestCoupon(item.price)),
                                        "\uC6D0"))),
                                react_1["default"].createElement("br", null),
                                react_1["default"].createElement("span", null,
                                    Util_1.calculateDeliveryDate(item.prev_delivery_times),
                                    ' ',
                                    "\uB3C4\uCC29\uC608\uC815"),
                                react_1["default"].createElement("br", null)),
                            react_1["default"].createElement("img", { className: "homePage-product__card__cart-img", src: icon_cart_svg_1["default"], onClick: function () { return cartClickHandler(idx); }, onKeyDown: function (e) {
                                    if (e.key === 'Enter') {
                                        cartClickHandler(idx);
                                    }
                                }, alt: "img" })))));
            })))));
}
exports["default"] = HomeProductComponent;
