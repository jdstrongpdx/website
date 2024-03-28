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
  }, {
    original: 'images/Database1.png',
    thumbnail: 'images/Database1.png',
    description: 'Database Project using Node.js and MySQL to perform CRUD operations without an ORM.',
  }, {
    original: 'images/Database2.png',
    thumbnail: 'images/Database2.png',
    description: 'Example page of database project using Node.js and MySQL to perform CRUD operations without an ORM.',
  }, {
    original: 'images/RentalHomes.png',
    thumbnail: 'images/RentalHomes.png',
    description: 'Full Stack MongoDB, Express, React, and Node (MERN) webpage for performing CRUD operations on a Rental Home database.',
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
                