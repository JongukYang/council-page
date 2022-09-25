import React from 'react';
import { Link } from 'react-router-dom';
import { EachPostLi } from './styledComponent';


function Communication_EachPost({ title, postID }) {
    const goPost = () => {
        <Link to = "/post/${postID}"></Link> //해당 글로 들어가진다 
        
    };

    return (
            <EachPostLi onClick={goPost}/>
        
        );
}

export default Communication_EachPost;