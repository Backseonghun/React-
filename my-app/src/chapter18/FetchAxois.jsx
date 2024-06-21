import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchAxois(props){
    const [temp, setTemp] = useState(true);
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [isReady, setReady] = useState(false);

    const url="http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=d9070ac6d07fab60c68b0192691cb753";
    const url1=''
    useEffect(()=>{
            axios.get(url)
            .then(response =>{
                console.log(response.data);
                // setTemp(response.data.main.temp);
                // setDesc(response.data.weather[0].main);
                // setIcon(response.data.weather[0].icon);
                // setReady(true);
            })
            .catch(err =>console.error(err));

        // fetch(url)
        // .then(result => result.json())
        // .then(jsonresult =>{
        //     setTemp(jsonresult.main.temp);
        //     setDesc(jsonresult.weather[0].main);
        //     setIcon(jsonresult.weather[0].icon);
        //     setReady(true);
        // })
        // .catch(err => console.error(err));

    })
    return(
        <div>
            {isReady &&
            <div>
                {/* <p>Temperature: {temp} ºC</p>
                <p>Description: {desc}</p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt ="Weather icon"/> */}
            </div>
            }
        </div>
    )
};
export default FetchAxois;