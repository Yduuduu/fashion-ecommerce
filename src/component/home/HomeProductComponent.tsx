import React from 'react';
import '../../pages/home/dist/HomePage.css';
import { Grid } from '@mui/material';
import { products } from 'data/Product';
import {
  getEraseFourDigits,
  calculateDeliveryDate,
  applyBestCoupon,
} from 'module/Util';

// 상품 컴포넌트
function HomeProductComponent() {
  return (
    <div className="homePage-product">
      <Grid item xs={12}>
        <Grid container>
          {products
            .slice()
            .sort((a, b) => a.product_no - b.product_no)
            .map((item, idx) => {
              return (
                <Grid item xs={2.4} key={idx}>
                  <div className="homePage-product__card">
                    <div className="homePage-product__card__img">
                      <img src={item.main_image_url} alt="img" />
                      {item.available_coupon !== false && (
                        <span>쿠폰사용가능</span>
                      )}
                    </div>
                    <p className="homePage-product__card__text">
                      <span>{item.product_name}</span>
                      <br />
                      {item.available_coupon === false ? (
                        <span>{getEraseFourDigits(item.price)}원</span>
                      ) : (
                        <>
                          <del>{getEraseFourDigits(item.price)}원</del>
                          <span>
                            {getEraseFourDigits(applyBestCoupon(item.price))}원
                          </span>
                        </>
                      )}
                      <br />
                      <span>
                        {calculateDeliveryDate(item.prev_delivery_times)}{' '}
                        도착예정
                      </span>
                      <br />
                    </p>
                  </div>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}
export default HomeProductComponent;
