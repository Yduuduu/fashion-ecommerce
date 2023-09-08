"use strict";
exports.__esModule = true;
exports.calculateAverageDeliveryTime = exports.getYearMonthDayTime = exports.getDateDiff = exports.getEraseFourDigits = exports.getFormattedDate = void 0;
// 오늘 날짜 표기(0000.00.00.)
exports.getFormattedDate = function () {
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return year + "." + month + "." + day + ".";
};
// 3번째 자리마다 , 찍기
exports.getEraseFourDigits = function (data) {
    var result = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return result;
};
// 날짜 사이의 일수 구하기
exports.getDateDiff = function (date) {
    // 오늘 날짜 구하기
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;
    var startDate = new Date(dateString);
    var endDate = new Date(date);
    // 날짜 형식이 유효한지 검사
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error('유효하지 않은 날짜 형식입니다.');
    }
    var dateGap = endDate.getTime() - startDate.getTime();
    var result = Math.ceil(dateGap / (1000 * 60 * 60 * 24));
    // 결과가 음수이면 0으로 반환
    return Math.max(result + 1, 0);
};
// 날짜 표기 00.00.00
exports.getYearMonthDayTime = function (date) {
    var result = date.substr(2, 2) + '.' + date.substr(5, 2) + '.' + date.substr(8, 2);
    return result;
};
// 평균 배송일 구하기
exports.calculateAverageDeliveryTime = function (prevDeliveryTimes) {
    if (prevDeliveryTimes.length === 0) {
        return 2;
    }
    var sum = prevDeliveryTimes.reduce(function (acc, time) { return acc + time; }, 0);
    var average = Math.ceil(sum / prevDeliveryTimes.length);
    return average;
};
