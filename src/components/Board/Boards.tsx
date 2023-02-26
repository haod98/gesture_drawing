import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Boards() {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    axios
      .get('/boards', {
        withCredentials: true,
      })
      .then((res) => {
        setBoards(res.data);
      })
      .catch((e) => {
        console.warn(e);
      });
  }, []);
  return (
    <div>
      <ul>
        {boards.map((board) => (
          <li key={board['id']}>
            <Link
              to={encodeURI(
                `/boards/${board['id']}?board_name=${board['name']}`
              )}
            >
              {board['name']}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
