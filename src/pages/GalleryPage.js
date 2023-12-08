import ImageGallery from 'react-image-gallery';


const images = [
    {
    original: 'images/aws-lambda-api-gateway.jpg',
    thumbnail: 'images/aws-lambda-api-gateway.jpg',
    description: 'Programming an API Endpoint using AWS Lambda API Gateway in Python.',
    originalHeight: '450px'
    }, {
    original: 'images/java-backend-certificate.jpg',
    thumbnail: 'images/java-backend-certificate.jpg',
    description: 'Independent learning and certification in Java Backend Solutions.',
    originalHeight: '450px',
    }, {
    original: 'images/python-wrapper-matplotlib.jpg',
    thumbnail: 'images/python-wrapper-matplotlib.jpg',
    description: 'Using wrappers in Python and Matplotlib to compare sorting algorithms.',
    originalHeight: '450px',
    }, {
    original: 'images/snippetslab-saving-code.jpg',
    thumbnail: 'images/snippetslab-saving-code.jpg',
    description: 'Using SnippetsLab to save code snippets or prior work to quickly find function examples.',
    originalHeight: '450px',
    }, {
    original: 'images/frontend-paper-prototype.jpg',
    thumbnail: 'images/frontend-paper-prototype.jpg',
    description: 'Frontend paper prototype for a microservice project.',
    originalHeight: '450px',
    }, {
    original: 'images/split-programmable-keyboard.jpg',
    thumbnail: 'images/split-programmable-keyboard.jpg',
    description: 'Learning to use a programmable split keyboard for ergonomics and typing efficiency.',
    originalHeight: '450px',
    }
]


function GalleryPage() {
    return (<>

    <h2> Gallery of Projects </h2>

<h3>Introduction:</h3>
    <p>This page is a sample gallery of some of my work.  I will be updating these photos with higher quality images, examples of more advanced projects from this quarter, and certifications in the near future. I have removed any photographs that are not SWE related.</p>

      <article className="image-gallery-wrapper">
        
        <ImageGallery items={images} />      
    </article>
        <br></br>
    </>
  );
}
export default GalleryPage;
                