import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import About from "./Components/About";
import { useState } from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const changeColor = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Main>
        <Navbar
          title="TextUtils"
          home="Home"
          about="About"
          mode={mode}
          changeColor={changeColor}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<Form heading="Click to Analysis the Text" mode={mode} />}
          ></Route>
            <Route exact path="about" element={<About />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
