import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddHomePageForm = () => {

    const [homeName, setHomeName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [maximumGuests, setMaximumGuests] = useState('');
    const [dateListed, setDateListed] = useState('');
    
    const redirect = useNavigate();

    const addHome = async () => {
        const newHome = { homeName, streetAddress, city, state, zipCode, bedrooms, bathrooms, maximumGuests, dateListed};
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
            alert(`Adding Rental Home as encountered an error: ${response.status}`);
        }
        redirect("/HomesPage");
    };

    return (
        <>

            <h2>Add a Rental Home</h2>
            <article>
                <h3>Usage:</h3>
            
            <p>Please enter the information below to add a new Rental Home to the list. Fields outlined in green are required fields.  I will convert the pets allowed field to a checkbox at a later point, as MongoDB does not have a boolean type. </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="homeName">Home Name</label>
                    <input
                        required
                        type="text"
                        placeholder="Shady Acres"
                        value={homeName}
                        onChange={e => setHomeName(e.target.value)} 
                        id="homeName" />
                    
                    <label for="streetAddress">Street Address</label>
                    <input
                    required
                        type="text"
                        value={streetAddress}
                        placeholder="123 Street Dr."
                        onChange={e => setStreetAddress(e.target.value)} 
                        id="streetAddress" />

                    <label for="city">City</label>
                    <input
                    required
                        type="text"
                        placeholder="Newville"
                        value={city}
                        onChange={e => setCity(e.target.value)} 
                        id="city" />

                    <label for="state">State</label>
                    <input
                    required
                        type="text"
                        placeholder="Washington"
                        value={state}
                        onChange={e => setState(e.target.value)} 
                        id="state" />

                    <label for="zipCode">Zip Code</label>
                    <input
                    required
                        type="text"
                        placeholder="11111"
                        value={zipCode}
                        onChange={e => setZipCode(e.target.value)} 
                        id="zipCode" />

                    <label for="bedrooms">Bedrooms</label>
                    <input
                    required
                        type="number"
                        placeholder="3"
                        value={bedrooms}
                        onChange={e => setBedrooms(e.target.value)} 
                        id="bedrooms" />

                    <label for="bathrooms">Bathrooms</label>
                    <input
                    required
                        type="number"
                        placeholder="2.5"
                        value={bathrooms}
                        onChange={e => setBathrooms(e.target.value)} 
                        id="bathrooms" />

                    <label for="maximumGuests">Maximum Guests</label>
                    <input
                    required
                        type="number"
                        placeholder="6"
                        value={maximumGuests}
                        onChange={e => setMaximumGuests(e.target.value)} 
                        id="maximumGuests" />

                    <label for="dateListed">Date Listed</label>
                    <input
                    required
                        type="date"
                        value={dateListed}
                        onChange={e => setDateListed(e.target.value)} 
                        id="dateListed" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addHome}
                        id="submit"
                    >Submit</button></label>
                </fieldset>
                </form>
            </article>

        </>
    );
}

export default AddHomePageForm;