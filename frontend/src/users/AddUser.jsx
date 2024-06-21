import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddUser() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
    });
  
    const { name, username, email } = user;
    const onInputChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    };
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8082/user", user);
      navigate("/");
    };
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">회원 가입</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  이름
                </label>
                <input
                  onChange={onInputChange}
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="이름 입력"
                  name="name"
                />
                <label htmlFor="name" className="form-label">
                  별명
                </label>
                <input
                  onChange={onInputChange}
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="별명 입력"
                  name="username"
                />
                <label htmlFor="name" className="form-label">
                  이메일
                </label>
                <input
                  onChange={onInputChange}
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="이메일 입력"
                  name="email"
                />
              </div>
              <div className="mb-3 text-center">
                <button
                  type="submit"
                  className="btn btn-outline-primary px-3 mx-2"
                >
                  가입
                </button>
                <Link
                  to="/"
                  type="submit"
                  className="btn btn-outline-danger px-3 mx-2"
                >
                  취소
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddUser;
  