import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  const [mode, setMode] = useState('light');
  const [textColor, setTextColor] = useState('dark');
  const [text, setText] = useState('Enable Dark Mode');

  const toggleMode =()=>{
    if (mode === 'light'){
      setMode('dark');
      setTextColor('light');
      setText('Disable Dark Mode');
      document.body.style.backgroundColor = 'black'
    }
    else{
      setMode('light');
      setTextColor('dark');
      setText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Navbar title = "TextUtils"  about = "AboutUs" mode = {mode} toggleMode = {toggleMode} textColor = {textColor} text = {text}/>
    <div className="container" >
    <Textform heading = "Please Enter the text" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
