import { createSlice } from '@reduxjs/toolkit';

type RootState = {
  userInfoFilter: {
    nickname: string;
    coupon: string[];
    mileage: number;
    level: number;
    lank: string;
    point: number;
  };
};

const initialState = {
  nickname: '윤뚜뚜',
  coupon: [],
  mileage: 30000,
  level: 99,
  lank: '플래티넘',
  point: 9800,
};

export const userInfoSlice = createSlice({
  name: 'userInfoFilter',
  initialState,
  reducers: {
    setUsrInfoFilter: (state, action) => {
      state.nickname = action.payload.nickname;
      state.coupon = action.payload.coupon;
      state.mileage = action.payload.mileage;
      state.level = action.payload.level;
      state.lank = action.payload.lank;
      state.point = action.payload.point;
    },
    initUsrInfoFilter: (state) => {
      state.nickname = initialState.nickname;
      state.coupon = initialState.coupon;
      state.mileage = initialState.mileage;
      state.level = initialState.level;
      state.lank = initialState.lank;
      state.point = initialState.point;
    },
  },
});

export const { setUsrInfoFilter, initUsrInfoFilter } = userInfoSlice.actions;

export const nickname = (state: RootState) => state.userInfoFilter.nickname;
export const coupon = (state: RootState) => state.userInfoFilter.coupon;
export const mileage = (state: RootState) => state.userInfoFilter.mileage;
export const level = (state: RootState) => state.userInfoFilter.level;
export const lank = (state: RootState) => state.userInfoFilter.lank;
export const point = (state: RootState) => state.userInfoFilter.point;

export default userInfoSlice;
