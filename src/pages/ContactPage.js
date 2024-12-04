import React, { Component } from 'react';
import HelmetComponent from "../components/HelmetComponent";

class Contact extends Component {
    render() {
        return(
            <div className='project'>
                <HelmetComponent title="Contact"/>
                <h2>Contact Page</h2>

                    <div className='centered'>
                        <p>Welcome to my contact page!</p>

                        <p>Send me an email at <a
                            href="mailto:jdstrongpdx@gmail.com">jdstrongpdx@gmail.com</a> or view my other contact
                            options below.</p>

                        <>I look forward to hearing from you!</>

                        <h2>Joel Strong</h2>
                        <h3>Full Stack Software Engineer</h3>
                        <div>
                            <img className="responsive-img"
                                 src="/images/SpringBusinessCard.png"
                                 style={{maxWidth: '800px'}}
                                 alt="Programming Business Card">
                            </img>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Contact;
