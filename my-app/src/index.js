import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library1 from './chapter03/Library1';
import StudentList from './chapter03/StudentList';
import ConfirmDialog from './chapter04/ConfirmDialog';
import Clock from './chapter04/Clock';
import PropsEx from './chapter05/PropsEx';
import CommentList from './chapter05/CommentList';
import BoardList from './chapter05/BoardList';
import NotificationList from './chapter06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval( () => {
  root.render(
    <React.StrictMode>
      {/* <App /> */}
      {/* <Library1/> */}
      {/* <StudentList/> */}
      {/* <ConfirmDialog /> */}
      {/* <Clock /> */}
      {/* <PropsEx /> */}
      {/* <CommentList /> */}
      {/* <BoardList /> */}
      <NotificationList />
    </React.StrictMode>
  );
// }, 1000)
//setInterval 함수를 사용해서, 끝에 "}, 1000)"이렇게 하면서 화면이 1초마다 다시 부르도록 함.


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();