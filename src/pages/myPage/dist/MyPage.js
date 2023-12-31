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
    // 주문내역 조회 테이블 헤더
    var orderHeadList = [
        {
            title: '상품정보'
        },
        {
            title: '주문일자'
        },
        {
            title: '주문번호'
        },
        {
            title: '주문금액(수량)'
        },
        {
            title: '주문 상태'
        },
    ];
    // 장바구니 테이블 헤더
    var cartList = [
        {
            title: '상품정보'
        },
        {
            title: '상품금액'
        },
        {
            title: '수량'
        },
        {
            title: '주문금액'
        },
        {
            title: '배송 형태/배송비'
        },
    ];
    // 쿠폰 테이블 헤더
    var couponList = [
        {
            title: '쿠폰번호'
        },
        {
            title: '쿠폰명'
        },
        {
            title: '할인금액'
        },
        {
            title: '적용 범위'
        },
        {
            title: '유효기간'
        },
    ];
    // 회원정보 컴포넌트
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
    // 리워드 컴포넌트
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
            react_1["default"].createElement("h3", { className: "myPage-rewardInfo__wrap__value" }, Util_1.getEraseFourDigits(item.value)))); })));
    }
    return (react_1["default"].createElement("div", { className: "myPage" },
        react_1["default"].createElement("div", { className: "myPage-title" },
            react_1["default"].createElement("div", { className: "myPage-title__top" },
                react_1["default"].createElement("h1", { className: "myPage-title__top__head" }, "My Page"),
                react_1["default"].createElement("ul", { className: "myPage-title__top__sub" },
                    react_1["default"].createElement("li", null, "\uC7A5\uBC14\uAD6C\uB2C8"),
                    react_1["default"].createElement("li", null, "\uACE0\uAC1D\uC13C\uD130"),
                    react_1["default"].createElement("li", null, "\uB85C\uADF8\uC544\uC6C3"))),
            react_1["default"].createElement("div", { className: "myPage-title__info-wrap" },
                react_1["default"].createElement(UserInfoComponent, null),
                react_1["default"].createElement(RewardInfoComponent, null))),
        react_1["default"].createElement("div", { className: "myPage-content" },
            react_1["default"].createElement("nav", { className: "myPage-side" },
                react_1["default"].createElement("h3", { className: "myPage-side__baro" }, "\uBC14\uB85C\uC811\uC18D ON"),
                react_1["default"].createElement("h2", { className: "myPage-side__head" }, "\uB098\uC758 \uC1FC\uD551 \uD65C\uB3D9"),
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null, "\uC8FC\uBB38 \uB0B4\uC5ED \uC870\uD68C"),
                    react_1["default"].createElement("li", null, "\uAD6C\uB9E4\uD6C4\uAE30"),
                    react_1["default"].createElement("li", null, "\uB798\uD50C \uC751\uBAA8\uB0B4\uC5ED"),
                    react_1["default"].createElement("li", null, "\uC0C1\uD488\uBB38\uC758"),
                    react_1["default"].createElement("li", null, "1:1\uBB38\uC758"),
                    react_1["default"].createElement("li", null, "\uCD5C\uADFC \uBCF8 \uC0C1\uD488"),
                    react_1["default"].createElement("li", null, "\uC88B\uC544\uC694"),
                    react_1["default"].createElement("li", null, "\uB098\uC758 \uB9DE\uCDA4 \uC815\uBCF4"),
                    react_1["default"].createElement("li", null, "\uB9E4\uC7A5 \uACB0\uC81C \uB0B4\uC5ED"),
                    react_1["default"].createElement("li", null, "\uD68C\uC6D0 \uD61C\uD0DD")),
                react_1["default"].createElement("h2", { className: "myPage-side__head" }, "\uCEE4\uBBA4\uB2C8\uD2F0"),
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null, "\uAC8C\uC2DC\uBB3C/\uC2A4\uD06C\uB7A9/\uB313\uAE00"))),
            react_1["default"].createElement("div", { className: "myPage-box" },
                react_1["default"].createElement("h1", { className: "myPage-box__head" }, "\uC8FC\uBB38\uB0B4\uC5ED \uC870\uD68C"),
                react_1["default"].createElement("table", { className: "myPage-box__table" },
                    react_1["default"].createElement("thead", { className: "myPage-box__table__head" },
                        react_1["default"].createElement("tr", null, orderHeadList.map(function (item, idx) {
                            return react_1["default"].createElement("th", { key: idx }, item.title);
                        })))),
                react_1["default"].createElement("span", { className: "myPage-box__empty-text" }, "\uC8FC\uBB38\uB0B4\uC5ED\uC774 \uBE44\uC5B4\uC788\uC2B5\uB2C8\uB2E4.")),
            react_1["default"].createElement("div", { className: "myPage-box" },
                react_1["default"].createElement("h1", { className: "myPage-box__head" }, "\uC7A5\uBC14\uAD6C\uB2C8"),
                react_1["default"].createElement("table", { className: "myPage-box__table" },
                    react_1["default"].createElement("thead", { className: "myPage-box__table__head" },
                        react_1["default"].createElement("tr", null, cartList.map(function (item, idx) {
                            return react_1["default"].createElement("th", { key: idx }, item.title);
                        })))),
                react_1["default"].createElement("span", { className: "myPage-box__empty-text" }, "\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uB2F4\uAE34 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.")),
            react_1["default"].createElement("div", { className: "myPage-box" },
                react_1["default"].createElement("h1", { className: "myPage-box__head" },
                    "\uCFE0\uD3F0\u00A0",
                    react_1["default"].createElement("span", { className: "myPage-box__sub" },
                        Coupon_1.coupons.length,
                        "\uC7A5")),
                react_1["default"].createElement("table", { className: "myPage-box__table" },
                    react_1["default"].createElement("colgroup", null,
                        react_1["default"].createElement("col", null),
                        react_1["default"].createElement("col", null),
                        react_1["default"].createElement("col", null),
                        react_1["default"].createElement("col", null),
                        react_1["default"].createElement("col", null)),
                    react_1["default"].createElement("thead", { className: "myPage-box__table__head" },
                        react_1["default"].createElement("tr", null, couponList.map(function (item, idx) {
                            return react_1["default"].createElement("th", { key: idx }, item.title);
                        }))),
                    react_1["default"].createElement("tbody", { className: "myPage-box__table__body" }, Coupon_1.coupons.map(function (item, idx) {
                        return (react_1["default"].createElement("tr", { key: idx },
                            react_1["default"].createElement("td", null, item.coupon_no),
                            react_1["default"].createElement("td", null, item.title),
                            react_1["default"].createElement("td", null,
                                item.discount_rate !== undefined &&
                                    item.discount_rate + "%",
                                item.discount_amount !== undefined &&
                                    Util_1.getEraseFourDigits(item.discount_amount) + "\uC6D0",
                                item.min_order_amount !== undefined && (react_1["default"].createElement("span", null,
                                    react_1["default"].createElement("br", null), Util_1.getEraseFourDigits(item.min_order_amount) + "\uC6D0 \uC774\uC0C1 \uAD6C\uB9E4 \uC2DC"))),
                            react_1["default"].createElement("td", null, "\uC77C\uBD80 \uC0C1\uD488"),
                            react_1["default"].createElement("td", null,
                                Util_1.getYearMonthDayTime(item.created_date),
                                " ~",
                                ' ',
                                Util_1.getYearMonthDayTime(item.expiration_date),
                                ".",
                                react_1["default"].createElement("span", null,
                                    react_1["default"].createElement("br", null), Util_1.getDateDiff(item.expiration_date) + "\uC77C \uB0A8\uC74C"))));
                    }))),
                Coupon_1.coupons.length < 1 && (react_1["default"].createElement("span", { className: "myPage-box__empty-text" }, "\uC0AC\uC6A9\uAC00\uB2A5\uD55C \uCFE0\uD3F0\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."))))));
}
exports["default"] = MyPage;
