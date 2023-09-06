"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/MyPage.css");
function MyPage() {
    function UserInfoComponent() {
        return react_1["default"].createElement("div", null, "\uC720\uC800 \uC778\uD3EC");
    }
    //   function OrderSheetInfoComponent() {
    //     return <div>유저 인포</div>;
    //   }
    return (react_1["default"].createElement("div", { className: "myPage" },
        react_1["default"].createElement("div", { className: "myPage__title" },
            react_1["default"].createElement("div", { className: "myPage__top" },
                react_1["default"].createElement("h1", { className: "myPage__top__head" }, "My Page"),
                react_1["default"].createElement("ul", { className: "myPage__top__sub" },
                    react_1["default"].createElement("li", null, "\uC7A5\uBC14\uAD6C\uB2C8"),
                    react_1["default"].createElement("li", null, "\uACE0\uAC1D\uC13C\uD130"),
                    react_1["default"].createElement("li", null, "\uB85C\uADF8\uC544\uC6C3"))),
            react_1["default"].createElement(UserInfoComponent, null))));
}
exports["default"] = MyPage;
