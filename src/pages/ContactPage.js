import React, { Component } from 'react';
import HelmetComponent from "../components/HelmetComponent";

class Contact extends Component {
    render() {
        return(
            <>
                <HelmetComponent title="Contact" />
                <h1>Contact Page</h1>


                <div className='project'>
                    <div className='centered'>
                        <p>Welcome to my contact page!</p>

                        <p>Send me an email at <a
                            href="mailto:jdstrongpdx@gmail.com">jdstrongpdx@gmail.com</a> or view my other contact
                            options below.</p>

                        <>I look forward to hearing from you!</>

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
                </div>
            </>
        );
    }
}

export default Contact;
