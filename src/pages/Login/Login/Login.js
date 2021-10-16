import React from "react";
import Button from "react-bootstrap/Button";
import useAuth from '../../../hook/useAuth/useAuth';

const Login = () => {
     const {signInUsingGoogle} = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle} className="btn btn-danger">Goggle Sign in</button>
      <Button variant="outline-primary mx-2">Github Sign in</Button>
    </div>
  );
};

export default Login;
