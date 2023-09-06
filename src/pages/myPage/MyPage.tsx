import React from 'react';
import './dist/MyPage.css';

function MyPage() {
  function UserInfoComponent() {
    return <div>유저 인포</div>;
  }
  //   function OrderSheetInfoComponent() {
  //     return <div>유저 인포</div>;
  //   }

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
        <UserInfoComponent />
        {/* <OrderSheetInfoComponent /> */}
      </div>
    </div>
  );
}

export default MyPage;
