import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import classes from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const _handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }

    if (name === 'password') {
      setPassword(value);
    }

    if (value.length) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const _validate = () => {
    let isValid = true;
    const tmpErrors = { ...errors };

    if (!email.length) {
      tmpErrors.email = 'Email cannot be empty!';
      isValid = false;
    }

    if (!password.length) {
      tmpErrors.password = 'Password cannot be empty!';
      isValid = false;
    }

    setErrors(tmpErrors);

    return isValid;
  }

  const _login = async () => {

    const isValid = _validate();

    if (isValid) {
      // make API REQUEST
      const payload = {
        email,
        password
      };

      // const res = await fetch('http://practica.local/api/login', {
      //   method: 'POST',
      //   headers: {
      //     "Accept": 'application/json',
      //     "Content-Type": 'application/json'
      //   },
      //   body: JSON.stringify(payload)
      // })

      // console.log(res);
    }
  }

  return (
    <section>
      <div className={classes.loginContainer}>
        <div>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              isInvalid={errors.email.length}
              onChange={_handleChange} />
            {!!errors.email.length && <Form.Control.Feedback type='invalid'>
              {errors.email}
            </Form.Control.Feedback>}
          </Form.Group>
        </div>
        <div>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              value={password}
              isInvalid={errors.password.length}
              onChange={_handleChange} />
            {!!errors.password.length && <Form.Control.Feedback type='invalid'>
              {errors.password}
            </Form.Control.Feedback>}
          </Form.Group>
        </div>
        <Button onClick={_login}>Login</Button>
      </div>
    </section>
  )
}

export default Login