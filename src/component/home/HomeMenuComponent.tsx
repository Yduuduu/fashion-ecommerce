import React from 'react';
import '../../pages/home/dist/HomePage.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { nickname, level } from '../../store/userInfoSlice';

// 상단 메뉴 컴포넌트
function HomeMenuComponent() {
  const _nickname = useSelector(nickname);
  const _level = useSelector(level);

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
          <Link to="/">친구초대 EVENT. 친구 초대하면 5,000원 적립금 지급!</Link>
        </li>
      </ul>
    </div>
  );
}
export default HomeMenuComponent;
