import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../../helper/Spinner';

export default function Boards() {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
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
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading ? (
        <Spinner isLoading={loading} />
      ) : (
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
      )}
    </>
  );
}
