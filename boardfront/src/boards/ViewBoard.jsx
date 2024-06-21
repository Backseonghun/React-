import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewBoard() {
    const { bno } = useParams();
    const [board, setBoard] = useState({
        title: '',
        content: '',
        author: '',
        hit: 0 
    });

    const loadBoard = async () => {
        const result = await axios.get(`http://localhost:8082/board/${bno}`);
        setBoard(result.data);
    };

    useEffect(() => {
        loadBoard();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">게시글 정보</h2>
                    <div className="card">
                        <div className="card-header">
                            게시글 ID: {board.bno}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>제목: </b> {board.title}
                                </li>
                                <li className="list-group-item">
                                    <b>내용: </b> {board.content}
                                </li>
                                <li className="list-group-item">
                                    <b>작성자: </b> {board.author}
                                </li>
                                <li className="list-group-item">
                                    <b>조회수: </b> {board.hit}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="/">
                        돌아가기
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default ViewBoard;