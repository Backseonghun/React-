import React, { useState } from "react";
function BoardItemList(props){
    const [boards, setBoards]=useState([
    {
        id:'1', name:'공주는울지않아', title:"1640 축하드립니다."
    },
    {
        id:'2', name:'어느한여름', title:"버프받기전까지 안올림"
    },
    {
        id:'3', name:'뚜바는씩씩해', title:"얘부터 키움 수고요"
    }
]);
const [inputName, setInputName] = useState("");
const [inputTitle, setInputTitle] = useState("");
const [inputContent, setInputContent] = useState("");
const [nextId, setNextId] = useState(3);

const onChangeName = (e) => setInputName(e.target.inputName);

const onChangeTitle = (e) => setInputTitle(e.target.inputTitle);

const onChangeContent = (e) => setInputContent(e.target.inputContent);

const onClick = () => {
  const nextBoards = boards.concat({
    id: nextId,
    name: inputName,
    title: inputTitle,
    content: inputContent,
  });

  setNextId(nextId + 1);
  setBoards(nextBoards);
  setInputName("");
  setInputTitle("");
  setInputContent("");
};
const onRemove = (id) => {
  const nextBoards = boards.filter((board) => board.id !== id);
  setBoards(nextBoards);
};

const boardList = boards.map((board) => (
  <tr key={board.id} onDoubleClick={() => onRemove(board.id)}>
    <td>{board.name}</td>
    <td>{board.title}</td>
    <td>{board.content}</td>
    <hr></hr>
  </tr>
));

return (
  <>
    <div>
      name: <input value={inputName} onChange={onChangeName} />
    </div>
    <div>
      title: <input value={inputTitle} onChange={onChangeTitle} />
    </div>
    <div>
      content: <input value={inputContent} onChange={onChangeContent} />
    </div>
    <div>
      <button onClick={onClick}>추가</button>
    </div>
    <div>{boardList}</div>
    <table border="1">
      <tr>
        <th>name</th>
        <th>title</th>
        <th>content</th>
      </tr>
      {boardList}
    </table>
  </>
);
}

export default BoardItemList;