import { coupons } from 'data/Coupon';

// 오늘 날짜 표기(0000.00.00.)
export const getFormattedDate = (): string => {
  const date = new Date();

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}.`;
};

// 날짜 표기 00.00.00
export const getYearMonthDayTime = (date: string) => {
  const result =
    date.substr(2, 2) + '.' + date.substr(5, 2) + '.' + date.substr(8, 2);

  return result;
};

// 날짜 사이의 일수 구하기
export const getDateDiff = (date: string): number => {
  // 오늘 날짜 구하기
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + '-' + month + '-' + day;

  const startDate = new Date(dateString);
  const endDate = new Date(date);

  // 날짜 형식이 유효한지 검사
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error('유효하지 않은 날짜 형식입니다.');
  }

  const dateGap = endDate.getTime() - startDate.getTime();
  const result = Math.ceil(dateGap / (1000 * 60 * 60 * 24));

  // 결과가 음수이면 0으로 반환
  return Math.max(result + 1, 0);
};

// 3번째 자리마다 , 찍기
export const getEraseFourDigits = (data: number) => {
  const result = data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return result;
};

// 평균 배송일 구하기
export const calculateAverageDeliveryTime = (
  prevDeliveryTimes: number[],
): number => {
  if (prevDeliveryTimes.length === 0) {
    return 2;
  }

  const sum = prevDeliveryTimes.reduce((acc, time) => acc + time, 0);
  const average = Math.ceil(sum / prevDeliveryTimes.length);

  return average;
};

// 배송 소요 날짜 구하기
export const calculateDeliveryDate = (
  averageDeliveryTime: number[] | undefined,
): string => {
  if (!averageDeliveryTime || averageDeliveryTime.length === 0) {
    averageDeliveryTime = [2];
  }

  const sum = averageDeliveryTime.reduce((acc, time) => acc + time, 0);
  const average = Math.ceil(sum / averageDeliveryTime.length);

  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + average);

  const month = (deliveryDate.getMonth() + 1).toString().padStart(2, '0');
  const day = deliveryDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${month}/${day}`;

  return formattedDate;
};

// 최적의 쿠폰을 찾아 적용한 금액
export const applyBestCoupon = (amount: number): number => {
  let bestDiscount = 0;

  for (const coupon of coupons) {
    let discount = 0;

    switch (coupon.type) {
      case 'rate':
        if (coupon.discount_rate) {
          discount = (amount * coupon.discount_rate) / 100;
        }
        break;
      case 'amount':
        if (coupon.discount_amount) {
          discount = coupon.discount_amount;
        }
        break;
      case 'conditional_amount':
        if (
          coupon.discount_amount &&
          coupon.min_order_amount &&
          amount >= coupon.min_order_amount
        ) {
          discount = coupon.discount_amount;
        }
        break;
    }

    if (discount > bestDiscount) {
      bestDiscount = discount;
    }
  }

  return amount - bestDiscount;
};
