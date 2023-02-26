import React from 'react';
import Boards from './components/Board/Boards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Board from './components/Board/Board';

function App() {
  return (
    <div>
      <h1>Gesture Drawing Timer</h1>
      {!!getCookie('access_token') ? <p>Logged In</p> : <Login />}
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Boards />} />
          <Route path={'/boards/:id'} element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function getCookie(name: string): string | null {
  const cookieValue = document.cookie
    .split(';')
    .map((c) => c.trim())
    .find((cookie) => cookie.startsWith(`${name}=`));

  if (!cookieValue) {
    return null;
  }

  return cookieValue.split('=')[1];
}

export default App;
