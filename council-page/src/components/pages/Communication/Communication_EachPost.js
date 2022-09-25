import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EachPostLi } from './styledComponent';


function Communication_EachPost({ title, postID }) {
    const navigate = useNavigate();
    const goPost = () => {
        navigate(`${'/post/' + postID}`); //해당 글로 들어가진다 
    };

    return (
        <EachPostLi onClick={goPost}/>
        
        );
}

export default Communication_EachPost;