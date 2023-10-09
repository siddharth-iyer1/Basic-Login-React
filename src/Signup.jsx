import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const Signup = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="auth-form">
      <form className="signup-form" onSubmit={handleSubmit}>
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

        <Button variant="contained" type="submit">
          Log In!
        </Button>
      </form>

      <Button variant="contained" onClick={() => props.onFormSwitch('Signin')}>
        Already have an account? Sign in here!
      </Button>
    </div>
  )
}