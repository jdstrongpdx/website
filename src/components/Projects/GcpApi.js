
function GcpApi() {
    return (
        <>
        <div className="project">
            <h3>Google Cloud Platform RESTful API backend using Python/Flask, Datastore, Storage</h3>
            <h4>May 2024</h4>

            <p><strong>App Type:</strong> RESTful API Backend</p>
            <p><strong>Description:</strong> Portfolio project for my Cloud Application Development course with the following features:</p>
            <ul>
                <li>User authentication and authorization using Auth0 and JWTs.</li>
                <li>Development of RESTful API endpoints following a provided API specification including:</li>
                <ul>
                    <li>Returning the correct HTTP Response Codes based on a series of possible errors and their respective priorities.</li>
                    <li>Generation of dynamic "self" url links to access linked information.</li>
                    <li>Use of Pagination and dynamic "next" url links.</li>
                </ul>
                <li>Creating and configuring Google Cloud Platform to host a Python/Flask app utilizing AppEngine, Datastore, Storage.</li>
                <li>Using GCP Datastore to perform CRUD operations on User, Course, and Enrollment entities.</li>
                <li>Using GCP Storage to upload, retrieve and delete user avatar image files.</li>
                <li>Testing API endpoints using Postman/Newman including the creation of tests to meet the API specification.</li>
            </ul>
            
            <div className="centered">
                <figure>
                    <img width="600px" alt="python flask api code" src="images/GCPflask.png"/>
                    <figcaption>Python/Flask API Endpoint code.</figcaption>
                </figure>
            </div>
            
            <div className="centered">
                <figure>
                    <img width="850px" alt="postman newman api testing" src="images/GCPpostman.png"/>
                    <figcaption>Postman/Newman API Testing</figcaption>
                </figure>
            </div>

            <div className="centered">
                <figure>
                    <img width="1000px" alt="google cloud platform datastore" src="images/GCPdatastore.png"/>
                    <figcaption>GCP Datastore</figcaption>
                </figure>
            </div>
        </div>
        </>
  )
}

export default GcpApi;