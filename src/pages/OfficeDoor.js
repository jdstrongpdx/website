import HelmetComponent from "../components/HelmetComponent";
import React from "react";
import ImageModal from "../components/ImageModal";

const memeImages = [
    "/memes/meme1.png",
    "/memes/meme2.png",
    "/memes/meme3.png",
    "/memes/meme4.png",
    "/memes/meme5.png",
    "/memes/meme6.png",
    "/memes/meme7.png",
    "/memes/meme8.png",
    "/memes/meme9.png",
    "/memes/meme10.png",
    "/memes/meme11.png",
    "/memes/meme12.png",
    "/memes/meme13.png",
    "/memes/meme14.png",
    "/memes/meme15.png",
    "/memes/meme16.png",
    "/memes/meme17.png",
    "/memes/meme18.png",
];

const OfficeDoor = () => {
    return (
        <>
            <HelmetComponent title="Office Door"/>
            <h1>Office Door</h1>
            <p>It has been a tradition in my family to post funny cartoons on the outside of our office doors. In
                 the era of remote and hybrid work, office doors are no more. In place of my
                office door, I give to you this page - a collection of cartoons and memes that I especially enjoy and
                hope you do as well.</p>

            <container className="memes">
                {memeImages.map((imgSrc, index) => (
                    <ImageModal key={index} imgSrc={imgSrc} />
                ))}
            </container>
        </>
    )
}

export default OfficeDoor;
