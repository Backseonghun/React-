
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './conforment/NewsList';
import { useCallback } from 'react';
import Categories from './conforment/Categories';



function App() {
  const [category, setCategory] = useState("all");
  const onSelect=useCallback(category=> setCategory(category),[]);
  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  )
};

export default App;
