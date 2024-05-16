import React from "react";
import Student from "./Student";

function StudentList(props){
    return(
        <div>
            <Student sno={1} name="홍기동" major="컴퓨터공학" />
            <Student sno={2} name="박성언" major="생명공학" />
            <Student sno={3} name="뀨잉로아콘" major="응용수학" />
        </div>
    );
}

export default StudentList;