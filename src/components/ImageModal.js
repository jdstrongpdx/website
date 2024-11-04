import {useState} from "react";

const ImageModal = ({ imgSrc }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <img src={imgSrc} alt="Thumbnail" onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }} />
            {isOpen && (
                <div onClick={() => setIsOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={imgSrc} alt="Full Size" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                </div>
            )}
        </>
    );
};

export default ImageModal;
