import React from 'react';
import './dist/MyPage.css';
import { useSelector } from 'react-redux';
import {
  nickname,
  level,
  lank,
  mileage,
  point,
} from '../../store/userInfoSlice';
import profile from '../../assets/img/profile.png';
import icon_coin from '../../assets/img/icon_coin.svg';
import icon_money from '../../assets/img/icon_money.svg';
import icon_pen from '../../assets/img/icon_pen.svg';
import icon_ticket from '../../assets/img/icon_ticket.svg';
import {
  getEraseFourDigits,
  getFormattedDate,
  getDateDiff,
  getYearMonthDayTime,
} from '../../module/Util';
import { coupons } from 'data/Coupon';

function MyPage() {
  // 주문내역 조회 테이블 헤더
  const orderHeadList = [
    {
      title: '상품정보',
    },
    {
      title: '주문일자',
    },
    {
      title: '주문번호',
    },
    {
      title: '주문금액(수량)',
    },
    {
      title: '주문 상태',
    },
  ];
  // 장바구니 테이블 헤더
  const cartList = [
    {
      title: '상품정보',
    },
    {
      title: '상품금액',
    },
    {
      title: '수량',
    },
    {
      title: '주문금액',
    },
    {
      title: '배송 형태/배송비',
    },
  ];
  // 쿠폰 테이블 헤더
  const couponList = [
    {
      title: '쿠폰번호',
    },
    {
      title: '쿠폰명',
    },
    {
      title: '할인금액',
    },
    {
      title: '적용 범위',
    },
    {
      title: '유효기간',
    },
  ];

  // 회원정보 컴포넌트
  function UserInfoComponent() {
    const _nickname = useSelector(nickname);
    const _level = useSelector(level);
    const _lank = useSelector(lank);
    return (
      <div className="myPage-userInfo">
        <img className="myPage-userInfo__profile" src={profile} alt="profile" />
        <div className="myPage-userInfo__text">
          <h2 className="myPage-userInfo__text__nick-name">
            {_nickname}
            <span>회원정보변경</span>
          </h2>
          <h3 className="myPage-userInfo__text__lank">
            Lv.{_level} {_lank}
            <span>가입일: {getFormattedDate()}</span>
          </h3>
          <h4 className="myPage-userInfo__text__point-info">
            {_nickname}님 다음 등급인 다이아몬드까지 99,999점 남았습니다.
            <span>등급혜택 &gt;</span>
          </h4>
        </div>
      </div>
    );
  }
  // 리워드 컴포넌트
  function RewardInfoComponent() {
    const _mileage = useSelector(mileage);
    const _point = useSelector(point);
    const rewardItemList = [
      {
        img: icon_coin,
        name: '적립금',
        value: _mileage,
      },
      {
        img: icon_money,
        name: '포인트',
        value: _point,
      },
      {
        img: icon_ticket,
        name: '쿠폰',
        value: coupons.length,
      },
      {
        img: icon_pen,
        name: '후기작성',
        value: 0,
      },
    ];
    return (
      <div className="myPage-rewardInfo">
        {rewardItemList.map((item, index) => (
          <div className="myPage-rewardInfo__wrap" key={index}>
            <img
              className="myPage-rewardInfo__wrap__img"
              src={item.img}
              alt={item.img}
            />
            <h3 className="myPage-rewardInfo__wrap__name">{item.name} &gt;</h3>
            <h3 className="myPage-rewardInfo__wrap__value">
              {getEraseFourDigits(item.value)}
            </h3>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="myPage">
      <div className="myPage-title">
        <div className="myPage-title__top">
          <h1 className="myPage-title__top__head">My Page</h1>
          <ul className="myPage-title__top__sub">
            <li>장바구니</li>
            <li>고객센터</li>
            <li>로그아웃</li>
          </ul>
        </div>
        <div className="myPage-title__info-wrap">
          <UserInfoComponent />
          <RewardInfoComponent />
        </div>
      </div>
      <div className="myPage-content">
        <nav className="myPage-side">
          <h3 className="myPage-side__baro">바로접속 ON</h3>
          <h2 className="myPage-side__head">나의 쇼핑 활동</h2>
          <ul>
            <li>주문 내역 조회</li>
            <li>구매후기</li>
            <li>래플 응모내역</li>
            <li>상품문의</li>
            <li>1:1문의</li>
            <li>최근 본 상품</li>
            <li>좋아요</li>
            <li>나의 맞춤 정보</li>
            <li>매장 결제 내역</li>
            <li>회원 혜택</li>
          </ul>
          <h2 className="myPage-side__head">커뮤니티</h2>
          <ul>
            <li>게시물/스크랩/댓글</li>
          </ul>
        </nav>
        {/* ----- 주문내역 조회 ----- */}
        <div className="myPage-box">
          <h1 className="myPage-box__head">주문내역 조회</h1>
          <table className="myPage-box__table">
            <thead className="myPage-box__table__head">
              <tr>
                {orderHeadList.map((item, idx) => {
                  return <th key={idx}>{item.title}</th>;
                })}
              </tr>
            </thead>
            {/* <tbody className="myPage-box__table__body">
              {orderHeadList.map((item, idx) => {
                return <td key={idx}>{item.title}</td>;
              })}
            </tbody> */}
          </table>
          <span className="myPage-box__empty-text">
            주문내역이 비어있습니다.
          </span>
        </div>
        {/* ----- 장바구니 ----- */}
        <div className="myPage-box">
          <h1 className="myPage-box__head">장바구니</h1>
          <table className="myPage-box__table">
            <thead className="myPage-box__table__head">
              <tr>
                {cartList.map((item, idx) => {
                  return <th key={idx}>{item.title}</th>;
                })}
              </tr>
            </thead>
            {/* <tbody className="myPage-box__table__body">
              {orderHeadList.map((item, idx) => {
                return <td key={idx}>{item.title}</td>;
              })}
            </tbody> */}
          </table>
          <span className="myPage-box__empty-text">
            장바구니에 담긴 상품이 없습니다.
          </span>
        </div>
        {/* ----- 쿠폰 ----- */}
        <div className="myPage-box">
          <h1 className="myPage-box__head">
            쿠폰&nbsp;
            <span className="myPage-box__sub">{coupons.length}장</span>
          </h1>
          <table className="myPage-box__table">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="myPage-box__table__head">
              <tr>
                {couponList.map((item, idx) => {
                  return <th key={idx}>{item.title}</th>;
                })}
              </tr>
            </thead>
            <tbody className="myPage-box__table__body">
              {coupons.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{item.coupon_no}</td>
                    <td>{item.title}</td>
                    <td>
                      {/* 비율 할인 */}
                      {item.discount_rate !== undefined &&
                        `${item.discount_rate}%`}
                      {/* 정액 할인 */}
                      {item.discount_amount !== undefined &&
                        `${getEraseFourDigits(item.discount_amount)}원`}
                      {item.min_order_amount !== undefined && (
                        <span>
                          <br />
                          {`${getEraseFourDigits(
                            item.min_order_amount,
                          )}원 이상 구매 시`}
                        </span>
                      )}
                    </td>
                    <td>일부 상품</td>
                    <td>
                      {getYearMonthDayTime(item.created_date)} ~{' '}
                      {getYearMonthDayTime(item.expiration_date)}.
                      <span>
                        <br />
                        {`${getDateDiff(item.expiration_date)}일 남음`}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {coupons.length < 1 && (
            <span className="myPage-box__empty-text">
              사용가능한 쿠폰이 없습니다.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyPage;
