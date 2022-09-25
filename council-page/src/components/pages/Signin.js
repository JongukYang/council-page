import React, { Component } from "react";

function Login() {
    return (
        <form>
            <input type="text" placeholder="아이디를 입력하세요" />
            <br />
            <input type="password" placeholder="비밀번호를 입력하세요" />
            <br />
            <input type="submit" value="로그인" />
            <br />
        </form>
    );
}

export default Login;
