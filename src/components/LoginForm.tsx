import React from "react";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const LoginForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-left">
      <h4 className="font-weight-bolder mb-2">Become a bolt driver</h4>
      <p className="font-weight-light mb-3 sm-font">
        If you have multiple cars or drivers<a href="#sign-up"> sign up as a fleet owner.</a>
      </p>
      <Form.Group as={Row} controlId="userEmail" className="text-left mb-3 px-3">
        <Form.Label>Email</Form.Label>
        <Form.Control size="lg" required type="email" placeholder="Email" />
        <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
      </Form.Group>

      <Form as={Row} className="align-items-end text-left mb-3">
        <Form.Group as={Col} md="5" controlId="countryCode">
          <Form.Label>Phone</Form.Label>
          <Form.Control size="lg" as="select" required>
            <option>+233</option>
            <option>+234</option>
            <option>+343</option>
            <option>+424</option>
            <option>+53</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">Phone is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="7" controlId="userPhone">
          <Form.Control size="lg" required type="text" placeholder="Phone" />
        </Form.Group>
      </Form>

      <Form.Group controlId="cities" className="text-left">
        <Form.Label>City</Form.Label>
        <Form.Control size="lg" as="select" required>
          <option>Accra</option>
          <option>Lagos</option>
          <option>Lesotho</option>
          <option>Mumbai</option>
          <option>Kenya</option>
        </Form.Control>
      </Form.Group>

      <Form.Group className="text-left my-4">
        <Form.Check
          required
          label={
            <div className="ml-2">
              I agree to Bolt's{" "}
              <a href="#terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </div>
          }
        />
      </Form.Group>

      <Button className="success rounded-pill fw-bold text-white btn-block py-3 px-3" type="submit">
        SIGN UP AS A DRIVER
      </Button>
    </Form>
  );
};

export default LoginForm;
