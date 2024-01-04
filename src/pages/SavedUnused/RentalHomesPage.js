import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RentalHomesList from '../components/RentalHomes/RentalHomesList.js'
import { Link } from 'react-router-dom';
import { TbHomeOff, TbHomeEdit, TbHomePlus } from 'react-icons/tb';

function RentalHomesPage({ setHome }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [homes, setHomes] = useState([]);

    // RETRIEVE the entire list of homes
    const loadHomes = async () => {
        const response = await fetch('/homes');
        const homes = await response.json();
        setHomes(homes);
    } 

    // UPDATE a single home
    const onEditHome = async home => {
        setHome(home);
        redirect("/update");
    }

    // DELETE a single home  
    const onDeleteHome = async _id => {
        const response = await fetch(`/homes/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/homes');
            const homes = await getResponse.json();
            setHomes(homes);
            alert(`Rental home has been successfully deleted.`);
        } else {
            console.error(`Rental Home has been deleted = ${_id}, status code = ${response.status}`)
        }
        redirect("/HomesPage");
    }

    // LOAD all the homes
    useEffect(() => {
        loadHomes();
    }, []);

    // DISPLAY the homes
    return (
        <>
           <h2>About this Project</h2>
            <article>
                <p>This is a simple full stack React/JS/MongoDB web app using a MVC model using MERN &#123; Mongoose, Express, React, Node.js &#125;.  </p>
            </article>
            <h2>List of Current Rental Homes</h2>
            <article>
                <h3>Introduction</h3>
            <p>On this page you can add, edit, or delete from a list of currently available rental homes. This page uses CRUD methods and a MVC model to convert JavaScript objects into BSON format MongoDB requests. Changes made in the MongoDB Atlas Cluster are returned and updated, or error messages are displayed.</p>
            <ul>
                <li>To add a new home, click any <TbHomePlus/> icon. You can also add a home with this link: <Link to="/create"><i><TbHomePlus/></i></Link> </li>
                <li>To add a edit a home, click any <TbHomeEdit/> icon next to the home you want to edit.</li>
                <li>To add a delete a home, click any <TbHomeOff/> icon next to the home you want to delete.</li>
            </ul>
            </article>
            
            <RentalHomesList 
                homes={homes} 
                onEdit={onEditHome} 
                onDelete={onDeleteHome} 
            />
        </>
    );
}

export default RentalHomesPage;