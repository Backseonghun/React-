import React, { useState } from "react";

const scaleNames = {
    c: "지금",
    f: "당장"
};

function TemperatureInput(props){
    const [temperature, setTemperature] = useState('');

    const handelChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };
    return(
        <fieldset>
            <legend>
                빡침 수치 (단위 : {scaleNames[props.scale]}):</legend>
            <input value={props.temperature} onChange={handelChange}/>
        </fieldset>
    );
}
export default TemperatureInput;