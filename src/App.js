import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark');
  const [text, setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const [alertColor, setalertColor] = useState('success');

  const showAlert =(message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const showAlertColor = (color)=>{
    setalertColor({
      color: color
    })
  }

  const toggleMode =()=>{
    if (mode === 'light'){
      setMode('dark');
      setTextColor('light');
      setText('Disable Dark Mode');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode has been Enabled", "Success");
      showAlertColor('success')
    }
    else{
      setMode('light');
      setTextColor('dark');
      setText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode has been Disabled", "Success");
      showAlertColor('success')

    }
  }

  return (
    <Router>
      <>
        <Navbar title="TextUtils" about="AboutUs" mode={mode} toggleMode={toggleMode} textColor={textColor} text={text} />
        <Alert alert={alert} alertColor={alertColor} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform showAlertColor={showAlertColor} showAlert={showAlert} heading="Please Enter the text" mode={mode} />} />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
