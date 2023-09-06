import NavBar from 'component/inc/NavBar';
import HomePage from 'pages/home/HomePage';
import MyPage from 'pages/myPage/MyPage';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route caseSensitive={true} element={<NavBar />}>
            <Route path="/" caseSensitive={true} element={<HomePage />} />
            <Route path="/mypage" caseSensitive={true} element={<MyPage />} />
          </Route>
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
