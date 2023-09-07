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
import { getFormattedDate } from '../../module/Util';
import { coupons } from 'data/Coupon';

function MyPage() {
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
            <h3 className="myPage-rewardInfo__wrap__value">{item.value}</h3>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="myPage">
      <div className="myPage__title">
        <div className="myPage__top">
          <h1 className="myPage__top__head">My Page</h1>
          <ul className="myPage__top__sub">
            <li>장바구니</li>
            <li>고객센터</li>
            <li>로그아웃</li>
          </ul>
        </div>
        <div className="myPage__info-wrap">
          <UserInfoComponent />
          <RewardInfoComponent />
        </div>
      </div>
    </div>
  );
}

export default MyPage;
