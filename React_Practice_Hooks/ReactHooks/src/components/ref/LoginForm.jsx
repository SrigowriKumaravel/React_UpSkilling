import React, { useState, useEffect, useRef } from "react";
import "../home/Home.css";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const refContainer = useRef(null);

  useEffect(() => {
    console.log(email);
    console.log(password);
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const emailAddress = refContainer.current.value;
    console.log({ email: emailAddress, password: password });
    setEmail("");
    setPassword("");
    refContainer.current.value = "";
  };

  const [count, setCount] = useState(0);
  const isIntialRender = useRef(true);

  useEffect(() => {
    if (isIntialRender.current) {
      isIntialRender.current = false;
      return;
    }
    console.log("useEffect ran because count changed", count);
  }, [count]);

  return (
    <div>
      <h1>Login Form</h1>
      <form className="form" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        {/* Uncontrolled Input */}
        <input type="text" value={email} ref={refContainer} defaultValue="" />
        <label htmlFor="password">Password</label>
        {/* Controlled Input */}
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
      <div>
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
