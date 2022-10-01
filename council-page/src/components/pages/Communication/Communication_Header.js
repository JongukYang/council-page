import React from "react";
import { Link } from "react-router-dom";
import "./styledComponent";
import Button from "react-bootstrap/Button";

const ComHeader = (props) => {
    const { headersName, children } = props;

    return (
        <div className="com-header">
            <Link to="/communication/create">
                <Button variant="outline-success" align="right">
                    게시글 작성
                </Button>{" "}
            </Link>
        </div>
    );
};

export default ComHeader;
