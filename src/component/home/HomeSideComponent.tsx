import React, { useState } from 'react';
import '../../pages/home/dist/HomePage.css';
import { brandList, itemList } from 'data/SideBarItem';
import icon_arrow_right from '../../assets/img/icon_arrow_right.svg';

// 사이드 네비게이션 컴포넌트
function HomeSideComponent() {
  const sideList = [{ name: '품목' }, { name: '브랜드' }];
  const [sideIndex, setSideIndex] = useState(0);
  const sideClickHandler = (idx: number) => {
    setSideIndex(idx);
  };

  return (
    <aside className="homePage-side">
      <ul>
        {sideList.map((item, idx) => {
          return (
            <li
              key={idx}
              className={
                sideIndex === idx
                  ? 'homePage-side__head-item__action'
                  : 'homePage-side__head-item'
              }
              style={
                sideIndex === 0
                  ? { borderLeft: '1px solid var(--subblue-light)' }
                  : { borderRight: '1px solid var(--subblue-light)' }
              }
              onClick={() => sideClickHandler(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sideClickHandler(idx);
                }
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      {sideIndex === 0 ? (
        <>
          {itemList.map((item, idx) => {
            return (
              <>
                <div className="homePage-side__item" key={idx}>
                  <span>{item.name}</span>
                  <span>{item.sub}</span>
                  <img src={icon_arrow_right} alt="arrow-right" />
                </div>
              </>
            );
          })}
        </>
      ) : (
        <>
          {brandList.map((item, idx) => {
            return (
              <div className="homePage-side__brand" key={idx}>
                <span>{item.name}</span>
                <br />
                <span>{item.sub}</span>
              </div>
            );
          })}
        </>
      )}
      <div className="homePage-side__bottom">
        <div className="homePage-side__bottom__call">
          <span>1522-0000</span>
          <span>오전9시~오후6시 운영 / 토,일,휴일 휴무</span>
        </div>
        <p className="homePage-side__bottom__text">
          <span>- 전화 전 자주 묻는 질문을 확인하세요.</span>
          <span>- 1:1문의를 통해서도 상담이 가능합니다.</span>
          <span>- 상품 문의는 각 상품 Q&A를 이용하세요.</span>
        </p>
        <ul className="homePage-side__bottom__button">
          <li>회원후기</li>
          <li>회원혜택</li>
          <li>공지사항</li>
        </ul>
      </div>
    </aside>
  );
}
export default HomeSideComponent;
