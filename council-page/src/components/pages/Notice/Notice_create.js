import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./Notice.css";
import Banner_notice from "./Banner_notice";

const Notice_create = () => {
    return (
        <Form className="create-form">
            <Banner_notice />
            <div className="notice-title">공지사항 등록</div>
            <InputGroup controlId="titleInput">
                <Form.Label className="label">제목</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder=""
                    className="create-box"
                />
            </InputGroup>
            <Form.Group controlId="contentText">
                <Form.Label className="label">내용</Form.Label>
                <Form.Control
                    required
                    as="textarea"
                    rows={20}
                    className="create-box"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                등록하기
            </Button>
        </Form>
    );
};

export default Notice_create;
