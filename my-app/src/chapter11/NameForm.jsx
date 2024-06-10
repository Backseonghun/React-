import React, { useReducer, useState } from "react";

function reducer(state, action){
    return{
        ...state,
        [action.name]:action.value
    }
}

function NameForm(props){
    // const [value, setValue] =useState('');
    // const [message, setMessage]=useState('');
    const [state, dispatch] =useReducer(reducer,{
        name:'', message:'',fruit:''
    });
    const {name, message, fruit}=state;

    const handelChange =e => {
        dispatch(e.target);
    }
    const handleSubmit = (event) =>{
        alert(`이름: ${name}, 메세지:${message}, 좋아하는 과일 : ${fruit}`);
        event.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                이름:
                <input type="text" name="name" value={name} onChange={handelChange}/>
            </div>
            <div>
                요청사항 : 
                <textarea name="message" value={message} onChange={handelChange}/>
            </div>
            <div>
                좋아하는 과일:
                <select name={fruit} value={fruit} onChange={handelChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option>
                </select>
            </div>
            <div><button type="submit">제출</button></div>
        </form>
    ); 
}
export default NameForm;