import * as Ariakit from "@ariakit/react";
// import "../scss/custom.scss";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import en from 'react-phone-number-input/locale/en.json';


export default function DialCodeList() {
    const select = Ariakit.useSelectStore({ defaultValue: "+372" });
    return (
        <>
            <Ariakit.SelectLabel store={select} className="font-weight-bold text-dark max-content">Phone number</Ariakit.SelectLabel>
            <Ariakit.Select store={select} className="select form-control-lg" required />
            <Ariakit.SelectPopover
                store={select}
                gutter={4}
                // sameWidth
                className="popover"
            >
                {getCountries().sort((country, _country) => country.localeCompare(_country)).map(country => {
                    return (
                        <Ariakit.SelectItem className="select-item" value={`+${getCountryCallingCode(country)}`}>
                            {en[country]} +{getCountryCallingCode(country)}
                        </Ariakit.SelectItem>
                    )
                })
                }
                {/* <Ariakit.SelectItem className="select-item" value="Apple" /> */}
            </Ariakit.SelectPopover>
        </>
    );
}
