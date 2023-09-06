import NavBar from 'component/inc/NavBar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" caseSensitive={true} element={<NavBar />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
