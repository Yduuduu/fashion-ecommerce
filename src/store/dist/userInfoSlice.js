"use strict";
var _a;
exports.__esModule = true;
exports.mileage = exports.coupon = exports.user_nickname = exports.initUsrInfoFilter = exports.setUsrInfoFilter = exports.userInfoSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    user_nickname: '윤뚜뚜',
    coupon: [],
    mileage: 30000
};
exports.userInfoSlice = toolkit_1.createSlice({
    name: 'userInfoFilter',
    initialState: initialState,
    reducers: {
        setUsrInfoFilter: function (state, action) {
            state.user_nickname = action.payload.user_nickname;
            state.coupon = action.payload.coupon;
            state.mileage = action.payload.mileage;
        },
        initUsrInfoFilter: function (state) {
            state.user_nickname = initialState.user_nickname;
            state.coupon = initialState.coupon;
            state.mileage = initialState.mileage;
        }
    }
});
exports.setUsrInfoFilter = (_a = exports.userInfoSlice.actions, _a.setUsrInfoFilter), exports.initUsrInfoFilter = _a.initUsrInfoFilter;
exports.user_nickname = function (state) {
    return state.userInfoFilter.user_nickname;
};
exports.coupon = function (state) { return state.userInfoFilter.coupon; };
exports.mileage = function (state) { return state.userInfoFilter.mileage; };
exports["default"] = exports.userInfoSlice;
