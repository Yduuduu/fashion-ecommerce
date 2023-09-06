import { createSlice } from '@reduxjs/toolkit';

type RootState = {
  userInfoFilter: {
    user_nickname: string;
    coupon: string[];
    mileage: number;
  };
};

const initialState = {
  user_nickname: '윤뚜뚜',
  coupon: [],
  mileage: 30000,
};

export const userInfoSlice = createSlice({
  name: 'userInfoFilter',
  initialState,
  reducers: {
    setUsrInfoFilter: (state, action) => {
      state.user_nickname = action.payload.user_nickname;
      state.coupon = action.payload.coupon;
      state.mileage = action.payload.mileage;
    },
    initUsrInfoFilter: (state) => {
      state.user_nickname = initialState.user_nickname;
      state.coupon = initialState.coupon;
      state.mileage = initialState.mileage;
    },
  },
});

export const { setUsrInfoFilter, initUsrInfoFilter } = userInfoSlice.actions;

export const user_nickname = (state: RootState) =>
  state.userInfoFilter.user_nickname;
export const coupon = (state: RootState) => state.userInfoFilter.coupon;
export const mileage = (state: RootState) => state.userInfoFilter.mileage;

export default userInfoSlice;
