import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Board() {
  const { id } = useParams();
  const [boards, setBoards] = useState([]);
  const [boardOwner, setBoardOwner] = useState('');

  useEffect(() => {
    axios.get(`/boards/${id}`).then((res) => {
      setBoards(res.data);
      setBoardOwner(res.data[0].board_owner.username);
    });
  }, [id]);

  return (
    <div>
      <h2>Board owner: {boardOwner}</h2>
      <ul>
        {boards.map((board, i) => {
          return (
            <li key={i}>
              {<img src={board['media']['images']['400x300']['url']} alt="" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
