import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const Notice_create = () => {
    return (
        <Form>
            <InputGroup controlId="titleInput">
                <Form.Label>제목</Form.Label>
                <Form.Control required type="text" placeholder="" />
            </InputGroup>
            <Form.Group controlId="contentText">
                <Form.Label>내용</Form.Label>
                <Form.Control required as="textarea" rows={20} />
            </Form.Group>
            <Button variant="primary" type="submit">
                등록하기
            </Button>
        </Form>
    );
};

export default Notice_create;
