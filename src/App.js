import "./App.css";
import Navbar from "./components/navbar";
import Textform from "./components/textform";
import About from "./components/about";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //It will check whether the mode is in dark or not
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#050a22";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
        <Navbar title="TextUtlies" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
      <router>
        <div className="container">
        <Router>
      <div>
          <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={ <Textform
          setalert={setalert}
          heading="Text Counter"
          mode={mode}
        />  }>
          </Route>
      </Routes>
      </div>
    </Router>
   </div>
      </router>
    </>
  );
}

export default App;
