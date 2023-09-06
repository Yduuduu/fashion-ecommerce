import React from 'react';
import { Outlet } from 'react-router-dom';
import './dist/NavBar.css';
import logo from '../../assets/img/logo_text_white.svg';

// NavBar 컴포넌트 정의
function NavBar() {
  return (
    <>
      <header>
        <div className="navBar">
          <div className="navBar__top-menu">
            <img className="navBar__top-menu__logo" src={logo} alt="logo" />
            <ul>
              <li>스웨트 페스티벌</li>
              <li>F/W 신상</li>
              <li>랭킹</li>
              <li>업데이트</li>
              <li>코디</li>
              <li>세일</li>
              <li>스페셜</li>
              <li>매거진</li>
              <li>TV</li>
              <li>이벤트</li>
              <li>브랜드</li>
            </ul>
          </div>
          <div className="navBar__menu">
            <ul>
              <li>Lv.99 윤뚜뚜</li>
              <li>바로접속 ON</li>
              <li>알림</li>
              <li>마이페이지</li>
              <li>최근 본 상품</li>
              <li>좋아요</li>
              <li>장바구니</li>
              <li>주문배송조회</li>
              <li>고객센터</li>
              <li>래플</li>
              <li>브랜드 구인</li>
              <li>로그아웃</li>
              {/* <li>친구초대 EVENT. 친구 초대하면 5,000원 적립금 지급!</li> */}
            </ul>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default NavBar;
