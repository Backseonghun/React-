import React from "react";

function Book1(props){
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `이 책의 이름은 ${props.name} 이고, 이책은 총 ${props.numOfPage}페이지 입니다.`
            )
        ]
    );
}

export default Book1;