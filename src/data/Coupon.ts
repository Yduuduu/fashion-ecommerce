// 쿠폰 데이터
export type Coupon = {
  type: string;
  title: string;
  discountRate?: number;
  discountAmount?: number;
  minOrderAmount?: number;
};

export const coupons: Coupon[] = [
  {
    type: 'rate',
    title: '20% 할인 쿠폰',
    discountRate: 20,
  },
  {
    type: 'amount',
    title: '10,000원 할인 쿠폰',
    discountAmount: 10000,
  },
  {
    type: 'conditional_amount',
    title: '50000원 이상 구매 시, 15,000원 할인 쿠폰',
    minOrderAmount: 50000,
    discountAmount: 15000,
  },
];
