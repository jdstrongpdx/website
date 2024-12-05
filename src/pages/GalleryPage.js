import HelmetComponent from "../components/HelmetComponent";
import React from "react";
import imageData from "../data/imageData";
import GalleryModal from "../components/GalleryModal";


function GalleryPage() {
    return (
        <div className="project">
          <HelmetComponent title="Gallery"/>
          <h2> Gallery </h2>
          <h3>A collection of pictures highlighting my software development projects or other work.</h3>
            <div className="centered">
            {imageData.map((image, index) => (
                <GalleryModal
                    key={index}
                    imageSrc={image.src}
                    altText={image.description}
                    label={image.description}
                />
            ))}
            </div>
        </div>
    );
}

export default GalleryPage;
