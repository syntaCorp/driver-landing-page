import React from "react";
import { Form, Button } from "react-bootstrap";
import LoginForm from "./LoginForm";

export function Main(): React.ReactElement {

    return (
        <React.Fragment>
            {/*   font-size: 4rem;
    line-height: 4.5rem;
    color: #fff;
    text-align: start;
    font-family: "Euclid Circular B", sans-serif;
    text-align: start;
    max-width: 8em;
    }
 */}
            <main>
                <div className="container text-center d-flex align-items-center main--vh">
                    <div className="row flex-grow-1 no-gutters">
                        <div className="col-sm-12 col-md-7 mt-md-5">
                            <h1 className="description mt-4 text-white text-left">Make money driving with Bolt</h1>
                            <p className="mini-description text-left text-white">Become a Bolt driver, set your schedule and earn extra money by driving!</p>
                            <div className="text-white text-left font-weight-bold text-uppercase">
                                <span className="align-items-center letter-space d-sm-none d-md-inline-flex d-none">Learn more
                                    <span className="material-symbols-outlined ml-2">
                                        expand_circle_down
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5 bg-white py-4 px-4 mb-5 rounded-lg text-left">
                            <LoginForm />

                            {/* <Form className="text-left">
                                <h4 className="font-weight-bolder">Become a bolt driver</h4>
                                <p className="font-weight-light">If you have multiple cars <a href="#sign-up">sign up a fleet owner</a>
                                </p>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="text-left">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form> */}
                        </div>
                    </div>
                </div>
            </main>
        </ React.Fragment>
    );
}