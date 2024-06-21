import React, { useState } from "react";

const students=[

    {name:"공주는울지않아"},
    {name:"어느한여름"},
    {name:"공주는초코를좋아해"},
    {name:"깽희"}
];
function StudentItemList(props){
    return (
        <ul>
          {students.map((student, index) => {
            return <li key={index}>{student.name}</li>;
          })}
        </ul>
      );
    }
export default StudentItemList;