"use strict";
exports.__esModule = true;
exports.coupons = void 0;
exports.coupons = [
    {
        type: 'rate',
        title: '20% 할인 쿠폰',
        discountRate: 20
    },
    {
        type: 'amount',
        title: '10,000원 할인 쿠폰',
        discountAmount: 10000
    },
    {
        type: 'conditional_amount',
        title: '50000원 이상 구매 시, 15,000원 할인 쿠폰',
        minOrderAmount: 50000,
        discountAmount: 15000
    },
];
