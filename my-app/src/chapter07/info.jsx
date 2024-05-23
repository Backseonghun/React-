import React, { useEffect, useReducer, useState } from "react";

function reducer(state, action){
  return{
    ...state,
    [action.name]:action.value
  };
}

function Info() {
    const [state, dispatch]=useReducer(reducer,{
      name:'',
      nickname:''
    });
    const {name, nickname, addr} =state;
    const onChange = e =>{dispatch(e.target);};

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange}/>
        <input name="addr" value={addr} onChange={onChange}/>
      </div>
      <div>
        <div>
          <b>이름 :</b>{name}</div>
      </div>
      <div>
        <div>
          <b>닉네임 :</b>{nickname}</div>
      </div>
      <div>
        <div>
          <b>주소 :</b>{addr}</div>
      </div>
    </div>
  )
  // const [name, setName] = useState("");
  // const [nickname, setNickname] = useState("");

  // useEffect( () => {
  //   console.log('랜더링 완료');
  //   console.log({name, nickname});
  //   return() =>{
  //     console.log('cleanup');
  //     console.log(name);
  //   }
  // },[name]);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };
}

export default Info;