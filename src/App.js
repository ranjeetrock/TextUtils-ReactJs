import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Textutils"
        // about="Aboutus"
        mode={mode}
        togglemode={togglemode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route
              exact
              path="/Aboutus"
              element={<About mode={mode} />}
            ></Route> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm
          showAlert={showAlert}
          heading="Textutils - word counter, character counter:"
          mode={mode}
        />

        {/* ></Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
