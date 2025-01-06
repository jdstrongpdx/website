import HelmetComponent from "../components/HelmetComponent";
import React from "react";
import GalleryModal from "../components/GalleryModal";

const OfficeDoor = () => {
    return (
        <div className="project">
            <HelmetComponent title="Office Door"/>
            <h2>Office Door</h2>
            <p>It has been a tradition in my family to post funny cartoons on the outside of our office doors. In
                the era of remote and hybrid work, office doors are no more. In place of my
                office door, I give to you this page - a collection of cartoons and memes that I especially enjoy and
                hope you do as well.</p>

            <div className="gallery-row">
                {Array.from({length: 23}, (_, i) =>
                    <GalleryModal
                        key={i + 1}
                        imageSrc={`/memes/meme${i + 1}.png`}
                        altText="meme"
                    />
                )}

            </div>
        </div>
    )
}

export default OfficeDoor;
