"use strict";
var _a;
exports.__esModule = true;
exports.point = exports.lank = exports.level = exports.mileage = exports.coupon = exports.nickname = exports.initUsrInfoFilter = exports.setUsrInfoFilter = exports.userInfoSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    nickname: '윤뚜뚜',
    coupon: [],
    mileage: 30000,
    level: 99,
    lank: '플래티넘',
    point: 9800
};
exports.userInfoSlice = toolkit_1.createSlice({
    name: 'userInfoFilter',
    initialState: initialState,
    reducers: {
        setUsrInfoFilter: function (state, action) {
            state.nickname = action.payload.nickname;
            state.coupon = action.payload.coupon;
            state.mileage = action.payload.mileage;
            state.level = action.payload.level;
            state.lank = action.payload.lank;
            state.point = action.payload.point;
        },
        initUsrInfoFilter: function (state) {
            state.nickname = initialState.nickname;
            state.coupon = initialState.coupon;
            state.mileage = initialState.mileage;
            state.level = initialState.level;
            state.lank = initialState.lank;
            state.point = initialState.point;
        }
    }
});
exports.setUsrInfoFilter = (_a = exports.userInfoSlice.actions, _a.setUsrInfoFilter), exports.initUsrInfoFilter = _a.initUsrInfoFilter;
exports.nickname = function (state) { return state.userInfoFilter.nickname; };
exports.coupon = function (state) { return state.userInfoFilter.coupon; };
exports.mileage = function (state) { return state.userInfoFilter.mileage; };
exports.level = function (state) { return state.userInfoFilter.level; };
exports.lank = function (state) { return state.userInfoFilter.lank; };
exports.point = function (state) { return state.userInfoFilter.point; };
exports["default"] = exports.userInfoSlice;
