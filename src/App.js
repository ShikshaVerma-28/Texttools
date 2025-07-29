import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
// import { useState } from 'react';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');    //whether dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  // }

  const toggleMode = (cls) => {            //comment part is used for different colors
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", "success")
      document.title = 'TextTools - Dark Mode'

      // setInterval(() => {
      //   document.title = 'TextTools is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextTools Now'
      // }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      document.title = 'TextTools - Light Mode'
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextToolsmain" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm heading="TextTools - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar title="TextTools" mode={mode} toggleMode={toggleMode} key={new Date()} /> */}
      {/*.......this is used for import prop  */}
      {/* <Navbar title="TextToolsmain" aboutText="About" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Navbar title="TextToolsmain" aboutText="About" /> */}

      {/* this navbar is used for defaultexport */}
      {/* <Navbar /> */}

      {/* <div className="container my-3"> */}
      {/* <About mode={mode} /> */}
      {/* <TextForm showAlert={showAlert} heading="Try TextTools - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />      this is how we use alert */}
      {/* <TextForm heading="Try TextTools - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />  */}
      {/* this is how we use mode  */}

      {/* <TextForm heading="Try TextTools - Word Counter, Character Counter, Remove Extra Spaces"  />  */}
      {/* </div> */}
    </>
  );
}
export default App;
