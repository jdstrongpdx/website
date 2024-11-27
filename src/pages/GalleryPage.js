import HelmetComponent from "../components/HelmetComponent";
import React from "react";
import galleryData from "../data/galleryData";
import GalleryModal from "../components/GalleryModal";


function GalleryPage() {
    return (<>
          <HelmetComponent title="Gallery"/>
          <h2> Gallery </h2>
          <h3>A collection of pictures highlighting my software development projects or other work.</h3>

            {galleryData.map((image, index) => (
                <GalleryModal
                    imageSrc={image.original}
                    altText={image.description}
                    label={image.description}
                />
            ))}

        </>
    );
}

export default GalleryPage;
