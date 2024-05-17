import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name={"담임쌤"} comment={"상준씨 수업들어요."} />
            <Comment name={"유명한탐정"} comment={"수업개못하니깐 잠이나자야지"}/>
            <Comment name={"서상준"} comment={"나는 영아일랜드 대표다!"}/>
        </div>
    )
}
export default CommentList;