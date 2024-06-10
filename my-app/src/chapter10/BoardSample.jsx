import React, { useState } from "react";

function BoardSample(props){
    const [boards, setBoards] = useState ([
        {id : 1, name : '공주는울지않아', title : '1640 나이스', content : '꺼억콩'},
        {id : 2, name : '어느한여름', title : '건슬이라 당했따', content : '버프좀요'},
        {id : 3, name : '뚜바는 씩씩해', title : '1620 빠르게좀', content : '난 왜안키워줌?'},
        {id : 4, name : '공주는초코를좋아해', title : '닌 금방했잖', content : 'ㅗ'}
    ]);

    const [inputName, setInputName] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [nextId, setNextId] = useState(5);

    const boardList = boards.map(board =>
        <div key={board.id} onDoubleClick={() => onRemove(board.id)}>
            <div>name : {board.name}</div>
            <div>title : {board.title}</div>
            <div>content : {board.content}</div>
            <hr/>
        </div>
    )


    const onChangeName = e => setInputName(e.target.value);
    const onChangeTitle = e => setInputTitle(e.target.value);
    const onChangeContent = e => setInputContent(e.target.value);

    const onClick = () => {
        const nextBoards = boards.concat({
            id : nextId , 
            name : inputName,
            title : inputTitle,
            content : inputContent
        });
        setNextId(nextId+1);
        setBoards(nextBoards);
        setInputName('');
        setInputTitle('');
        setInputContent('');
    }


    const onRemove = id =>{
        const nextBoards = boards.filter(board => board.id !== id );
        setBoards(nextBoards)
    };

    return (<>
            <input placeholder="Name" value={inputName} onChange={onChangeName} />
            <input placeholder="Title" value={inputTitle} onChange={onChangeTitle} />
            <input placeholder="Content" value={inputContent} onChange={onChangeContent} />
            <button onClick={onClick}>추가</button>
            <ul>{boardList}</ul>
    </>)
}

export default BoardSample;