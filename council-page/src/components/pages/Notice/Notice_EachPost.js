import React from "react";
import { Link } from "react-router-dom";

function EachPost(props) {
    const goPost = () => {
        <Link to="/post/${props.postID}"></Link>; //해당 글로 들어가진다
    };
    return (
        <div onClick={goPost}>
            <td>{props.postID}</td>
            <td>{props.title}</td>
            <td>{props.userId}</td>
        </div>
    );
}

export default EachPost;
