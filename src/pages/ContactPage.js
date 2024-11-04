import React, { Component } from 'react';
import HelmetComponent from "../components/HelmetComponent";

class Contact extends Component {
    render() {
        return(
            <>
                <HelmetComponent title="Contact" />
                <h1>Contact Page</h1>


                <div className='card'>
                    <p className='centered'>Welcome to my contact page!</p>

                    <p className='centered'>Send me an email at <a
                        href="mailto:jdstrongpdx@gmail.com">jdstrongpdx@gmail.com</a> or view my other contact options below.</p>

                    <p className='centered'>I look forward to hearing from you!</p>

                    <h1>Joel Strong</h1>
                    <h2>Full Stack Software Engineer</h2>
                    <div>
                        <img className="responsive-img"
                             src="/images/SpringBusinessCard.png"
                             style={{maxWidth: '800px'}}
                             alt="Programming Business Card">
                        </img>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;
