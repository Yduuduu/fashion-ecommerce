import React from 'react';
import './dist/HomePage.css';
import { useSelector } from 'react-redux';
import { nickname, level } from '../../store/userInfoSlice';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { products } from 'data/Product';
import { getEraseFourDigits, calculateAverageDeliveryTime } from 'module/Util';

function HomePage() {
  const _nickname = useSelector(nickname);
  const _level = useSelector(level);

  // 상단 메뉴 컴포넌트
  function HomeMenuComponent() {
    return (
      <div className="homePage-menu">
        <ul>
          <li>
            <Link to="/mypage">
              Lv.{_level} {_nickname}
            </Link>
          </li>
          <li>
            <Link to="/">바로접속 ON</Link>
          </li>
          <li>
            <Link to="/">알림</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
          <li>
            <Link to="/">최근 본 상품</Link>
          </li>
          <li>
            <Link to="/">좋아요</Link>
          </li>
          <li>장바구니</li>
          <li>
            <Link to="/">주문배송조회</Link>
          </li>
          <li>
            <Link to="/">고객센터</Link>
          </li>
          <li>
            <Link to="/">래플</Link>
          </li>
          <li>
            <Link to="/">브랜드 구인</Link>
          </li>
          <li>
            <Link to="/">로그아웃</Link>
          </li>
          <li className="homePage-menu__invite">
            <Link to="/">
              친구초대 EVENT. 친구 초대하면 5,000원 적립금 지급!
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  // 사이드 네비게이션 컴포넌트
  function HomeSideComponent() {
    return <div className="homePage-side"></div>;
  }
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
                      </div>
                      <p className="homePage-product__card__text">
                        <span>{item.product_name}</span>
                        <br />
                        {item.available_coupon === false ? (
                          <span>{getEraseFourDigits(item.price)}원</span>
                        ) : (
                          <del>{getEraseFourDigits(item.price)}원</del>
                        )}
                        <br />
                        <span>
                          {calculateAverageDeliveryTime(
                            item.prev_delivery_times,
                          )}
                        </span>
                        {item.available_coupon !== false && (
                          <span>쿠폰사용가능</span>
                        )}
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

  return (
    <div className="homePage">
      {/* 상단 메뉴 */}
      <HomeMenuComponent />
      {/* 사이드 네비게이션 */}
      <HomeSideComponent />
      {/* 상품 */}
      <HomeProductComponent />
    </div>
  );
}

export default HomePage;
