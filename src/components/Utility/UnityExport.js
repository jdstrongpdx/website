import React from 'react';

const UnityExport = () => {
    const isLargeScreen = window.innerWidth > 1600;

    return (
        <>
            {isLargeScreen ? (
                <div className="game">
                    <iframe
                        src="https://play.unity.com/en/games/29073861-10a0-4027-839c-303f0eb8d8ac/ml-breakout"
                        title="ML-Breakout WebGL Game"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    >
                    </iframe>
                </div>
            ) : (
                <div className="video">
                    <figure>
                        <a href="https://play.unity.com/en/games/29073861-10a0-4027-839c-303f0eb8d8ac/ml-breakout" target="_blank" rel="noopener noreferrer">
                            <img width="900px" alt="OSU Project Poster" src="images/MLB-WebGL.png"/>
                        </a>
                        <figcaption>Click image above to play game on Unity Play</figcaption>
                    </figure>
                </div>
            )}
        </>
    );
};

export default UnityExport;