import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Board() {
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
          <a href={'boards/' + board['id']} key={board['id']}>
            <li>{board['name']}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
