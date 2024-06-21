import React from "react";

function BoilingVerdict(props){
    if(props.celsius >= 100 ){
        return <p>하 내 속이 터진다</p>
    }
    return <p>하 내 속이 안터진다</p>
}
export default BoilingVerdict;
