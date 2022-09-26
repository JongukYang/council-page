import React from "react";
import { Link } from "react-router-dom";
import { EachPostdiv, EachPostTd } from "./styledComponent";

function Communication_EachPost(props) {
    const goPost = () => {
        <Link to="/post/${props.postID}"></Link>; //해당 글로 들어가진다
    };

    return (
        <EachPostdiv onClick={goPost}>
            <EachPostTd>{props.postID}</EachPostTd>
            <EachPostTd>{props.body}</EachPostTd>
            <EachPostTd>{props.title}</EachPostTd>
        </EachPostdiv>
        // <EachPostTd>{props.createdAt}</EachPostTd> 이거도 있으면 좋을듯
    );
}

export default Communication_EachPost;
