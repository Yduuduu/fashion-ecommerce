// 쿠폰 데이터
export type Coupon = {
  coupon_no: number;
  type: string;
  title: string;
  discount_rate?: number; // 비율 할인
  discount_amount?: number; // 정액 할인
  min_order_amount?: number; // 조건 정액 할인
  created_date: string;
  expiration_date: string;
};

export const coupons: Coupon[] = [
  {
    coupon_no: 10000,
    type: 'rate',
    title: '20% 할인 쿠폰',
    discount_rate: 20,
    created_date: '2023-09-07',
    expiration_date: '2023-10-01',
  },
  {
    coupon_no: 10001,
    type: 'amount',
    title: '10,000원 할인 쿠폰',
    discount_amount: 10000,
    created_date: '2023-09-07',
    expiration_date: '2023-10-09',
  },
  {
    coupon_no: 10002,
    type: 'conditional_amount',
    title: '50,000원 이상 구매 시, 15,000원 할인 쿠폰',
    min_order_amount: 50000,
    discount_amount: 15000,
    created_date: '2023-09-07',
    expiration_date: '2023-10-07',
  },
];
