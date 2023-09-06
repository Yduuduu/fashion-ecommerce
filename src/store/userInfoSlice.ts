import { createSlice } from '@reduxjs/toolkit';

type RootState = {
  ordersheetFilter: {
    user_nickname: string;
    coupon: string[];
    mileage: number;
  };
};

const initialState = {
  user_nickname: '',
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
  state.ordersheetFilter.user_nickname;
export const coupon = (state: RootState) => state.ordersheetFilter.coupon;
export const mileage = (state: RootState) => state.ordersheetFilter.mileage;

export default userInfoSlice;
