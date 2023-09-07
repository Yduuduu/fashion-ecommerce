"use strict";
exports.__esModule = true;
exports.getFormattedDate = void 0;
// 오늘 날짜 표기(0000.00.00.)
exports.getFormattedDate = function () {
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return year + "." + month + "." + day + ".";
};
