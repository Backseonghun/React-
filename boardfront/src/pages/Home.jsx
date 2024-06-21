import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [boards, setBoards] = useState([]);

  const loadBoard = async () => {
    const result = await axios.get("http://localhost:8082/board");
    setBoards(result.data);
    // console.log(result);
  };

  const deleteBoard = async (bno) => {
    if(window.confirm(`${bno}번 게시물을 삭제하시겠습니까?`)){
      await axios.delete(`http://localhost:8082/board/${bno}`);
      loadBoard();
    }
  };

  useEffect(() => {
    loadBoard();
  }, []);

  return (
    <div className="container">
      <table className="table border shadow my-4">
        <thead>
          <tr>
            <th scope="col">bno</th>
            <th scope="col">title</th>
            <th scope="col">content</th>
            <th scope="col">author</th>
            <th scope="col">hit</th>
            <th scope="col">createTime</th>
          </tr>
        </thead>
        {boards.map((boards, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <th>{boards.title}</th>
            <th>{boards.content}</th>
            <th>{boards.author}</th>
            <th>{boards.hit}</th>
            <th>{boards.createTime}</th>
            <th>
              <Link to={`/viewboard/${boards.bno}`} className="btn btn-outline-secondary mx-2">보기</Link>
              <Link to={`/editboard/${boards.bno}`} className="btn btn-outline-warning mx-2">수정</Link>
              <button onClick={() => deleteBoard(boards.bno)} className="btn btn-outline-danger mx-2">삭제</button>
            </th>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Home;