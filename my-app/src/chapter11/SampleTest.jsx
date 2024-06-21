import React, { useReducer, useState } from "react";

function reducer(state, action){
    return{
        ...state,
        [action.name]:action.value
    }
}

function SampleTest(props){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const handelChangeName = (event) => {
      setName(event.target.value);
    };
    const handelChangeGender = (event) => {
      setGender(event.target.value);
    };
    const handleSubmit = (event) => {
      alert(`이름 : ${name}, 성별 : ${gender}`);
      event.preventDefault();
    };
    return (
      <form onSubmit={handleSubmit}>
        <label>
          이름:
          <input type="text" value={name} onChange={handelChangeName} />
        </label><br></br>
        <label>
          성별:
          <select value={gender} onChange={handelChangeGender}>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </label><br></br>
        <button type="submit">제출</button>
      </form>
    );
  }
  
export default SampleTest;