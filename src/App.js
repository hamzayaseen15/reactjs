import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';


function App() {
  return (
    <>
    <Navbar title = "TextUtils"  about = "AboutUs"/>
    <div className="container">
    {/* <Textform heading = "Please Enter the text"/> */}
    <About/>
    </div>
    </>
  );
}

export default App;
