import React from 'react';
import Board from './components/Board/Board';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Login />
      <BrowserRouter>
        <Routes>
          <Route path={'/boards'} element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
