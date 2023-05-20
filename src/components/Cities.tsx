import React from "react";
import { Form } from "react-bootstrap";
import { City } from 'country-state-city';

// Import Interfaces`
import { ICity } from 'country-state-city';

export default function Cities(): React.ReactElement {

    return (
        <React.Fragment>
            <Form.Group controlId="cities" className="text-left">
                <Form.Label className="font-weight-bold text-dark">City</Form.Label>
                <Form.Control size="lg" as="select" required>
                    {/* <option>Accra</option> */}
                    {City.getAllCities().slice(0, 40).map((city: ICity) => <option key={city.name}>{city.name}</option>)}
                </Form.Control>
            </Form.Group>
        </ React.Fragment>
    );
}


