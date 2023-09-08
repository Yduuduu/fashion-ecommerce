import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './dist/NavBar.css';
import logo from '../../assets/img/logo_text_white.svg';

// NavBar 컴포넌트 정의
function NavBar() {
  return (
    <>
      <header>
        <div className="navBar">
          <div className="navBar__top-menu">
            <Link to="/">
              <img className="navBar__top-menu__logo" src={logo} alt="logo" />
            </Link>
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
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default NavBar;
