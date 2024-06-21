import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList=({ todo, onUpdate, onDelete }) =>{
    const [search, setSearch] = useState(""); 
    const onChangeSearch = (e) => { // 
        setSearch(e.target.value);
    };
    
    const getSearchResult = () => {
        return search === ""
          ? todo
          : todo.filter((it) =>
              it.content.toLowerCase().includes(search.toLowerCase())
            );
    };
    const analyzeTodo=(()=>{
        console.log("analyzeTodo() 호출")
        const totalCount=todo.length;
        const doneCount=todo.filter((it)=>it.isDone).length;
        const notDonCount = totalCount-doneCount;
        return{
          totalCount,
          doneCount,
          notDonCount
        };
      },[todo]);
      const {totalCount, doneCount, notDonCount}=analyzeTodo; //analyzeTodo();
    return(
        <div className="TodoList">
            <h4>Todo List 🔍</h4>
            <div>
                <div>총 개수 : {totalCount}</div>
                <div>완료된 할 일 갯수 : {doneCount}</div>
                <div>완료하지 않은 일 : {notDonCount}</div>
            </div>
            <input
                value={search} 
                onChange={onChangeSearch} 
                className="searchbar" placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                {getSearchResult().map((it) => ( 
                    <TodoItem 
                        key={it.id} {...it} 
                        onUpdate={onUpdate}
                        onDelete={onDelete} />
                ))}
                {/* {todo.map((it) => (
                    
                     <TodoItem key={it.id} {...it} />
                ))} */}
            </div>
        </div>
    );
}
export default TodoList;