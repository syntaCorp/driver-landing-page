import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import en from 'react-phone-number-input/locale/en.json';


export default function DialCodeSelect(): React.ReactElement {

    return (
        <Form as={Row} className="align-items-end text-left mb-3">
            <Form.Group controlId="countryCode" className="pr-1 col-4">
                <Form.Label className="font-weight-bold text-dark max-content">Phone number</Form.Label>
                <Form.Control size="lg" as="select" required>
                    {/* <option>+233</option> */}
                    {getCountries().sort((country, _country) => country.localeCompare(_country)).map(country => {
                        return (
                            <option key={country} value={getCountryCallingCode(country)}>
                                {en[country]} +{getCountryCallingCode(country)}
                            </option>
                            // <option>{en[country]} +{getCountryCallingCode(country)}</option>
                        )
                    })
                    }
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="userPhone" className="pl-1 col-8">
                <Form.Control size="lg" required type="text" placeholder="Phone" />
                <Form.Control.Feedback type="invalid" className="feedback-pos">Phone is required</Form.Control.Feedback>
            </Form.Group>
        </Form>
    );
}