import React, { useState } from 'react';
import '../../pages/home/dist/HomePage.css';
import { brandList, itemList } from 'data/SideBarItem';

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
              <div className="homePage-side__item" key={idx}>
                <span>{item.name}</span>
                <span>{item.sub}</span>
              </div>
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
    </aside>
  );
}
export default HomeSideComponent;
