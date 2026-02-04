import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';      


function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enable or not

  const toggleMode =()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';
    }}
  
  return (
    <>
    {/* this title is the props */}
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
              <TextForm heading="Enter the text to analyze below" mode={mode}/> <br/><br/>
              <About/>

      </div>
    </>
    
  );
}
export default App;
