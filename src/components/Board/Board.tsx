import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Board() {
  const { id } = useParams();
  const [board, setBoard] = useState([]);
  useEffect(() => {
    axios.get(`/boards/${id}`).then((res) => {
      setBoard(res.data);
      console.log(board);
    });
  });
  return <h1>Single Board</h1>;
}
