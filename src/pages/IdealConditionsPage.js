import IdealConditionsV2 from "../components/IdealConditions/IdealConditionsV2";

function IdealConditionsPage() {
    return (
        <>
<section>


        <h2>About this Project</h2>
            <article>
                <p>This page is a full stack web application with a React/JS frontend, AWS ??? Hosting, and AWS Lambda Function running Python for the backend.</p>
                <p className='warning'>INCLUDE 6 MINUTE VIDEO ON PROJECT</p>
                <p className="warning">INCLUDE GITHUB LINK</p>
            </article>


        <article id="about">
          <h2><img src="../images/sun-behind-rain-cloud.png" className="icon" alt="Website Logo"></img> IdealConditions</h2>

          <nav class="local">

            <a href="#about"> About</a>
            <a href="#usage"> Usage</a>
            <a href="#search"> Search</a>
            <a href="#results"> Results</a>
          </nav>

            <p>Welcome to Ideal Conditions, the best resource for planning your next outdoor activity! Simply enter the
              location you want to be outdoors and this page will display a list of if/when in the next six days the
              weather conditions are ideal for running, fishing, hiking, golfing, cycling, skiing, kayaking, and
              kite boarding.
            </p>
            

        <div class="search_results">
          <p>Example output from this website:</p>
          <p ><span role="img" className="emoji" aria-label="cycling">🚴🏼</span>  Cycling Ideal Conditions:</p>
          <ul>
            <li>Time window: 5 hours.  10/27/2023 from 11 AM to 4 PM</li>
            <li>Time window: 2 hours.  10/30/2023 from 9 AM to 11 AM</li>
          </ul>
        </div>
        </article>

        <article id="usage">
          <h3>How to use this website.</h3>
          <p>Using this website is really easy, just follow the following steps:</p>
          <ol>
            <li>Enter the city, state of the location you want to do an outdoor activity in.</li>
            <li>Click the search button.</li>
            <li>Optional: Enter start and end dates to limit your search to specific days.</li>
            <li>Optional: Check the weekends only box to only show weekend days.</li>
            <li>Scroll through the search results to see the different outdoor activities available and their
            ideal condition time windows.</li>
          </ol>
        </article>

        <article id="form" >
          <IdealConditionsV2/>
        </article>

        <p>For support or questions about this website, contact <a href="mailto:jdstrongpdx@gmail.com">jdstrongpdx@gmail.com</a></p>


        <br></br>
        <article>
          <p><small><strong>Legal Disclaimer: </strong>This website makes no guarantees as to the accuracy of the information provided. Participation in outdoor activities carries inherent risks and the user accepts all responsibility to verify the weather conditions, safety, and abilities to participate in any activity listed or not.
          </small></p>
        </article>
      </section>



        </>
    );
}

export default IdealConditionsPage;