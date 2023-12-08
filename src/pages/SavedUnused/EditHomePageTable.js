import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditHomePageTable = ({ homeToEdit }) => {
 
    const [title, setTitle]       = useState(homeToEdit.title);
    const [year, setYear]         = useState(homeToEdit.year);
    const [language, setLanguage] = useState(homeToEdit.language);
    
    const redirect = useNavigate();

    const editHome = async () => {
        const response = await fetch(`/homes/${homeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                year: year, 
                language: language
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`helpful editing message`);
        } else {
            const errMessage = await response.json();
            alert(`helpful editing message ${response.status}. ${errMessage.Error}`);
        }
        redirect("/");
    }

    return (
        <>
        <article>
            <h2>Edit a movie</h2>
            <p>Paragraph about this page.</p>
            <table id="homes">
                <caption>Which movie are you adding?</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="title">Movie title</label>
                        <input
                            type="text"
                            placeholder="Title of the movie"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label for="year">Year released</label>
                        <input
                            type="number"
                            value={year}
                            placeholder="Year of the movie"
                            onChange={e => setYear(e.target.value)} 
                            id="year" />
                    </td>

                    <td><label for="language">Language</label>
                        <input
                            type="text"
                            placeholder="Primary language of the movie"
                            value={language}
                            onChange={e => setLanguage(e.target.value)} 
                            id="language" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={editHome}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditHomePageTable;