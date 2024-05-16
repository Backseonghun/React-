import React from "react";

function Student(props){
    return(
        <div>
            <h2>{`학번: ${props.sno}, 이름: ${props.name}, 전공: ${props.major} `}</h2>
        </div>
    );
}

export default Student;