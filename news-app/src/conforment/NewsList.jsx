import React from "react";
import styled from 'styled-components';
import NewsItem from "./NewsItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const NewsListBlock=styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;
// const sampleArticle={
//     title:"제목",
//     description:"내용",
//     url : "https://google.com",
//     urlToImage: "https://via.placeholder.com/106"
// }
const NewsList=({category})=>{
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const fetchData=async () =>{
            setLoading(true);
            try{
                const query=category==='all'?'' : `&category=${category}`;
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7c6a15f77e054432ab7ff07b21b5def3`)
                setArticles(response.data.articles);
            }catch(e){
                console.error(e);
            }
            setLoading(false);
        };
        fetchData();
    },[category]);

    if(loading){
        return <NewsListBlock>로딩 중 ...</NewsListBlock>
    }
    if(!articles){
        console.log("aaa")
        return null;
    }
    return(
        <NewsListBlock>
            {articles.map(article=>(
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
};
export default NewsList;