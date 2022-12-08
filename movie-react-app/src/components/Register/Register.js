import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from '../../AuthContext';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Register.css'

const Register = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
<div className="register">
<Card sx={{ maxWidth: 345 }}>
  <Typography gutterBottom variant="h5" component="div" className="cardTitle">
    TMDB Client
  </Typography>
  <form className="form">
    <TextField value={userName} placeholder="Username" onChange={e => {
        setUserName(e.target.value);
      }}
      variant="standard" />
    <br />
    <TextField value={password} type="password" placeholder="Password" onChange={e => {
        setPassword(e.target.value);
      }}
      variant="standard" />
    <br />
    <TextField value={passwordAgain} type="password" placeholder="Enter password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}
      variant="standard" />
    <br />
    <Button onClick={register} variant="outlined">Register</Button>
    <br />
    <Typography variant="p" color="text.secondary">
      Already have an account? <Link to="/login">Login</Link> now.
    </Typography>
  </form>
</Card>
</div>
  );
};

export default Register;