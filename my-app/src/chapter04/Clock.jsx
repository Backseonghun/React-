import React from "react";

function Clock(props){
    return(
        <div>
            <h1>안녕, 리액트</h1>
            <H2>현재 시간 : {new Date().toLocaleTimeString()}</H2>
        </div>
    )
}
export default Clock;