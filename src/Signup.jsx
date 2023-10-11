import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Signup = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log("TEST");
    try{
      fetch('http://127.0.0.1:8001/signup', {
        method: 'POST',
        body: {"Message" : "Hello"}
      })
    }
    catch{
      console.log("Aniketh");
    }
  }

  return (
    <div className="auth-form">
      <form className="signup-form" onSubmit={handleSubmit}>
        <TextField 
          label="First Name" 
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField 
          label="Last Name" 
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <TextField 
          label="Email" 
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          variant="outlined" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Sign Up!
        </Button>
      </form>

      <Button variant="contained" onClick={() => props.onFormSwitch('Signin')}>
        Already have an account? Sign in here!
      </Button>
    </div>
  )
}