"use client";
import { useEffect, useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (name === "") {
      setErrorMessage("이름을 입력하세요");
    } else if (email === "") {
      setErrorMessage("이메일을 입력하세요");
    } else if (password === "") {
      setErrorMessage("비밀번호를 입력하세요");
    } else if (password.length <= 6) {
      setErrorMessage("6자 이상의 비밀번호를 입력하세요");
    } else if (!/[A-Z]+/.test(password)) {
      setErrorMessage("비밀번호에 대문자를 포함하세요");
    } else {
      setErrorMessage("");
    }
  }, [name, email, password]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <div className="login-bg">
        <form method="POST" action="/api/auth/signup" className="login-form">
          <input
            name="name"
            type="text"
            placeholder="이름"
            value={name}
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleInputChange}
          />
          <div className="login-footer">
            <p className="errorMessage">{errorMessage}</p>
            <button
              type="submit"
              className={`login-submit-btn ${!comment ? "disabled" : ""}`}
              disabled={errorMessage}
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
