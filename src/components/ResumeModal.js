import React, {useState} from 'react';

const ResumeModal = ({ imageSrc, altText, label }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div
                 onClick={() => setIsOpen(true)}
                 style={{ cursor: 'pointer' }}
            >
                <img src={imageSrc}
                     alt={altText}
                     style={{ maxWidth: "100%" }}
                />
            </div>

            {isOpen && (
                <div onClick={() => setIsOpen(false)}
                     style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={imageSrc}
                         alt="Full Size" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                </div>
            )}
        </>
    );

};

export default ResumeModal;
