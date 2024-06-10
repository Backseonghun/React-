
import { useReducer, useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useRef } from 'react';

const mockTodo= [
  {id:0, isDone:false, content:"스프링공부", createdDate:new Date().getTime(),},
  {id:1, isDone:false, content:"파이썬공부", createdDate:new Date().getTime(),},
  {id:2, isDone:false, content:"자바공부", createdDate:new Date().getTime(),},
]

function reducer(state, action){
  switch(action.type){
    case "CREATE" : {
      return [action.newItem, ...state];
    }
    case "UPDATE" : {
      return state.map((it) => 
          it.id === action.targetId?{...it, isDone:!it.isDone}:it
          )
    }
    case "DELETE" : {
      return state.filter((it)=>
      it.id !== action.targetId)
    }
    default :
      return state;
  }
  return state;
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);
  // const [todo, setTodo] = useState(mockTodo);

  const onCreate = (content) => {
    dispatch({
      type : "CREATE",
      newItem:{
       id: idRef.current,
       content,
       isDone: false,
       createdDate: new Date().getTime(),
      }
    })
    // const newItem = {
    //   id: idRef.current,
    //   content,
    //   isDone: false,
    //   createdDate: new Date().getTime(),
    // };
    // setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    });
    // setTodo(
    //   todo.map((it) => {
    //     if (it.id === targetId) {
    //       return {
    //         ...it,
    //         isDone: !it.isDone,
    //       };
    //     } else {
    //       return it;
    //     }
    //   })
    // );
  };
  const onDelete = (targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })
  //  setTodo(todo.filter((it) => it.id !== targetId));
  };
  
  return (
    <div className="App">
      {/* <div>Header</div> */}
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
