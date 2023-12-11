import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const IdealConditionsForm = () => {

    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [weekends, setWeekends] = useState('');
    
    const redirect = useNavigate();

    const submit = async () => {
        const response = await fetch('/homes', {
            method: 'post',
            body: JSON.stringify(),  //todo update
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
        <h3>Search for Ideal Conditions.</h3>

        <p className='warning'>FEATURE UNDER DEVELOPMENT</p>

        <form className="form" onSubmit={(e) => { e.preventDefault();}}>
            <fieldset>
            <label for="location">* Enter a City, State: </label>
                <input type="text" 
                name="location" 
                id="location" 
                placeholder="City, ST" 
                required 
                value={location}
                onChange={e => setLocation(e.target.value)} 
                />
            
            <label for="submit">
                <button
                    className="styledButton"
                    type="submit"
                    onClick={submit}
                    id="submit"
                >Submit</button></label>

            <p>(optional selections)</p>
        
            <p><label for="startDate">Start date: </label>
                <input type="date" 
                name="startDate" 
                id="startDate"
                value={startDate}
                onChange={e => setStartDate(e.target.value)} 
                />

            <label for="endDate">End date: </label>
                <input type="date" 
                name="endDate" 
                id="endDate"
                value={endDate}
                onChange={e => setEndDate(e.target.value)} 
                />
            </p>

            <p><label for="weekends">Weekends only: </label>
            <input type="checkbox" 
            name="weekends" 
            id="weekends"
            value={weekends}
            onChange={e => setWeekends(e.target.value)} 
            /> </p>

            </fieldset>
        </form>
        </>
    );
}

export default IdealConditionsForm;