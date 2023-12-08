import React from 'react';
import { Link } from 'react-router-dom';

import { TbHomeOff, TbHomeEdit, TbHomePlus } from 'react-icons/tb';

function RentalHome({ home, onEdit, onDelete }) {
    
    return (
        <tr>
            <td>{home.homeName}</td>
            <td>{home.streetAddress}</td>
            <td>{home.city}</td>
            <td>{home.state}</td>
            <td>{home.zipCode}</td>
            <td>{home.bedrooms}</td>
            <td>{home.bathrooms}</td>
            <td>{home.maximumGuests}</td>
            <td>{home.dateListed.slice(0,10)}</td>

            <td><Link to="/create"><i><TbHomePlus/></i></Link> </td>
            <td><i><TbHomeEdit onClick={() => onEdit(home)} /></i></td>
            <td><i><TbHomeOff onClick={() => onDelete(home._id)} /></i></td>

        </tr>
    );
}

export default RentalHome;