import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import MainPage from './component/page/MainPage';

const MainTitleText = styled.p`
  font-size : 24px;
  font-weight : bold;
  text-align : center; `;

function App() {
  return (
  <BrowserRouter>
    <MainTitleText> 소플의 미니 블로그</MainTitleText>
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="post-write" element={<PostWritePage />} />
      <Route path="post/:postId" element={<PostViewPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;