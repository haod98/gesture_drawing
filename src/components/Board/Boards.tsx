import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Boards() {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    axios
      .get('/boards', {
        withCredentials: true,
      })
      .then((res) => setBoards(res.data));
  }, []);
  return (
    <div>
      <ul>
        {boards.map((board) => (
          <li key={board['id']}>
            <a href={'/boards/' + board['id']}>{board['name']}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
