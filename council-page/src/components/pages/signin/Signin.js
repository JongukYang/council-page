import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./signin.css";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Login() {
    // 토큰 저장
    // const { data } = await postLogin(body);
    // console.log("postLogin ", data);
    // set(tokenState, {
    //     accessToken: data.access_token,
    //     refreshToken: data.refresh_token
    // });

    // 요청 보낼때 헤더 포함
    // const headers = {
    //     'Authorization': 'Bearer ' + token,
    // }

    // 헤더와 같이 가져오기
    // axios.get(
    //     `${URL}/api/marker/${id}`,
    //      {
    //          headers: header
    //     }
    // )

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password,
        };
        Axios.post('http://127.0.0.1:8000/accounts/login/', user, {
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
            },
        })
            .then(res => {
                console.log(res)
                // if (res.data.key) {
                if (res.status == 200) {
                    localStorage.clear()
                    // localStorage.setItem('token', res.data.key)
                    localStorage.setItem('token', res.request.response)
                    window.location.href = 'http://localhost:3000/';
                }
                else {
                    setUsername('');
                    setPassword('');
                    localStorage.clear();
                    setErrors(true);
                }
            })
            .catch(errors => {
                // console.clear()
                console.log("error")
                setUsername('')
                setPassword('')
            })
    };

    return (
        <div className="login-box">
            <Container id="panel">
                <div className="form-title">로그인</div>
                <Form className="form" onSubmit={onSubmit}>
                    {/* <div className="form-title">로그인</div> */}
                    <Form.Group
                        as={Row}
                        className="mb-4"
                        controlId="formPlaintextPassword"
                    >
                        <Col sm>
                            <Form.Control
                                type="text"
                                placeholder="학번을 입력해주세요"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group
                        as={Row}
                        className=""
                        controlId="formPlaintextPassword"
                    >
                        <Col sm>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <br />

                    <div className="d-grid gap-1">
                        <Button className="button-style" type="submit">
                            로그인
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
}

export default Login;
