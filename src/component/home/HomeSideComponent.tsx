import React, { useState } from 'react';
import '../../pages/home/dist/HomePage.css';
import { brandList, itemList } from 'data/SideBarItem';
import icon_arrow_right from '../../assets/img/icon_arrow_right.svg';
import icon_call from '../../assets/img/icon_call.svg';
import icon_heart from '../../assets/img/icon_heart.svg';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

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
                <img src={icon_arrow_right} alt="arrow-right" />
              </div>
            );
          })}
        </>
      ) : (
        <>
          {brandList.map((item, idx) => {
            return (
              <div className="homePage-side__brand" key={idx}>
                <div className="homePage-side__brand__wrap">
                  <span>{item.name}</span>
                  <br />
                  <span>{item.sub}</span>
                </div>
                <img src={icon_heart} alt="img" />
              </div>
            );
          })}
        </>
      )}
      <div className="homePage-side__bottom">
        <div className="homePage-side__bottom__call">
          <h4>
            <img src={icon_call} alt="img" />
            1500-1234
          </h4>
          <span>오전9시~오후6시 운영 / 토,일,휴일 휴무</span>
        </div>
        <p className="homePage-side__bottom__text">
          <span>
            - 전화 전 <Link to="/">자주 묻는 질문</Link>을 확인하세요.
          </span>
          <br />
          <span>
            - <Link to="/">1:1문의</Link>를 통해서도 상담이 가능합니다.
          </span>
          <br />
          <span>- 상품 문의는 각 상품 Q&A를 이용하세요.</span>
        </p>
        <ul className="homePage-side__bottom__button">
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <li>회원후기</li>
              </Grid>
              <Grid item xs={4}>
                <li>회원혜택</li>
              </Grid>
              <Grid item xs={4}>
                <li>공지사항</li>
              </Grid>
            </Grid>
          </Grid>
        </ul>
      </div>
    </aside>
  );
}
export default HomeSideComponent;
