import React, { useState } from "react";import FancyBorder from "./FancyBorder"

function Dialog(props){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">{props.message}</p>
            {props.children}
        </FancyBorder>
    )

}

function SignUpDialog(props){
    const [nickname, setNickname] = useState('');
    const handleChange = (event) => {
        setNickname(event.target.value);
    }
    const handleSignup = () => {
        alert( `${nickname}님 하이`);
    }

    return (
        <Dialog
        title ="프로그램 이름" message = "닉네임 입력하기">
            <input value={nickname} onChange={handleChange}/>
            <button onClick={handleSignup}>가입하기</button>
        </Dialog>
    )
}
function WelcomDialog(props){
    return (
        <div>
        <Dialog title="어서오세요" message="안반갑지롱"/>        
        <Dialog title="어서올거임?" message="나가렴"/> 
        </div>
    );
}

export default WelcomDialog;