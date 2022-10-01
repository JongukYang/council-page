import React from "react";
import { Link } from "react-router-dom";
import "./Notice.css";
import { EachPostdiv, EachPostTd } from "./styledComponenet";

function EachPost(props) {
    const goPost = () => {
        <Link to="/post/${props.postID}"></Link>; //해당 글로 들어가진다
    };
    return (
        <EachPostdiv onClick={goPost}>
            <EachPostTd>{props.postID}</EachPostTd>
            <EachPostTd>{props.title}</EachPostTd>
            <EachPostTd>{props.userId}</EachPostTd>
            <EachPostTd>작성자</EachPostTd>
            <EachPostTd>작성일</EachPostTd>
            <EachPostTd>조회수</EachPostTd>
        </EachPostdiv>
    );
}

export default EachPost;
