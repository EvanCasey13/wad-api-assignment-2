import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../../AuthContext';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Login.css'

const Login = props => {
  const context = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  let location = useLocation();

  // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }

  return (
<div className="login">
<Card sx={{ maxWidth: 345 }}>
  <Typography gutterBottom variant="h5" component="div" className="cardTitle">
    TMDB Client
  </Typography>
  <form className="form">
    <TextField type="text"
      className="register__textBox"
      placeholder="Username"
      value={userName}
      onChange={e => {
        setUserName(e.target.value)
      }
      }
      variant="standard" />
    <br />
    <TextField type="password"
      className="register__textBox"
      placeholder="Password"
      onChange={e => {
        setPassword(e.target.value)
      }
      }
      variant="standard" />
    <br />
    <Button className="login__btn" onClick={login} variant="outlined">Login</Button>
    <br />
    <Typography variant="p" color="text.secondary">
      Don't have an account? <Link to="/register">Register</Link> now.
    </Typography>
  </form>
</Card>
</div>
  );
};

export default Login;