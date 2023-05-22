import React from "react";
import { Form } from "react-bootstrap";
import { City } from 'country-state-city';
import * as Ariakit from "@ariakit/react";
// import "../scss/custom.scss";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import en from 'react-phone-number-input/locale/en.json';
// Import Interfaces`
import { ICity } from 'country-state-city';

export default function Cities(): React.ReactElement {
    const select = Ariakit.useSelectStore({ defaultValue: "Tallinn" });
    return (
        <React.Fragment>
            <Form.Group controlId="cities" className="text-left col px-0">
                {/* <Form.Label className="font-weight-bold text-dark">City</Form.Label> */}
                {/* <Form.Control size="lg" as="select" required> */}
                {/* <option>Accra</option> */}
                {/* {City.getAllCities().slice(0, 40).map((city: ICity) => <option key={city.name}>{city.name}</option>)} */}
                {/* </Form.Control> */}
                <Ariakit.SelectLabel store={select} className="font-weight-bold text-dark max-content">City</Ariakit.SelectLabel>
                <Ariakit.Select store={select} className="select form-control-lg" required />
                <Ariakit.SelectPopover
                    store={select}
                    gutter={4}
                    // sameWidth
                    className="popover"
                >
                    {City.getAllCities().slice(0, 50).sort((city, _city) => city.name.localeCompare(_city.name)).map(city => {
                        return (
                            <Ariakit.SelectItem className="select-item" value={city.name}>
                                {city.name}
                            </Ariakit.SelectItem>
                        )
                    })
                    }
                    {/* <Ariakit.SelectItem className="select-item" value="Apple" /> */}
                </Ariakit.SelectPopover>
            </Form.Group>
        </ React.Fragment>
    );
}


