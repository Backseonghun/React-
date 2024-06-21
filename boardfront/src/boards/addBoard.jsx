import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddBoard(){
    let navigate = useNavigate()
    const [board, setBoard] = useState({
        title: '',
        content: '',
        author: '',
    });

    const { title, content, author } = board;

    const onInputChange = (e) => {
        setBoard({
            ...board,
            [e.target.name]: e.target.value,
        });
    };
    
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8082/addBoard`,board);
        navigate('/');
    };


    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">게시판 작성</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            제목
                        </label>
                        <input onChange={onInputChange} value={title} type="text" id="title" className="form-control" placeholder="제목" name="title" />
                        <div style={{ marginBottom: '1rem' }}></div>
                        <label htmlFor="content" className="form-label">
                            내용
                        </label>
                        <input onChange={onInputChange} value={content} type="text" id="content" className="form-control" placeholder="게시글" name="content" />
                        <div style={{ marginBottom: '1rem' }}></div>
                        <label htmlFor="email" className="form-label">
                            작성자
                        </label>
                        <input onChange={onInputChange} value={author} type="text" id="author" className="form-control" placeholder="작성자" name="author" />
                    </div>
                    <div className="mb-3 text-center">
                        <button type="submit" className="btn btn-outline-primary px-3 mx-2">완료</button>
                        <Link to="/" type="submit" className="btn btn-outline-danger px-3 mx-2">취소</Link>
                    </div>
                </form>

            </div>
        </div>

    )
}
export default AddBoard;