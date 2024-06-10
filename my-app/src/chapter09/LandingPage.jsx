import Toolbar from "./Toolbar";
import React,{useState} from "react";

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onClickLogin = () =>{
        setIsLoggedIn(true);
    };
    const onClickLogout = () =>{
        setIsLoggedIn(false);
    };
    return(
        <div>
            <Toolbar
                isLoggedIn ={isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div style={{padding : 16}}>소플과 어쩌구 저쩌구</div>
        </div>
    )
}
export default LandingPage;