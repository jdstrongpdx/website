import React, {useState} from 'react';

interface GalleryModalProps {
    imageSrc: string;
    altText: string;
    label?: string;
    border?: boolean
}

const GalleryModal: React.FC<GalleryModalProps> = ({ imageSrc, altText, label = null }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
                <div className="gallery-container"
                     onClick={() => setIsOpen(true)}
                >
                    <img src={imageSrc}
                         alt={altText}
                    />
                    {label && <p>{label}</p>}
                </div>
                {isOpen && (
                    <div className="gallery-fullscreen" onClick={() => setIsOpen(false)}>
                        <img src={imageSrc}
                             alt="Full Size"/>
                    </div>
                )}
            </>
            );

            };

            export default GalleryModal;
