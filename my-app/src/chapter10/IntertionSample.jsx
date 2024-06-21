import React,{useState} from "react";
function InterationSample(props){
    const [name, setNames]= useState([

        {id: 1, text:"공주는울지않아"},
        {id: 2, text:"어느한여름"},
        {id: 3, text:"공주는초코를좋아해"},
        {id: 4, text:"깽희"}
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);
    const onChange =e =>setInputText(e.target.value);
    const onClick = () => {
        const nextNames=names.concat({
            id:nextId,
            name:inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }
    const onRemove=id=>{
        const nextNames=names.filter(name=>name.id !=id);
    }
  
    const nameList = name.map((name) => <li id={name.id} onDoubleClick={()=>onpointermove(name.id)}>{name.text}</li>);
  
    return (
        <>
        <input value={inputText} onChange={onChange} />
    <ul>{nameList}</ul>
    </>
    );
  }
  
  export default InterationSample;