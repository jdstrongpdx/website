import StaffList from '../components/Staff/StaffList.js';

function StaffPage() {
    return (
    <>
        <h2>Staff</h2>

        <p> Clicking the button below will add a random person to our companies staff!  Who knew hiring was so easy. People are fetched from the following website: <a href="https://randomuser.me/"> Random Staff Generator.</a>  The status of the website connection is displayed to the right. After every ten clicks fo the button, the count of staff added to the company will be printed to the console.</p>

        <article>
            
            <StaffList/>

        </article> 
    </>
    );
}
export default StaffPage;