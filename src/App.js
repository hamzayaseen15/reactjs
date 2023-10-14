import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
    <Navbar title = "TextUtils"  about = "AboutUs"/>
    <div className="container">
    <Textform heading = "Please Enter the text"/>
    </div>
    </>
  );
}

export default App;
