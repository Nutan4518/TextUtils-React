import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// commenting below to deploy on github pages to avoid complexity
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Ensure these imports are correct


function App() {
  const [mode,setMode] =useState('light');
  const [alert,setAlert] =useState(null);
  const showAlert =(type, message)=>{
    setAlert({
      msg:message,
      type:type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode=()=>{
    if(mode === 'light')
      {
        setMode('dark');
      document.body.style.backgroundColor ='#6c757d';
      showAlert("success","Dark Mode is enabled!!!");
      document.title='textUtils-Dark Mode';

      // setInterval(()=>{
      //   document.title='textUtils-Amazing Mode';
      // },2000);

      // setInterval(()=>{
      //   document.title=' Install textUtils now';
      // },1500);
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("success","Light Mode is enabled!!!");
      document.title='textUtils-Light Mode';

    }
  }

 
  return (
   <>
  

{/* <Navbar title="TextUTils" aboutText=" About-TextUtils"/> */}
{/* <Router> */}
<Navbar title="TextUTils"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

 {/* <Routes>
    <Route exact path="/about" element={<About />} />
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here below" mode={mode} />} /> */}
    <TextForm showAlert={showAlert} heading="Enter your text here below" mode={mode} />
{/* </Routes>  */}
</div>
{/* </Router> */}

   </>
  );
}

export default App;
