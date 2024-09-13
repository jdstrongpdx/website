function PersonalWebsite() {
    return (
        <>
            <div  id="PersonalWebsite" className="project">
                <h3>Personal Website</h3>
                <h4>December 2023 - Current</h4>
                <div className="centered">
                    <figure>
                        <img width="900px" alt="website screenshot" src="/images/website.png"/>
                    </figure>
                </div>
                <p><strong>App Type:</strong> Dynamic Web Site</p>
                <p><strong>Description:</strong> Development of a personal website to showcase my SWE skills. I started
                    from scratch deploying an empty React project to AWS Amplify and built up the code using React,
                    JavaScript, and Vanilla CSS to develop the site.</p>
                <ul>
                    <li><em>Frontend: </em> React, Node.js, Vanilla CSS.</li>
                    <li><em>Hosting: </em> AWS Amplify with automatic deployment with commit to Main.</li>
                </ul>
                <a href="#top">Back to top</a>
            </div>
        </>
    )
}

export default PersonalWebsite;