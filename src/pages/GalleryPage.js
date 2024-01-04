import ImageGallery from 'react-image-gallery';


const images = [
    {
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
    original: 'images/blockchain-example.png',
    thumbnail: 'images/blockchain-example.png',
    description: 'Blockchain mining output example.',
    }, {
    original: 'images/matplot.png',
    thumbnail: 'images/matplot.png',
    description: 'Using wrappers in Python and Matplotlib to compare sorting algorithms.',
    }, {
    original: 'images/snippets.png',
    thumbnail: 'images/snippets.png',
    description: 'Using SnippetsLab to save code snippets or prior work to quickly find function examples.',
  }, {
    original: 'images/splitKeyboard.jpeg',
    thumbnail: 'images/splitKeyboard.jpeg',
    description: 'Using an ergonomic programmable split keyboard to increase productivity and ergonomics.',
    }
]

function GalleryPage() {
    return (<>

    <h2> Gallery of Projects </h2>

<h3>Introduction:</h3>
    <p>This page is a sample gallery of some of my work and tools.</p>

      <article className="image-gallery-wrapper">
        
        <ImageGallery items={images} />      
    </article>
        <br></br>
    </>
  );
}
export default GalleryPage;
                