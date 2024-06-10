import React from "react";

const style={
    wrapper : {
        padding : 16,
        display : "flex",
        flexDirection : "row",
        borderBottom : "1px solid grey",
    },
    greeting :{
        marginRight : 8,
    },
};
function Toolbar(props){
    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    return(
        <div style={style.wrapper}>
            {isLoggedIn && <span style={style.greeting}>환영한다</span>}
            {isLoggedIn ? (<button onClick={onClickLogout}>넌 나가라</button>)
            : (<button onClick={onClickLogin}>어서오고</button>)}
        </div>
    )
}
export default Toolbar;