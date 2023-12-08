import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddHomePageTable = () => {

    const [homeName, setHomeName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [maximumGuests, setMaximumGuests] = useState('');
    const [petsAllowed, setPetsAllowed] = useState('');
    const [dateListed, setDateListed] = useState('');
    
    const redirect = useNavigate();

    const addHome = async () => {
        const newHome = { homeName, streetAddress, city, state, zipCode, bedrooms, bathrooms, maximumGuests, petsAllowed, dateListed };
        const response = await fetch('/homes', {
            method: 'post',
            body: JSON.stringify(newHome),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Rental Home has been successfully added.`);
        } else {
            alert(`Adding Rental Home encountered an error: ${response.status}`);
        }
        redirect("/");
    };


    return (
        <>
        <article>
            <h2>Add a Home</h2>
            <p>TODO Paragraph about this page.</p>
            
            <table id="homes">
                <caption>Which Rental Home are you adding?</caption>
                <thead>
                    <tr>
                        <th>Home Name</th>
                        <th>Street Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>ZipCode</th>
                        <th>Bedrooms</th>
                        <th>Bathrooms</th>
                        <th>Max Guests</th>
                        <th>Pets Allowed</th>
                        <th>Date Listed</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="homeName">Home Name</label>
                        <input
                            type="text"
                            placeholder="Home Name"
                            value={homeName}
                            onChange={e => setHomeName(e.target.value)} 
                            id="homeName" />
                    </td>

                    <td><label for="streetAddress">Street Address</label>
                        <input
                            type="text"
                            value={streetAddress}
                            placeholder="123 Street Dr."
                            onChange={e => setStreetAddress(e.target.value)} 
                            id="streetAddress" />
                    </td>

                    <td><label for="City">City</label>
                        <input
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={e => setCity(e.target.value)} 
                            id="city" />
                    </td>

                    <td><label for="State">State</label>
                        <input
                            type="text"
                            placeholder="State"
                            value={state}
                            onChange={e => setState(e.target.value)} 
                            id="state" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addHome}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddHomePageTable;