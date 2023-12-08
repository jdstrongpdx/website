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
        <h2>Search for Ideal Conditions.</h2>

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
            
        <h2>Results</h2>

        <div class="search_results">
            <p ><span role="img" className="emoji" aria-label="cycling">🚴🏼</span>  Cycling Ideal Conditions:</p>
            <ul>
            <li>Time window: 5 hours.  10/27/2023 from 11 AM to 4 PM</li>
            <li>Time window: 2 hours.  10/30/2023 from 9 AM to 11 AM</li>
            </ul>

            <p ><span role="img" className="emoji" aria-label="running">🏃🏼</span>   Running IdealConditions:</p>
            <ul>
            <li>Time window: 8 hours.  10/27/2023 from 9 AM to 5 PM</li>
            <li>Time window: 4 hours.  10/30/2023 from 8 AM to 12 AM</li>
            </ul>


            <p><span role="img" className="emoji" aria-label="skiing">⛷️</span>  Skiing Ideal Conditions:</p>
            <ul>
            <li>No times with ideal conditions were found.</li>
            </ul>
        </div>
        </>
    );
}

export default IdealConditionsForm;