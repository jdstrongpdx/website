import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditHomePageForm = ({ homeToEdit }) => {
 
    const [homeName, setHomeName] = useState(homeToEdit.homeName);
    const [streetAddress, setStreetAddress] = useState(homeToEdit.streetAddress);
    const [city, setCity] = useState(homeToEdit.city);
    const [state, setState] = useState(homeToEdit.state);
    const [zipCode, setZipCode] = useState(homeToEdit.zipCode);
    const [bedrooms, setBedrooms] = useState(homeToEdit.bedrooms);
    const [bathrooms, setBathrooms] = useState(homeToEdit.bathrooms);
    const [maximumGuests, setMaximumGuests] = useState(homeToEdit.maximumGuests);
    const [dateListed, setDateListed] = useState(homeToEdit.dateListed.slice(0, 10));

    const redirect = useNavigate();

    const editHome = async () => {
        const response = await fetch(`/homes/${homeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                homeName: homeName,
                streetAddress: streetAddress,
                city: city,
                state: state,
                zipCode: zipCode,
                bedrooms: bedrooms,
                bathrooms: bathrooms,
                maximumGuests: maximumGuests,
                dateListed: dateListed
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Rental home has been successfully edited.`);
            redirect("/HomesPage");
        } else {
            const errMessage = await response.json();
            alert(`Editing Rental Home encountered an error: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/HomesPage");
    }

    return (
        <>
        
            <h2>Edit a home</h2>

            <article>
                <h3>Usage:</h3>
                <p>Please update the information below to edit a Rental Home. Fields outlined in green are required fields. </p>
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
                        onClick={editHome}
                        id="submit"
                    >Save</button></label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditHomePageForm;