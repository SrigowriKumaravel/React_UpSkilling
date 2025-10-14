import React from "react";
import Counter from "./components/state/Counter.jsx";
import "./App.css";
import Cart from "./components/state/Cart.jsx";
import EffectSample from "./components/effect/EffectSample.jsx";
import GitHubUsers from "./components/effect/GitHubUsers.jsx";
import Timer from "./components/effect/Timer.jsx";
import Home from "./components/home/Home.jsx";
import LoginForm from "./components/ref/LoginForm.jsx";

function App(props) {
  return (
    <div className="container">
      {/* <Counter /> */}
      {/* <Cart /> */}
      {/* <EffectSample /> */}
      {/* <GitHubUsers/> */}
      {/* <Timer /> */}
      {/* <Home /> */}
      <LoginForm />
    </div>
  );
}

export default App;
