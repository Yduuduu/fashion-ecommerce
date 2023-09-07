"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/MyPage.css");
var react_redux_1 = require("react-redux");
var userInfoSlice_1 = require("../../store/userInfoSlice");
var profile_png_1 = require("../../assets/img/profile.png");
var icon_coin_svg_1 = require("../../assets/img/icon_coin.svg");
var icon_money_svg_1 = require("../../assets/img/icon_money.svg");
var icon_pen_svg_1 = require("../../assets/img/icon_pen.svg");
var icon_ticket_svg_1 = require("../../assets/img/icon_ticket.svg");
var Util_1 = require("../../module/Util");
var Coupon_1 = require("data/Coupon");
function MyPage() {
    function UserInfoComponent() {
        var _nickname = react_redux_1.useSelector(userInfoSlice_1.nickname);
        var _level = react_redux_1.useSelector(userInfoSlice_1.level);
        var _lank = react_redux_1.useSelector(userInfoSlice_1.lank);
        return (react_1["default"].createElement("div", { className: "myPage-userInfo" },
            react_1["default"].createElement("img", { className: "myPage-userInfo__profile", src: profile_png_1["default"], alt: "profile" }),
            react_1["default"].createElement("div", { className: "myPage-userInfo__text" },
                react_1["default"].createElement("h2", { className: "myPage-userInfo__text__nick-name" },
                    _nickname,
                    react_1["default"].createElement("span", null, "\uD68C\uC6D0\uC815\uBCF4\uBCC0\uACBD")),
                react_1["default"].createElement("h3", { className: "myPage-userInfo__text__lank" },
                    "Lv.",
                    _level,
                    " ",
                    _lank,
                    react_1["default"].createElement("span", null,
                        "\uAC00\uC785\uC77C: ",
                        Util_1.getFormattedDate())),
                react_1["default"].createElement("h4", { className: "myPage-userInfo__text__point-info" },
                    _nickname,
                    "\uB2D8 \uB2E4\uC74C \uB4F1\uAE09\uC778 \uB2E4\uC774\uC544\uBAAC\uB4DC\uAE4C\uC9C0 99,999\uC810 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.",
                    react_1["default"].createElement("span", null, "\uB4F1\uAE09\uD61C\uD0DD >")))));
    }
    function RewardInfoComponent() {
        var _mileage = react_redux_1.useSelector(userInfoSlice_1.mileage);
        var _point = react_redux_1.useSelector(userInfoSlice_1.point);
        var rewardItemList = [
            {
                img: icon_coin_svg_1["default"],
                name: '적립금',
                value: _mileage
            },
            {
                img: icon_money_svg_1["default"],
                name: '포인트',
                value: _point
            },
            {
                img: icon_ticket_svg_1["default"],
                name: '쿠폰',
                value: Coupon_1.coupons.length
            },
            {
                img: icon_pen_svg_1["default"],
                name: '후기작성',
                value: 0
            },
        ];
        return (react_1["default"].createElement("div", { className: "myPage-rewardInfo" }, rewardItemList.map(function (item, index) { return (react_1["default"].createElement("div", { className: "myPage-rewardInfo__wrap", key: index },
            react_1["default"].createElement("img", { className: "myPage-rewardInfo__wrap__img", src: item.img, alt: item.img }),
            react_1["default"].createElement("h3", { className: "myPage-rewardInfo__wrap__name" },
                item.name,
                " >"),
            react_1["default"].createElement("h3", { className: "myPage-rewardInfo__wrap__value" }, item.value))); })));
    }
    return (react_1["default"].createElement("div", { className: "myPage" },
        react_1["default"].createElement("div", { className: "myPage__title" },
            react_1["default"].createElement("div", { className: "myPage__top" },
                react_1["default"].createElement("h1", { className: "myPage__top__head" }, "My Page"),
                react_1["default"].createElement("ul", { className: "myPage__top__sub" },
                    react_1["default"].createElement("li", null, "\uC7A5\uBC14\uAD6C\uB2C8"),
                    react_1["default"].createElement("li", null, "\uACE0\uAC1D\uC13C\uD130"),
                    react_1["default"].createElement("li", null, "\uB85C\uADF8\uC544\uC6C3"))),
            react_1["default"].createElement("div", { className: "myPage__info-wrap" },
                react_1["default"].createElement(UserInfoComponent, null),
                react_1["default"].createElement(RewardInfoComponent, null)))));
}
exports["default"] = MyPage;
