import React from 'react';
import {Helmet} from "react-helmet";


const HelmetComponent = ({title}) => {
    const canonicalUrl = window.location.href;
    return (
        <>
            <Helmet>
                <title>{title} - jdstrongpdx.com</title>
                <meta name="description" content={title + " Page for Joel Strong's Software Engineering Website"}/>
                <link rel="canonical" href={canonicalUrl}/>
            </Helmet>
        </>
    )
}

export default HelmetComponent