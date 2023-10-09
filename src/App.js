import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Signin } from './Signin';
import { Signup } from './Signup';

function App() {
  const [currentForm, setCurrentForm] = useState('signin');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "Signin" ? <Signin onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
