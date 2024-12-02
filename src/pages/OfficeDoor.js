import HelmetComponent from "../components/HelmetComponent";
import React from "react";
import ImageModal from "../components/ImageModal";

const OfficeDoor = () => {
    return (
        <>
            <HelmetComponent title="Office Door"/>
            <h1>Office Door</h1>
            <p>It has been a tradition in my family to post funny cartoons on the outside of our office doors. In
                the era of remote and hybrid work, office doors are no more. In place of my
                office door, I give to you this page - a collection of cartoons and memes that I especially enjoy and
                hope you do as well.</p>

            <div className="memes">
                {Array.from({ length: 20 }, (_, i) =>
                    <ImageModal key={i + 1} imgSrc={`/memes/meme${i + 1}.png`} />
                )}
            </div>
        </>
    )
}

export default OfficeDoor;
