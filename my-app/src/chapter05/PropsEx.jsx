import React from "react";

function Welcom(props){
    return(
        <h1>안녕, {props.name}</h1>
    );
}
function Board(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <h3>{props.name}</h3>
        </div>
    );
}

function PropsEx(props){
    return(
        <div>
            <div>
                <Welcom name= "소플"/>
                <Welcom name= "치즈볼"/>
                <Welcom name= "멘티스"/>
                <Welcom name= "파이"/>
            </div>
        <div>
        <Board title="title1" author="치즈볼" text="내용1"></Board>
        </div>
    </div>
    );
}
// class ClassWelcom extends React.Component{
//     render(){
//         return <h1>안녕, {this.props.name}</h1>
//     }
// }

export default PropsEx;