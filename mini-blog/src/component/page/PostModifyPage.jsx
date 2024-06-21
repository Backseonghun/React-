import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { usePosts } from "../../context/PostContext";

const Wrapper = styled.div`
  padding: 1px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostModifyPage = (props) => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const { posts, setPosts } = usePosts();
    const post = posts.find((item) => item.id === parseInt(postId));

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSubmit = () => {
        const updatedPost = {
            ...post,
            title,
            content,
        };

        const updatedPosts = posts.map((item) =>
            item.id === parseInt(postId) ? updatedPost : item
        );
        setPosts(updatedPosts);
        navigate(`/post/${postId}`);
    };

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <TextInput
                    height={240}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />
                <Button title="글 수정하기" onClick={handleSubmit} />
            </Container>
        </Wrapper>
    );
}

export default PostModifyPage;
