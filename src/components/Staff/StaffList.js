import { React, useState } from 'react';
import EmailLink from './EmailLink';

const StaffList = () => {

  const [allStaff, setStaff] = useState([])

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=10")
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Error: Fetching staff was not successful.");
      }
    })
    .then(data => {
      setStaff(data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <> 

      <button onClick={fetchData}>Fetch Staff</button>

      <table>
          <caption>List of current staff: </caption>

                 
          <thead>
            <th>Picture</th>
            <th>Full Name</th>
            <th>E-Mail Address</th>
            <th>Phone Number</th>
            <th>City</th>
          </thead>

          {allStaff.length > 0 && (
                <tbody>
                  
                {allStaff.map((staff, i)=> ( 
                  <tr key={i}>

                    <td><img src={staff.picture.thumbnail} alt="Headshot"/></td>
                    <td>{staff.name.first} {staff.name.last}</td>
                    <td><EmailLink label={staff.email} mailto={`mailto:${staff.email}`} /></td>
                    <td>{staff.phone}</td>
                    <td>{staff.location.city}</td>


                  </tr> 
                ))}
                </tbody>
          )}

      </table>

</>
  )
}

export default StaffList
