import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="w-50 mx-auto border border-4 rounded m-3 p-5">
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div>
          <h2>Please Login !!!!</h2>
          <Form onSubmit={handleUserSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <p className="text-danger"> {error?.message}</p>
            <Button
              className="btn btn-warning mx-auto"
              variant="primary"
              type="submit"
            >
              Login
            </Button>
          </Form>
          <p className="text-center mt-2">
            New To Ema-John?{" "}
            <Link className="form-link" to="/signup">
              Create on account
            </Link>
          </p>
          <p className="or text-center">or</p>

          <Button className="btn btn-light mx-auto text-info">
            <span className="me-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>{" "}
            </span>
            Continue With Google
          </Button>
        </div>
      )}
    </div>
  );
};

export default Login;
