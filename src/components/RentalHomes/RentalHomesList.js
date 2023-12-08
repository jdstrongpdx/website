import React from 'react';
import RentalHome from './RentalHome.js'

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function RentalHomesList({ homes, onDelete, onEdit }) {
    return (
        <table id="homes">
            <caption>List of Current Rental Homes</caption>
            <thead>
                <tr>
                    <th>Home Name</th>
                    <th>Street Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Beds</th>
                    <th>Baths</th>
                    <th>Guests</th>
                    <th>Date Listed</th>
                    <th>Add</th>
                    <th>Edit</th>
                    <th>Del</th>

                </tr>
            </thead>
            <tbody>
                {homes.map((home, i) => 
                    <RentalHome
                        home={home} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default RentalHomesList;
