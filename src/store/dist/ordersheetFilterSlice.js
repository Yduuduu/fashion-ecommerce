"use strict";
var _a;
exports.__esModule = true;
exports.nowOrderSheetState = exports.sortingMethod = exports.area = exports.initOrdersheetFilter = exports.setOrdersheetFilter = exports.ordersheetFilterSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    area: ['전체'],
    sortingMethod: '최신순',
    nowOrderSheetState: '주거 주문서'
};
exports.ordersheetFilterSlice = toolkit_1.createSlice({
    name: 'ordersheetFilter',
    initialState: initialState,
    reducers: {
        setOrdersheetFilter: function (state, action) {
            state.area = action.payload.area;
            state.sortingMethod = action.payload.sortingMethod;
            state.nowOrderSheetState = action.payload.nowOrderSheetState;
        },
        initOrdersheetFilter: function (state) {
            state.area = initialState.area;
            state.sortingMethod = initialState.sortingMethod;
            state.nowOrderSheetState = initialState.nowOrderSheetState;
        }
    }
});
exports.setOrdersheetFilter = (_a = exports.ordersheetFilterSlice.actions, _a.setOrdersheetFilter), exports.initOrdersheetFilter = _a.initOrdersheetFilter;
exports.area = function (state) { return state.ordersheetFilter.area; };
exports.sortingMethod = function (state) {
    return state.ordersheetFilter.sortingMethod;
};
exports.nowOrderSheetState = function (state) {
    return state.ordersheetFilter.nowOrderSheetState;
};
exports["default"] = exports.ordersheetFilterSlice;
