import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import Spinner from '../../helper/Spinner';
import Timer from '../timer/Timer';

export default function Board() {
  const { id } = useParams();
  const [boards, setBoards] = useState([]);
  const [boardOwner, setBoardOwner] = useState('');
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const boardName = searchParams.get('board_name');

  useEffect(() => {
    axios
      .get(`/boards/${id}`)
      .then((res) => {
        setBoards(res.data);
        setBoardOwner(res.data[0].board_owner.username);
        console.log(res.data[0]);
      })
      .catch((e) => {
        console.warn(e);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner isLoading={loading} />
      ) : (
        <div>
          <h2>Board owner: {boardOwner}</h2>
          <p>{boardName}</p>
          <Timer />
          <ul className="grid grid-cols-4 gap-3 ">
            {boards.map((board, i) => {
              return (
                <li key={i}>
                  {
                    <img
                      src={board['media']['images']['400x300']['url']}
                      alt=""
                    />
                  }
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
