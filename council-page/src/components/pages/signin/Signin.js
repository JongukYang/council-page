import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./signin.css";

function Login() {
    return (
        <div className="login-box">
            <Container id="panel">
                <div className="form-title">로그인</div>
                <Form className="form">
                {/* <div className="form-title">로그인</div> */}
                    <Form.Group
                        as={Row}
                        className="mb-4"
                        controlId="formPlaintextPassword"
                    >
                        <Col sm>
                            <Form.Control
                                type="password"
                                placeholder="학번을 입력해주세요"
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
