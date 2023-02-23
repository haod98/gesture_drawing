import React from 'react';
import Boards from './components/Board/Boards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Board from './components/Board/Board';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Login />
      <BrowserRouter>
        <Routes>
          <Route path={'/boards'} element={<Boards />} />
          <Route path={'/boards/:id'} element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
