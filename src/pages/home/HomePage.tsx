import React from 'react';
import './dist/HomePage.css';
import HomeMenuComponent from 'component/home/HomeMenuComponent';
import HomeSideComponent from 'component/home/HomeSideComponent';
import HomeProductComponent from 'component/home/HomeProductComponent';

function HomePage() {
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
