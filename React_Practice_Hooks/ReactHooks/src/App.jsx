import React from "react";
import Counter from "./components/state/Counter.jsx";
import "./App.css";
import Cart from "./components/state/Cart.jsx";
import EffectSample from "./components/effect/EffectSample.jsx";
import GitHubUsers from "./components/effect/GitHubUsers.jsx";
import Timer from "./components/effect/Timer.jsx";
import Home from "./components/home/Home.jsx";
import LoginForm from "./components/ref/LoginForm.jsx";
import TaskApp from "./components/reducer/TaskApp.jsx";
//import Student from "./components/context/withContext/Student.jsx";
// import Student from "./components/context/withoutContext/Student.jsx";
import ButtonClickCounter from "./components/callback/ButtonClickCounter.jsx";
import WithoutTransition from "./components/transition/WithoutTransition.jsx";
import LargeListFilter from "./components/transition/LargeListFilter.jsx";
import NameFilterComponent from './components/customHook/NameFilterComponent.jsx';

function App(props) {
  return (
    <div className="container">
      {/* <Counter /> */}
      {/* <Cart /> */}
      {/* <EffectSample /> */}
      {/* <GitHubUsers/> */}
      {/* <Timer /> */}
      {/* <Home /> */}
      {/* <LoginForm /> */}
      {/* <Student /> */}
      {/* <Student /> */}
      {/* <TaskApp /> */}
      {/* <ButtonClickCounter /> */}
      {/* <WithoutTransition /> */}
      {/* <LargeListFilter /> */}
      <NameFilterComponent/>
    </div>
  );
}

export default App;
