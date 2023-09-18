"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var styled_components_1 = require("styled-components");
function CartPlusModal(_a) {
    var onClose = _a.onClose, openCartPlus = _a.openCartPlus, setOpenCartPlus = _a.setOpenCartPlus;
    var outside = react_1.useRef(null);
    // 모달 텍스트
    var modalText = {
        title: '',
        btn: '확인'
    };
    // 모달창 밖 클릭 시 닫기
    var handleModalClose = function (e) {
        if (openCartPlus && outside.current === e.target) {
            setOpenCartPlus(false);
        }
    };
    return react_dom_1["default"].createPortal(react_1["default"].createElement(OverLay, null,
        react_1["default"].createElement(OutLine, { ref: outside, onClick: function (e) { return handleModalClose(e); }, onKeyDown: function (e) {
                if (e.key === 'Enter') {
                    handleModalClose(e);
                }
            }, role: "presentation" },
            react_1["default"].createElement(Wrap, null,
                react_1["default"].createElement("h1", { className: "modal_title" }, modalText.title),
                react_1["default"].createElement("button", { className: "modal_button", onClick: onClose }, modalText.btn)))), document.getElementById('modal'));
}
var OverLay = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 999999;\n"], ["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 999999;\n"])));
var OutLine = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  padding-bottom: env(safe-area-inset-bottom); /* \uD558\uB2E8 \uC548\uC804 \uC601\uC5ED \uACE0\uB824 */\n"], ["\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  padding-bottom: env(safe-area-inset-bottom); /* \uD558\uB2E8 \uC548\uC804 \uC601\uC5ED \uACE0\uB824 */\n"])));
var Wrap = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  background: var(--reoh-white);\n  width: 495px;\n  border-radius: 15px;\n  text-align: center;\n  padding: 40px 20px;\n  overflow: hidden;\n  white-space: pre-wrap;\n"], ["\n  position: relative;\n  background: var(--reoh-white);\n  width: 495px;\n  border-radius: 15px;\n  text-align: center;\n  padding: 40px 20px;\n  overflow: hidden;\n  white-space: pre-wrap;\n"])));
exports["default"] = CartPlusModal;
var templateObject_1, templateObject_2, templateObject_3;
