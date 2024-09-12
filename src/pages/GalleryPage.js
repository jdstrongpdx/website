import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: 'images/MLB-WebGL.png',
        thumbnail: 'images/MLB-WebGL.png',
        description: 'WebGL deployment of a Unity Atari Breakout clone and Machine Learned model development to play the game.',
  }, {
    original: 'images/MLB-Poster.png',
        thumbnail: 'images/MLB-Poster.png',
        description: 'Oregon State University Showcase Poster for ML-Breakout Project.',
  }, {
    original: 'images/MLB-GitHub.png',
        thumbnail: 'images/MLB-GitHub.png',
        description: 'ML-Breakout CI/CD shared Repository.',
  }, {
    original: 'images/FFR-Poster.png',
    thumbnail: 'images/FFR-Poster.png',
    description: 'Oregon State University Showcase Poster for FragranceFreeResources Project.',
  }, {
    original: 'images/FFR-Visitor.png',
        thumbnail: 'images/FFR-Visitor.png',
        description: 'Visitor view of a Product from FragranceFreeResources.com',
  }, {
    original: 'images/FFR-User.png',
        thumbnail: 'images/FFR-User.png',
        description: 'User view of a Product and a Review modal displayed from FragranceFreeResources.com.',
  }, {
    original: 'images/FFRendpoints.png',
    thumbnail: 'images/FFRendpoints.png',
    description: 'Spring Boot endpoints for the FragranceFreeResources web application backend.',
  }, {
    original: 'images/FFRschema.png',
    thumbnail: 'images/FFRschema.png',
    description: 'MySql schema created by Spring Boot JPA ODM',
  }, {
    original: 'images/NetworkMonitor.png',
    thumbnail: 'images/NetworkMonitor.png',
  }, {
    original: 'images/DockerNewman.png',
    thumbnail: 'images/DockerNewman.png',
    description: 'Using Newman CLI to test Dockerized Python/Flask API app before deploying to GCP.',
  }, {
    original: 'images/JWTauth.png',
    thumbnail: 'images/JWTauth.png',
    description: 'Using Newman CLI to test user authentication and privileges using JWT and a Spring Security API.',
  }, {
    original: 'images/AWS-lambda.png',
    thumbnail: 'images/AWS-lambda.png',
    description: 'Programming an API Endpoint using AWS Lambda API Gateway in Python.',
  }, {
    original: 'images/idealConditionsJSON.png',
    thumbnail: 'images/idealConditionsJSON.png',
    description: 'AWS Lambda API JSON return for Ideal Conditions App.',
    }, {
      original: 'images/idealConditionsPage.png',
    thumbnail: 'images/idealConditionsPage.png',
    description: 'Ideal Conditions Web App Page',
    }, {
    original: 'images/Multi-thread-code.png',
    thumbnail: 'images/Multi-thread-code.png',
    description: 'Multi-threaded Java Blockchain creator & miner',
    }, {
    original: 'images/MultiThreadJava.png',
    thumbnail: 'images/MultiThreadJava.png',
    description: 'Ten core processor mining 9 threads for Java Blockchain app.',
  }, {
    original: 'images/matplot.png',
    thumbnail: 'images/matplot.png',
    description: 'Using wrappers in Python and Matplotlib to compare sorting algorithms.',
    }, {
    original: 'images/snippets.png',
    thumbnail: 'images/snippets.png',
    description: 'Using SnippetsLab to save code snippets or prior work to quickly find function examples.',
  }, {
    original: 'images/SplitKeyboard.jpg',
    thumbnail: 'images/SplitKeyboard.jpg',
    description: 'Using an ergonomic programmable split keyboard to increase productivity and ergonomics.',
  }, {
    original: 'images/inductiveProof.jpg',
    thumbnail: 'images/inductiveProof.jpg',
    description: 'Detailed and organized work - Proof by induction example.',
  }, {
    original: 'images/Books.jpg',
    thumbnail: 'images/Books.jpg',
    description: 'Supplemental reading on how to be a better developer.',
  }
]

function GalleryPage() {
    return (<>

    <h2> Gallery </h2>

      <article className="image-gallery-wrapper">
        
        <ImageGallery items={images} />      
    </article>
        <br></br>
    </>
  );
}
export default GalleryPage;
                