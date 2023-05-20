import React from "react";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
// import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';
import Cities from "./Cities";
import DialCodeSelect from "./DialCodeSelect";


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


  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-left">
      <h4 className="font-weight-bolder mb-2 text-dark">Become a Bolt driver</h4>
      <p className="font-weight-normal mb-3 sm-font">
        If you have multiple cars or drivers<a href="#sign-up"> sign up as a fleet owner.</a>
      </p>
      <Form.Group as={Row} controlId="userEmail" className="text-left mb-3 px-3">
        <Form.Label className="font-weight-bold text-dark">Email</Form.Label>
        <Form.Control size="lg" required type="email" placeholder="Email" />
        <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
      </Form.Group>

      {/* dialing code selection */}
      <DialCodeSelect />

      {/* cities selection */}
      {<Cities />}

      <Form.Group className="text-left my-4">
        <Form.Check
          id="agreement"
          name="terms"
          type="checkbox"
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
